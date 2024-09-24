import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="w-full max-w-7xl mx-auto">
        {children}
        <Footer />
      </main>
    </>
  );
}
