import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="p-6 font-[family-name:var(--font-geist-sans)]">
      <h1>Home Page</h1>
      <Button variant="destructive" className="my-4">
        Click here!!
      </Button>
    </div>
  );
}
