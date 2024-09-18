# docker run --name social-app -e POSTGRES_USER=myuser -e POSTGRES_PASSWORD=mypassword -e POSTGRES_DB=mydatabase -p 5434:5432 -d postgres

# DATABASE_URL="postgresql://myuser:mypassword@localhost:5434/social_db?schema=public"

# https://dashboard.ngrok.com/get-started/setup/windows

## code

- step 1
  format date

```ts
// UserInfoCard.tsx

const createdAtDate = new Date(user.createdAt);

const formattedDate = createdAtDate.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
```

- step 2 , add variables to hold boolean value when button is clicked.

```ts
let isUserBlocked = false;
let isFollowing = false;
let isFollowingSent = false;

const { userId: currentUserId } = auth();

if (currentUserId) {
  const blockRes = await prisma.block.findFirst({
    where: {
      blockerId: currentUserId,
      blockedId: user.id,
    },
  });

  blockRes ? (isUserBlocked = true) : (isUserBlocked = false);

  const followRes = await prisma.follower.findFirst({
    where: {
      followerId: currentUserId,
      followingId: user.id,
    },
  });

  followRes ? (isFollowing = true) : (isFollowing = false);
  const followReqRes = await prisma.followRequest.findFirst({
    where: {
      senderId: currentUserId,
      receiverId: user.id,
    },
  });

  followReqRes ? (isFollowingSent = true) : (isFollowingSent = false);
}
```

- Step 3
- update RightMenu.tsx
- Add Suspense from react

What is Suspense in React ?

Suspense is a React feature that allows developers to display a temporary or "fallback" UI while waiting for data to load. Once the data is loaded the component that needed the data is rendered. The Suspense component receives two props, children and fallback

```ts
import { Suspense } from "react";

<Suspense fallback="Loading....">
  <Component />
</Suspense>;
```

- step 4

- once we have created variable and udate the data in UserInforCard.tsx
- create client component to interact with UserInfoCard,
- when we click the button we will call this Component.

```ts
// rightMenu/UserInfoCardInteraction.tsx

import { switchFollow } from "@/lib/actions";

const UserInfoCardInteraction = ({
  userId,
  isUserBlocked,
  isFollowing,
  isFollowingSent,
}: {
  userId: string;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowingSent: boolean;
}) => {
  const [userState, setUserState] = useState({
    following: isFollowing,
    blocked: isUserBlocked,
    followingRequestSent: isFollowingSent,
  });

  const follow = async () => {
    try {
      await switchFollow(userId);
      setUserState((prev) => ({
        ...prev,
        following: prev.following && false,
        followingRequestSent:
          !prev.following && !prev.followingRequestSent ? true : false,
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form action={follow}>
        <button className="w-full bg-blue-500 text-white text-sm rounded-md p-2">
          {userState.following
            ? "Following"
            : userState.followingRequestSent
            ? "Friend Request Sent"
            : "Follow"}
        </button>
      </form>
      <form action="" className="self-end ">
        <button>
          <span className="text-red-400 text-xs cursor-pointer">
            {userState.blocked ? "Unblock User" : "Block User"}
          </span>
        </button>
      </form>
    </>
  );
};

export default UserInfoCardInteraction;
```

- step 5
- remove the buttons and replace with below code

```ts
// UserInfoCard.tsx

<UserInfoCardInteraction
  userId={user.id}
  isUserBlocked={isUserBlocked}
  isFollowing={isFollowing}
  isFollowingSent={isFollowingSent}
/>
```

- step 6
- lib/actions.ts

```ts
"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "@/prisma/client";

export const switchFollow = async (userId: string) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) {
    throw new Error("User is not authenticated!");
  }

  try {
    const existingFollow = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: userId,
      },
    });

    if (existingFollow) {
      await prisma.follower.delete({
        where: {
          id: existingFollow.id,
        },
      });
    } else {
      const existingFollowRequest = await prisma.followRequest.findFirst({
        where: {
          senderId: currentUserId,
          receiverId: userId,
        },
      });

      if (existingFollowRequest) {
        await prisma.followRequest.delete({
          where: {
            id: existingFollowRequest.id,
          },
        });
      } else {
        await prisma.followRequest.create({
          data: {
            senderId: currentUserId,
            receiverId: userId,
          },
        });
      }
    }
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong!");
  }
};
```
