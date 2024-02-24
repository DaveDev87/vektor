"use client";

import { Sidebar } from "@/components/ui/sidebar";
import Link from "next/link";
import { BananaIcon, HomeIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { cva } from "class-variance-authority";

const navigationItem = cva(
  "w-8 h-8 flex justify-center items-center rounded-lg",
  {
    variants: {
      active: {
        true: "text-blue-700 bg-neutral-200",
        false: "",
      },
    },
    defaultVariants: {
      active: false,
    },
  },
);

export function Navbar() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <Link href="/" className={navigationItem({ active: pathname === "/" })}>
        <HomeIcon strokeWidth={1} />
      </Link>
      <Link
        href="/dashboard/"
        className={navigationItem({ active: pathname === "/dashboard" })}
      >
        <BananaIcon strokeWidth={1} />
      </Link>
    </Sidebar>
  );
}
