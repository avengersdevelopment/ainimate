"use server";

import { ComponentProps } from "react";
import Head from "next/head";
import Script from "next/script";

import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import Home from "./home/page";

export default async function IndexPage() {
  return (
    <>
      <main className="bg-[#141414]">
        <TooltipProvider delayDuration={100}>
         <Home/>
        </TooltipProvider>

        <Script src="https://www.googletagmanager.com/gtag/js?id=GTM-WH4MGSHS" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GTM-WH4MGSHS');
          `}
        </Script>
      </main>
    </>
  );
}
