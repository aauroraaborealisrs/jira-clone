import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
            <Image src="/next.svg" alt="Next.js logo" width={50} height={50} />
            {/* <div className="flex items-center gap-2"> */}
                <Button variant={"secondary"}>
                    Sign up
                </Button>
            {/* </div> */}
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
        {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
