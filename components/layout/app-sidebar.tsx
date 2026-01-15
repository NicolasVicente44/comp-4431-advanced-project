"use client";

import { Home, LogOut } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      {/* App Logo & Title */}
      <SidebarHeader className="h-14 flex items-center justify-center p-0 px-2">
        <div className="flex items-center justify-between w-full group-data-[collapsible=icon]:justify-center">
          <SidebarMenu className="group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:w-auto">
            <SidebarMenuItem className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center">
              <SidebarMenuButton size="lg" asChild className="group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-0 group-data-[collapsible=icon]:justify-center">
                <a href="/dashboard" className="group-data-[collapsible=icon]:justify-center">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                    A
                  </div>
                  <div className="flex flex-col gap-0.5 leading-none group-data-[collapsible=icon]:hidden">
                    <span className="font-semibold">App Name</span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarHeader>

      {/* Navigation */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Dashboard">
                  <a href="/dashboard">
                    <Home />
                    <span>Dashboard</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* User Profile */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent"
                >
                  <Avatar className="size-8 rounded-lg">
                    <AvatarFallback className="rounded-lg">U</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">Username</span>
                    <span className="truncate text-xs text-muted-foreground">
                      user@email.com
                    </span>
                  </div>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                side="top"
                sideOffset={4}
                className="w-[--radix-dropdown-menu-trigger-width] min-w-48"
              >
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
