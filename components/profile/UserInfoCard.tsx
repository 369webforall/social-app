import React from "react";
import Link from "next/link";
import { MapPinned, School, Briefcase } from "lucide-react";
const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* bottom */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-lg text-black">Robert Welker</span>
          <span className="text-xs">@robert</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta in ex,
          incidunt eligendi cumque expedita ipsum illum amet, ullam deleniti
          maiores iure quaerat pariatur laborum magni facere commodi ducimus
          eum.
        </p>
        <div className="flex gap-2">
          <MapPinned />
          <span>
            Living in <b>Philippine</b>
          </span>
        </div>
        <div className="flex gap-2">
          <School />
          <span>
            Went to <b>Denver high school USA</b>
          </span>
        </div>
        <div className="flex gap-2">
          <Briefcase />
          <span>
            work at <b>Petrotec</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserInfoCard;
