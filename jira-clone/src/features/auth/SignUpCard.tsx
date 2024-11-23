"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DottedSeparator from "@/components/dotted-separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().trim().min(8, "Minimum is 8"),
  email: z.string().email(),
  password: z.string().min(8, "Minimum is 8"),
});

const onSubmit = (values: z.infer<typeof formSchema>) => {
  console.log({ values });
};

export default function SignUpCard() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  return (
    <Card className="w-full h-full md:-w[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Welcome!</CardTitle>
      </CardHeader>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="px-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="name"
                      type="text"
                      disabled={false}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder="Email" disabled={false} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="password"
                      type="password"
                      disabled={false}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={false} size="lg" className="w-full">
              Sign Up
            </Button>
          </form>
        </Form>
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
      <div className="px-7">
        <CardContent className="px-7 flex items-center justify-center">
          <p>
            Already have an account?
            <Link href="/sign-in">
              <span>Sign In</span>
            </Link>
          </p>
        </CardContent>
      </div>
    </Card>
  );
}
