import Link from "next/link";

export default function HomePage() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-24">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">Your team hub, simplified</h1>
            <p className="mt-4 text-lg opacity-80 max-w-2xl">Build a modern, secure workspace for your team. Public pages for your marketing site and a protected hub for your users.</p>
            <div className="mt-8 flex gap-3">
                <Link href="/hub/sign-up" className="rounded bg-foreground text-background px-5 py-3 text-sm font-medium">Get started</Link>
                <Link href="/pricing" className="rounded border px-5 py-3 text-sm font-medium">See pricing</Link>
            </div>
        </section>
    );
} 