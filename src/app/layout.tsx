"use client"

import localFont from "next/font/local";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/navbar";
import { StepsProvider } from "@/contexts/StepsContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StepsProvider>
          <SidebarProvider>
            <AppSidebar />
            <main className="w-full h-screen">
              <Navbar /> 
              <div className="w-full h-[calc(100vh-64px)]">
                {children}
              </div>
            </main>
          </SidebarProvider>
        </StepsProvider>
      </body>
    </html>
  );
}