import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "No-D-Lehs DJ Services",
  description: "Professional DJ services for all your events - weddings, parties, corporate events, and more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-8 mt-20">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} No-D-Lehs DJ Services. All rights reserved.</p>
            <p className="mt-2 text-gray-400">Professional DJ Services for Every Occasion</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
