import { Metadata } from "next";
import Navbar from "@/app/components/navbar"; // Assuming this is the correct path to your Navbar component
import { ReactNode } from "react";
// import styles from "./DashboardLayout.module.css"; // Import CSS file for styling

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Plan(IT)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header >
          <Navbar />
        </header>
        <main style={{ height: '90vh' }}>{children}</main> 
      </body>
    </html>
  );
}
