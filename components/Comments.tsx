import React from "react";
import prisma from "@/prisma/client";
import CommentList from "./feed/CommentList";
const Comments = async ({ postId }: { postId: number }) => {
  const comments = await prisma.comment.findMany({
    where: {
      postId,
    },
    include: {
      user: true,
    },
  });
  return (
    <div className="">
      {/* write comment */} <CommentList comments={comments} postId={postId} />
    </div>
  );
};

export default Comments;
