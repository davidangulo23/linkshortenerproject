import { SignUpButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { ArrowRight, Layers3, Link2, LockKeyhole, Sparkles } from "lucide-react";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Link2,
    title: "Short links, less clutter",
    description:
      "Turn long, unwieldy URLs into clean links that are easy to share anywhere.",
  },
  {
    icon: Layers3,
    title: "Keep everything together",
    description:
      "Find and manage your links from one simple workspace whenever you need them.",
  },
  {
    icon: LockKeyhole,
    title: "Your links, your account",
    description:
      "Sign in securely and keep your personal collection of links in one place.",
  },
];

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <main className="flex flex-1 flex-col">
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/15 via-background to-background"
        />
        <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 pb-24 pt-16 sm:px-10 sm:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-32">
          <div className="flex flex-col items-start">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3.5 py-1.5 text-sm text-muted-foreground shadow-sm">
              <Sparkles className="size-4 text-primary" aria-hidden="true" />
              <span>A simpler way to share</span>
            </div>
            <h1 className="max-w-xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Make every link <span className="text-primary">go further.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">
              Shorten long URLs and keep your links organized in one clean,
              secure workspace. Sharing starts here.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <SignUpButton mode="modal">
                <Button size="lg" className="h-11 px-5 text-base">
                  Get started for free
                  <ArrowRight data-icon="inline-end" />
                </Button>
              </SignUpButton>
              <a
                href="#features"
                className="inline-flex h-11 items-center justify-center rounded-lg px-5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                Explore features
              </a>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Create an account to start building your link collection.
            </p>
          </div>

          <div
            aria-label="Preview of a link management workspace"
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-primary/10 blur-3xl" />
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/10">
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <div>
                  <p className="text-sm font-semibold">Your workspace</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    A home for your links
                  </p>
                </div>
                <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Link2 className="size-4" aria-hidden="true" />
                </div>
              </div>
              <div className="space-y-3 p-5">
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Your short link
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Link2 className="size-4" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold">
                        links.example.com/launch
                      </p>
                      <p className="mt-1 truncate text-xs text-muted-foreground">
                        example.com/products/our-new-launch
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-border bg-background p-4">
                    <p className="text-xs text-muted-foreground">Easy to share</p>
                    <p className="mt-2 text-sm font-semibold">One clean URL</p>
                  </div>
                  <div className="rounded-xl border border-border bg-background p-4">
                    <p className="text-xs text-muted-foreground">Easy to find</p>
                    <p className="mt-2 text-sm font-semibold">All in one place</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-muted/60 px-4 py-3">
                  <span className="flex size-8 items-center justify-center rounded-full bg-background text-primary">
                    <LockKeyhole className="size-4" aria-hidden="true" />
                  </span>
                  <p className="text-xs leading-5 text-muted-foreground">
                    Your personal link collection, ready when you are.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="border-t border-border bg-muted/30">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Built for your everyday links
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Less link chaos. More getting there.
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              A straightforward toolkit to make sharing and managing your URLs
              feel effortless.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
