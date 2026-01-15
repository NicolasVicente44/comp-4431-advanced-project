import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppSidebar, MobileSidebarTrigger } from "@/components/layout";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Modern dashboard application",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <SidebarProvider defaultOpen={defaultOpen}>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4 justify-end lg:justify-start">
              <SidebarTrigger className="-ml-1 hidden lg:flex" />
              <MobileSidebarTrigger />
            </header>
            <main className="flex-1 p-4">{children}</main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}

