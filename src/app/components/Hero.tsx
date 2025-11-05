import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <section className="flex flex-col gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl text-center tracking-widest">
            Mira
          </h1>
          <p>
            <em>“Because your thoughts matter”</em>
          </p>
        </div>
        <div className="text-center flex gap-3">
          <Link href="/dashboard">
            <Button>
              Dashboard <ExternalLink />
            </Button>
          </Link>
          <Link href="/journal">
            <Button variant="ghost" className="border-1 border-black">
              Journal <ExternalLink />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
