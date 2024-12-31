import type { Metadata } from "next";
import "./globals.css";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "MAP || Medical Advanced Platform",
  description: "MAP || Medical Advanced Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
      </head>
      <body>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <Navbar />
            <main>{children}</main>
            <ToastContainer />
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
