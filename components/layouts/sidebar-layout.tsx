import { AppSidebar } from "@/components/navigation/sidebar/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";

export function SidebarLayout({
                                children,
                              }: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}