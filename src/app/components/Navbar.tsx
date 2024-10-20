"use client";
import React, { useState } from "react";
import { HoveredLink, Menu } from "./ui/navbar-menu";
import { cn } from "@/app/utils/util";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed bottom-10 inset-x-0 max-w-2xl mx-auto z-50 bg-slate-950",
        className
      )}
    >
      <Menu setActive={setActive}>
        <HoveredLink active={active} href="">
          Github
        </HoveredLink>
      </Menu>
    </div>
  );
}

export default Navbar;
