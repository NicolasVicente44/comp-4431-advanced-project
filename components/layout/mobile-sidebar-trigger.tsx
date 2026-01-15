"use client";

import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";

export function MobileSidebarTrigger() {
    const { openMobile, toggleSidebar } = useSidebar();

    return (
        <Button
            variant="ghost"
            size="icon"
            className="lg:hidden size-7"
            onClick={toggleSidebar}
        >
            {openMobile ? <X /> : <Menu />}
            <span className="sr-only">Toggle Sidebar</span>
        </Button>
    );
}
