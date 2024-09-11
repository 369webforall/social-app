import React from "react";
import Image from "next/image";
const Comments = () => {
  return (
    <div className="">
      {/* write comment */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.unsplash.com/photo-1719937206590-6cb10b099e0f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 flex items-center justify-between bg-slate-600 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="write comment...."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* display comments */}

      <div className="bg-slate-200 p-2 mt-4 rounded-xl">
        {/* avatar */}
        <div className="flex items-center gap-4 my-2">
          <Image
            src="https://images.unsplash.com/photo-1719937206590-6cb10b099e0f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Robert Welker</span>
        </div>
        {/* description */}
        <div className="flex flex-col gap-2">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
            odio voluptas, ad ab quis aut consequuntur. Doloremque voluptate
            vero laborum! Expedita repellendus nihil rerum eius vitae quibusdam
            voluptatum perspiciatis placeat!
          </p>
          <div className="flex items-center gap-8 text-xs text-gray-500">
            <div className="flex gap-4 items-center bg-slate-100 p-2 rounded-xl">
              <Image
                src="/like.png"
                width={16}
                height={16}
                alt="like"
                className="cursor-pointer"
              />
              <span className="text-gray-300">|</span>
              <span className="text-gray-500">
                128 <span className="hidden md:inline"> Likes</span>
              </span>
            </div>
            <div className="bg-gray-200 rounded-full p-2 cursor-pointer">
              Reply
            </div>
          </div>
        </div>
        {/* icon */}
        <div className="">
          <Image
            src="/more.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer w-4 h-4 my-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
