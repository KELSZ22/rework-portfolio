import type { Metadata } from "next";
import { Home } from "../../features";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function HomePage() {
  return (
    <div className="font-sans">
      <Home />
    </div>
  );
}
