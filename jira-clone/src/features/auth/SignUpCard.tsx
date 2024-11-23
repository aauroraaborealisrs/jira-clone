"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DottedSeparator from "@/components/dotted-separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function SignUpCard() {
  return (
    <Card className="w-full h-full md:-w[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Welcome back</CardTitle>
      </CardHeader>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="px-7">
        <form className="space-y-4">
          <Input
            required
            type="email"
            value={""}
            onChange={() => {}}
            placeholder="Email"
            disabled={false}
            className=""
          />
          <Input
            required
            type="password"
            value={""}
            onChange={() => {}}
            placeholder="Password"
            disabled={false}
            min={8}
            max={256}
          />
          <Button disabled={false} size="lg" className="w-full">
            Sign Up
          </Button>
        </form>
      </CardContent>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="px-7 flex flex-col gap-y-4">
        <Button
          variant="secondary"
          disabled={false}
          size="lg"
          className="w-full"
        >
          <div className="mr-2 size-5">
            <FcGoogle />
          </div>
          Sign Up with Google
        </Button>

        <Button
          variant="secondary"
          disabled={false}
          size="lg"
          className="w-full"
        >
          <div className="mr-2 size-5">
            <FaGithub />
          </div>
          Sign Up with Github
        </Button>
      </CardContent>
    </Card>
  );
}
