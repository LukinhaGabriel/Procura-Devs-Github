import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import ThemeProvider from "@/Provider/themeprovider";
import Footer from "@/components/footer/footer";

const outfit = Outfit({
  weight: ["100","200","300","400", "500", "600", "700", "800", "900"],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Github User Search",
  description: "Pesquise por usuários do GitHub e veja suas informações de perfil",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-BR">
      <body className={outfit.className}>
        <ThemeProvider>
          <div className="container">
            <Header />
            {children}
            <Footer />
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

