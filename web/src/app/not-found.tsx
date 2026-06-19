import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-[70vh] items-center overflow-hidden border-b border-faint">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(40% 60% at 50% 0%, rgba(255,182,0,0.10) 0%, transparent 62%)",
        }}
      />
      <div className="wrap relative py-24 text-center">
        <span className="font-mono text-[clamp(4rem,3rem+8vw,8rem)] font-semibold leading-none tracking-tighter text-accent">
          404
        </span>
        <h1 className="t-h2 mx-auto mt-6 max-w-[16ch]">
          This page shipped to nowhere.
        </h1>
        <p className="mx-auto mt-4 max-w-[46ch] text-[17px] leading-relaxed text-secondary">
          The page you&rsquo;re after doesn&rsquo;t exist or has moved. Let&rsquo;s
          get you back on track.
        </p>
        <div className="mt-9 flex justify-center gap-3.5 max-md:flex-col max-md:items-stretch">
          <Link href="/" className={cn(buttonVariants({ size: "lg" }), "max-md:w-full")}>
            Back home
          </Link>
          <Link
            href="/work"
            className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "max-md:w-full")}
          >
            See our work
          </Link>
        </div>
      </div>
    </main>
  );
}
