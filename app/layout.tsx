import { Navbar } from "@/components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import { RegisterModal } from "@/components/modals/RegisterModal";
import { LoginModal } from "@/components/modals/LoginModal";
import { getCurrentUser } from "@/lib/session";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Nextjs777",
  description: "description",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />
        {children}
      </body>
    </html>
  );
}
