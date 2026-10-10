import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy in Santa Monica",
  description: "A warm, collaborative therapy practice for adults navigating anxiety, trauma, chronic stress, burnout, and perfectionism in Santa Monica, California.",
  keywords: ["anxiety therapist Santa Monica", "trauma therapy Santa Monica", "burnout counseling Santa Monica", "EMDR therapy", "therapy for adults California"],
  icons: { icon: "/site-icon.svg" },
  openGraph: { title: "Dr. Maya Reynolds, PsyD | A calmer way forward", description: "Thoughtful, evidence-based therapy for adults navigating anxiety, trauma, and burnout.", type: "website" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#F8F5EE" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
