import Image from "next/image";
import { Inter } from "next/font/google";
import Timer from "@/components/Timer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
        <Timer />

    </main>
  );
}
