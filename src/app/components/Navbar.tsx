"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { playfair } from "@/app/layout";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { name: "Quem Somos", href: "/quem-somos" },
    { name: "Refeições Coletivas", href: "/refeicoes" },
    { name: "Marmitas Fit", href: "/marmitas" },
    { name: "Ceias", href: "/ceias" },
    { name: "Eventos", href: "/eventos" },
    { name: "Contato", href: "/#contact" },
  ];

  return (
    <header className="sticky w-full top-0 z-50  border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-7xl px-8 md:px-6 flex h-16 items-center mx-auto">
        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="link"
              className="mr-2 px-0 text-base hover:bg-transparent focus:ring-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="w-full">
            <nav className="flex flex-col items-center gap-4 pt-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${playfair.className} text-xl font-medium transition-colors hover:text-primary`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://api.whatsapp.com/send/?phone=5521987017520&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="mt-4 w-full bg-green-600"
                  onClick={() => setIsOpen(false)}
                >
                  Fale no Whatsapp
                </Button>
              </a>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <div className="flex flex-1 items-center justify-center md:justify-start">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/nutrilightlogo3.png"
              alt="Logo"
              width={220}
              height={50}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:flex ">
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={` ${playfair.className}  group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-xl font-medium transition-colors hover:underline`}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Call to Action Button (Desktop) */}
        <div className="hidden flex-1 items-center justify-end md:flex">
          <a
            href="https://api.whatsapp.com/send/?phone=5521987017520&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-green-600">Fale no Whatsapp</Button>
          </a>
        </div>
      </div>
    </header>
  );
}
