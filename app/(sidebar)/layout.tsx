import React from "react";
import {SidebarLayout} from "@/components/layouts/sidebar-layout";

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarLayout>
      {children}
    </SidebarLayout>
  );
}
