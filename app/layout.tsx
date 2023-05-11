import { Navbar } from "@/components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import { RegisterModal } from "@/components/modals/RegisterModal";
import { LoginModal } from "@/components/modals/LoginModal";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Nextjs777",
  description: "description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <LoginModal />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
