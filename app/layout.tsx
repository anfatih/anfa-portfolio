import "./globals.css";
import React from "react";

export const metadata = {
  title: "Fatih Portfolio",
  description: "Portfolio Website",
};

// Definisikan tipe props
type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}