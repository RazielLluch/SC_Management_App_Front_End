"use client"

import * as React from "react"

import { NavDocuments } from "@/components/navigation/sidebar/nav-documents"
import { NavMain } from "@/components/navigation/sidebar/nav-main"
import { NavSecondary } from "@/components/navigation/sidebar/nav-secondary"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {School2Icon} from "lucide-react"
import SigninSignoutButton from "@/components/signin-signout-button";
import {documents, navClouds, navMain, navSecondary} from "@/components/navigation/navigation";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: navMain,
  navClouds: navClouds,
  navSecondary: navSecondary,
  documents: documents,
}
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="data-[slot=sidebar-menu-button]:p-1.5!"
              render={<a href="#" />}
            >
              <School2Icon className="size-5!" />
              <span className="text-base font-semibold">MSU-IIT OMS</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SigninSignoutButton/>
    </Sidebar>
  )
}
