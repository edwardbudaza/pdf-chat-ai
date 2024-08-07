"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Error() {
  return (
    <div className="flex mt-20 h-full flex-col items-center justify-center space-y-4">
      <Image
        src="/error.png"
        height={300}
        width={300}
        alt="error"
        className="dark:hidden"
      />
      <Image
        src="/error-dark.png"
        height={300}
        width={300}
        alt="error"
        className="hidden dark:block"
      />
      <h2 className="text-xl font-medium">Someting went went wrong!</h2>
      <Button asChild>
        <Link href="/dashboard">Go back</Link>
      </Button>
    </div>
  );
}