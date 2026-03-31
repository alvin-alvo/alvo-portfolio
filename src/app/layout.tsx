import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alvin Binoy - AlvoLabs Dashboard",
  description: "Cybersecurity Analyst and Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-mono h-[100dvh] w-screen overflow-hidden bg-[#f4f4f0] text-foreground" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
