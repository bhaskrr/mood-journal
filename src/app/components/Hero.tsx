import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <section className="flex flex-col gap-4">
        <div>
          <h1 className="text-sm md:text-lg lg:text-8xl text-center tracking-widest">
            Mira
          </h1>
          <p>
            <em>“Because your thoughts matter”</em>
          </p>
        </div>
        <div className="text-center">
          <Link href="/dashboard">
            <Button>
              Dashboard <ExternalLink />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
