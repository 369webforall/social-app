import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Comments from "./Comments";
import { User, Post as PostType } from "@prisma/client";
import PostInteraction from "./feed/PostInteraction";
type FeedPostType = PostType & { user: User } & {
  likes: { userId: string }[];
} & {
  _count: { comments: number };
};
const Post = ({ post }: { post: FeedPostType }) => {
  return (
    <div className="flex flex-col gap-4">
      {/* User */}
      <div className="flex items-center justify-between">
        <div className="flex  items-center gap-4">
          <Avatar>
            <AvatarImage src={post.user.avatar || "/noAvatar.png"} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <span>
            {post.user.surname && post.user.name
              ? post.user.name + " " + post.user.surname
              : post.user.username}
          </span>
        </div>
        <Image src="/more.png" alt="more" width={16} height={16} />
      </div>
      {/* description */}
      <div className="flex flex-col  gap-4">
        {post.img && (
          <div className="w-full min-h-96 relative">
            <Image
              src={post.img}
              alt="reading habit"
              fill
              className="object-cover rounded-md"
            />
          </div>
        )}
        <p>{post.desc}</p>
      </div>

      {/* interaction */}
      <PostInteraction
        postId={post.id}
        likes={post.likes.map((like) => like.userId)}
        commentNumber={post._count.comments}
      />
      <Comments postId={post.id} />
    </div>
  );
};

export default Post;
