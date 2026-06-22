"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CALENDLY_URL } from "@/lib/site";
import { HeroDotGrid } from "./HeroDotGrid";
import { ProductShowcase } from "./ProductShowcase";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <header
      id="top"
      className="relative overflow-hidden border-b border-faint pb-24 pt-[92px] max-md:pb-14 max-md:pt-12"
    >
      {/* Interactive dot-grid — bottom-most layer, behind all hero content */}
      <HeroDotGrid />

      {/* Deep soft gold glow — low opacity, slow drift for atmosphere */}
      <div
        aria-hidden
        className={`pointer-events-none absolute -top-1/3 right-[-10%] h-[760px] w-[760px] ${reduce ? "" : "glow-drift"}`}
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,182,0,0.10) 0%, rgba(255,182,0,0.04) 38%, transparent 68%)",
        }}
      />
      {/* Drifting amber gradient mesh (transform/opacity only) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(48% 46% at 72% 18%, rgba(255,182,0,0.13) 0%, transparent 64%), radial-gradient(36% 40% at 90% 4%, rgba(255,182,0,0.07) 0%, transparent 60%)",
        }}
        animate={
          reduce
            ? undefined
            : { x: [0, 26, -14, 0], y: [0, -18, 12, 0], scale: [1, 1.06, 1.02, 1] }
        }
        transition={{ duration: 22, ease: "easeInOut", repeat: Infinity }}
      />
      {/* Faint engineering grid, masked toward the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(var(--line-faint) 1px, transparent 1px), linear-gradient(90deg, var(--line-faint) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          WebkitMaskImage:
            "radial-gradient(70% 60% at 60% 10%, #000, transparent 78%)",
          maskImage:
            "radial-gradient(70% 60% at 60% 10%, #000, transparent 78%)",
        }}
      />

      <div className="wrap relative grid grid-cols-[1.02fr_0.98fr] items-center gap-12 max-lg:gap-10 max-md:grid-cols-1 max-md:gap-9">
        <div>
          <span className="eyebrow">AI-native product studio</span>
          <h1 className="t-display mt-[22px]">
            We design, build, and scale{" "}
            <span className="text-accent">SaaS &amp; AI products.</span>
          </h1>
          <p className="mt-6 max-w-[540px] text-[18px] leading-[1.65] text-secondary max-md:text-[16px]">
            From AI-powered features to platforms serving thousands of users — we
            embed a senior, AI-native product team and ship. We build AI into the
            product, and use it across how we deliver.
          </p>
          <div className="mt-9 flex flex-wrap gap-3.5 max-md:flex-col max-md:items-stretch">
            <Link href="/work" className={cn(buttonVariants({ size: "lg" }), "max-md:w-full")}>
              See what we&rsquo;ve shipped
            </Link>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "max-md:w-full")}
            >
              Book a scoping call
            </a>
          </div>
        </div>

        <ProductShowcase />
      </div>
    </header>
  );
}
