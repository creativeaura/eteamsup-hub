import Link from "next/link";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="border-b">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="font-medium">eTeamSup</Link>
                    <nav className="hidden sm:flex gap-4 text-sm">
                        <Link href="/about">About</Link>
                        <Link href="/pricing">Pricing</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/terms-and-conditions">Terms</Link>
                        <Link href="/privicy-policy">Privacy</Link>
                    </nav>
                    <div className="flex gap-2 text-sm">
                        <Link href="/hub/sign-in" className="px-3 py-1">Sign in</Link>
                        <Link href="/hub/sign-up" className="rounded bg-foreground text-background px-3 py-1">Get started</Link>
                    </div>
                </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t">
                <div className="max-w-6xl mx-auto px-4 py-6 text-sm opacity-70">
                    © {new Date().getFullYear()} eTeamSup. All rights reserved.
                </div>
            </footer>
        </div>
    );
} 