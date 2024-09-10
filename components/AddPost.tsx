import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Button } from "./ui/button";

const AddPost = () => {
  return (
    <div className="w-full p-4 shadow-md bg-white rounded-lg flex flex-col gap-4 justify-center text-sm">
      <div className="w-full flex gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <textarea
          name="post"
          id=""
          placeholder="What is happening!!"
          className="bg-slate-100 rounded-lg flex-1"
        ></textarea>
        <Image
          src="/emoji.png"
          alt="emoji"
          width={20}
          height={20}
          className="w-5 h-5 cursor-pointer self-end"
        />
      </div>

      <div className="flex items-center gap-4 mt-4 text-gray-400">
        <div className="flex flex-col gap-2 cursor-pointer">
          <Image src="/addImage.png" alt="add photo" width={20} height={20} />
          <span>photo</span>
        </div>
        <div className="flex flex-col gap-2 cursor-pointer">
          <Image src="/addVideo.png" alt="add video" width={20} height={20} />
          <span>Video</span>
        </div>
        <div className="flex flex-col gap-2 cursor-pointer">
          <Image src="/addevent.png" alt="add event" width={20} height={20} />
          <span>Event</span>
        </div>
        <div className="self-end">
          <Button variant="outline">Add Post</Button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
