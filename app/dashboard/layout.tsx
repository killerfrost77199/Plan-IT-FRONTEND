import { Metadata } from "next";
import Navbar from "@/app/components/navbar"; // Assuming this is the correct path to your Navbar component
import { ReactNode } from "react";
import styles from "./DashboardLayout.module.css"; // Import CSS file for styling

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Plan(IT)",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <Navbar />
        </header>
        <main className={styles.main}>{children}</main> {/* Use main tag for dashboard content */}
      </body>
    </html>
  );
}
