import React from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MenuIcon, MountainIcon } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/academic", label: "Academic" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
];

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
    prefetch={false}
  >
    {label}
  </Link>
);

const Navbar = () => {
  return (
    <>
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 justify-between fixed z-50 bg-background top-0 left-0">
        <div className="w-[170px] lg:mr-auto">
          <Link href="/" prefetch={false}>
            <Image src="/ACUMEN.png" alt="logo" width={170} height={50} />
          </Link>
        </div>

       
        <div className="hidden w-full justify-center lg:flex">
          <nav className="flex items-center gap-6 text-lg font-semibold">
            {navLinks.map(({ href, label }) => (
              <NavLink key={label} href={href} label={label} />
            ))}
          </nav>
        </div>

      
        <div className="ml-auto gap-2 hidden lg:flex">
          <Button variant="outline">Sign in</Button>
          <Button>Sign up</Button>
        </div>

        
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden border-none"
            >
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="grid gap-4 py-6">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  prefetch={false}
                >
                  {label}
                </Link>
              ))}
              <div className="flex flex-col gap-2">
                <Button variant="outline">Sign in</Button>
                <Button>Sign up</Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
};

export default Navbar;
