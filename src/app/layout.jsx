import { Bricolage_Grotesque, Poppins } from "next/font/google";
import { AuthProvider } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "HigherSchools | Modern School Management System",
  description:
    "A streamlined SaaS management ecosystem for progressive academic institutions.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/20 minimal-scrollbar">
        <AuthProvider>
          <Header />
          <main className="flex-grow w-full">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
