// components/navbar/Navbar.tsx

import Link from "next/link";
import MobileMenu from "./MobileMenu";
import {
  HomeIcon,
  SearchIcon,
  PlusCircleIcon,
  MessageCircle,
  Contact2Icon,
  HandshakeIcon,
  BookOpenIcon,
} from "lucide-react";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Loading from "../Loading";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-orange-600">
          Next Social
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
        {/* LINKS */}
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex items-center gap-2">
            <HomeIcon />
            <span>Homepage</span>
          </Link>
          <Link href="/friends" className="flex items-center gap-2">
            <HandshakeIcon />
            <span>Friends</span>
          </Link>
          <Link href="/stories" className="flex items-center gap-2">
            <BookOpenIcon />
            <span>Stories</span>
          </Link>
        </div>
        <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent outline-none"
          />
          <SearchIcon />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <Loading />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Contact2Icon />
            </div>
            <div className="cursor-pointer">
              <MessageCircle />
            </div>
            <div className="cursor-pointer">
              <PlusCircleIcon />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 text-sm">
              <Link href="/sign-in">Login</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
