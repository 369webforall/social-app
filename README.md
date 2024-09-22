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

---

## work on media component

- open components/profile/UserMediaCard.tsx
- Fetch all the images from post belonging to the user.
- make your function async
- add data to post to see the result.

```ts
const postWithMedia = await prisma.post.findMany({
  where: {
    userId: user.id,
    img: {
      not: null,
    },
  },
  take: 8,
  orderBy: {
    createdAt: "desc",
  },
});
```

## update UserInfoCard.tsx

- for logged in user profile we don't want to see follow and block button.

```ts
{
  currentUserId && currentUserId !== user.id && (
    <UserInfoCardInteraction
      userId={user.id}
      isUserBlocked={isUserBlocked}
      isFollowing={isFollowing}
      isFollowingSent={isFollowingSent}
    />
  );
}
```

## update friend request component.

- FriendRequests.tsx

```ts
const { userId } = auth();
if (!userId) return null;

const requests = await prisma.followRequest.findMany({
  where: {
    receiverId: userId,
  },
  include: {
    sender: true,
  },
});
```

- create FriendRequestList.tsx component

```ts
"use client";

import { acceptFollowRequest, declineFollowRequest } from "@/lib/actions";
import { FollowRequest, User } from "@prisma/client";
import Image from "next/image";
import { useOptimistic, useState } from "react";

type RequestWithUser = FollowRequest & {
  sender: User;
};

const FriendRequestList = ({ requests }: { requests: RequestWithUser[] }) => {
  const [requestState, setRequestState] = useState(requests);

  const accept = async (requestId: number, userId: string) => {
    removeOptimisticRequest(requestId);
    try {
      await acceptFollowRequest(userId);
      setRequestState((prev) => prev.filter((req) => req.id !== requestId));
    } catch (err) {
      console.log(err);
    }
  };
  const decline = async (requestId: number, userId: string) => {
    removeOptimisticRequest(requestId);
    try {
      await declineFollowRequest(userId);
      setRequestState((prev) => prev.filter((req) => req.id !== requestId));
    } catch (err) {
      console.log(err);
    }
  };

  const [optimisticRequests, removeOptimisticRequest] = useOptimistic(
    requestState,
    (state, value: number) => state.filter((req) => req.id !== value)
  );
  return (
    <div className="">
      {optimisticRequests.map((request) => (
        <div className="flex items-center justify-between" key={request.id}>
          <div className="flex items-center gap-4">
            <Image
              src={request.sender.avatar || "/noAvatar.png"}
              alt=""
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-semibold">
              {request.sender.name && request.sender.surname
                ? request.sender.name + " " + request.sender.surname
                : request.sender.username}
            </span>
          </div>
          <div className="flex gap-3 justify-end">
            <form action={() => accept(request.id, request.sender.id)}>
              <button>
                <Image
                  src="/accept.png"
                  alt=""
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </button>
            </form>
            <form action={() => decline(request.id, request.sender.id)}>
              <button>
                <Image
                  src="/reject.png"
                  alt=""
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendRequestList;
```

- FriendRequest.tsx

```ts
{
  /* USER */
}
<FriendRequestList requests={requests} />;
```

- Add server actions - actions.ts

```ts
export const acceptFollowRequest = async (userId: string) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) {
    throw new Error("User is not Authenticated!!");
  }

  try {
    const existingFollowRequest = await prisma.followRequest.findFirst({
      where: {
        senderId: userId,
        receiverId: currentUserId,
      },
    });

    if (existingFollowRequest) {
      await prisma.followRequest.delete({
        where: {
          id: existingFollowRequest.id,
        },
      });

      await prisma.follower.create({
        data: {
          followerId: userId,
          followingId: currentUserId,
        },
      });
    }
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong!");
  }
};

export const declineFollowRequest = async (userId: string) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) {
    throw new Error("User is not Authenticated!!");
  }

  try {
    const existingFollowRequest = await prisma.followRequest.findFirst({
      where: {
        senderId: userId,
        receiverId: currentUserId,
      },
    });

    if (existingFollowRequest) {
      await prisma.followRequest.delete({
        where: {
          id: existingFollowRequest.id,
        },
      });
    }
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong!");
  }
};
```

## Update the profile page

- If we are the owner of the profile page then we can update the profile page.
- conditionaly display the profile update button.
- update image in cloudinary
- useActionState hooks is a Hook that allows you to update state based on the result of a form action.
- useFormState -
