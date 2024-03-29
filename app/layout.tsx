import "./globals.css";
import "@/node_modules/react-modal-video/scss/modal-video.scss";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import { CustomProvider } from "rsuite";

export const metadata = {
  title: "CyberPen",
  description: "Generated by create next app",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ zoom: "90%" }}>
        <Navbar />
        <CustomProvider>{children}</CustomProvider>
        <Footer />
      </body>
    </html>
  );
}
