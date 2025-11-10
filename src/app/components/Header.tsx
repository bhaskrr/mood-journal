import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusCircle, Menu } from "lucide-react";

interface HeaderProps {
  h1: string;
  p: string;
  links: Array<{ name: string; route: string }>;
}

export default function Header({ h1, p, links }: HeaderProps) {
  return (
    <header className="top-0 left-0 right-0">
      <div className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="h-20 flex items-center justify-between">
            {/* Text Section */}
            <div>
              <h1 className="text-3xl font-bold">{h1}</h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">{p}</p>
            </div>

            {/* Navigation Section */}
            <nav className="flex items-center gap-6">
              {links.map((link) => {
                return (
                  <Link href={link.route}>
                    <Button
                      variant="outline"
                      className={`${
                        link.route == "/new"
                          ? "bg-primary text-white shadow-lg"
                          : "text-slate-700 border-black"
                      }`}
                    >
                      {link.route == "/new" ? (
                        <PlusCircle className="h-4 w-4" />
                      ) : (
                        ""
                      )}
                      {link.name}
                    </Button>
                  </Link>
                );
              })}
              {/* Mobile Menu Button */}
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}