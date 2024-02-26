"use client";

import { Button, Navbar } from "../lib/components";
import "./index.css";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-center">
      <Button>Learn More</Button>
      <Navbar />
    </main>
  );
}
