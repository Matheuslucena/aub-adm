import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import MainNav from "./ui/mainNav";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Aubergine Kitchen Admin",
  description: "Aubergine Kitchen Training",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased h-full",
          inter.variable
        )}
      >
        <div className="h-screen">
          <div className="flex flex-col h-full">
            <MainNav />
            <div className="flex-1">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
