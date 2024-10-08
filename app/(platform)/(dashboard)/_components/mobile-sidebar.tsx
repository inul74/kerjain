"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { Sidebar } from "./sidebar";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export const MobileSidebar = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  const { onOpen, onClose, isOpen } = useMobileSidebar()

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Button
        size="sm"
        type="button"
        onClick={onOpen}
        className="block md:hidden mr-2"
        variant="ghost"
      >
        <Menu className="h-4 w-4" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="p-2 pt-10">
          <SheetTitle className="hidden"></SheetTitle>
          <SheetDescription className="hidden"></SheetDescription>
          <Sidebar storageKey="k-sidebar-mobile-state" />
        </SheetContent>
      </Sheet>
    </>
  );
};
