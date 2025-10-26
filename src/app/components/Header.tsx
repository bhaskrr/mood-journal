import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusCircle, Menu } from "lucide-react";

interface HeaderProps {
  h1: string;
  p: string;
  linkRoute: string;
  linkName: string;
}

export default function Header({ h1, p, linkRoute, linkName }: HeaderProps) {
  return (
    <header className="top-0 left-0 right-0">
      <div className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="h-20 flex items-center justify-between">
            {/* Text Section */}
            <div>
              <h1 className="text-3xl font-bold">
                {h1}
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {p}
              </p>
            </div>

            {/* Navigation Section */}
            <nav className="flex items-center gap-6">
              <Link href={linkRoute}>
                <Button 
                 variant="outline"
                  className="text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {linkName}
                </Button>
              </Link>
              <Link href="/new">
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white shadow-lg"
                >
                  <PlusCircle className="h-4 w-4" />
                  New Entry
                </Button>
              </Link>
              
              {/* Mobile Menu Button */}
              <Button 
                variant="ghost" 
                size="icon"
                className="md:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}