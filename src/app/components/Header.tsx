import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header(props: {
  h1: string;
  p: string;
  linkRoute: string;
  linkName: string;
}) {
  return (
    <header className="flex justify-between items-center p-4">
      <div>
        <h1 className="text-3xl">{props.h1}</h1>
        <p className="text-sm">{props.p}</p>
      </div>
      <nav className="flex gap-4">
        <Link href={props.linkRoute}>
          <Button>{props.linkName}</Button>
        </Link>
        <Link href="/new">
          <Button>+&nbsp;New Entry</Button>
        </Link>
      </nav>
    </header>
  );
}
