import { Metadata } from "next";
import Navbar from "@/app/components/navbar";

export const metadata: Metadata = {
  title: "Guest Lecture",
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
