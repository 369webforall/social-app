import Feed from "@/components/Feed";
import RightMenu from "@/components/rightMenu/RightMenu";
import LeftMenu from "@/components/leftMenu/LeftMenu";

export default function Home() {
  return (
    <div className="p-6 font-[family-name:var(--font-geist-sans)] flex gap-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="dev" />
      </div>
    </div>
  );
}
