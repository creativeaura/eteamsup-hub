import Link from "next/link";

export default function HubLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen grid md:grid-cols-[240px_1fr]">
            <aside className="border-r p-4">
                <div className="font-medium mb-4">
                    <Link href="/hub/dashboard">eTeamSup Hub</Link>
                </div>
                <nav className="flex flex-col gap-2 text-sm">
                    <Link href="/hub/dashboard">Dashboard</Link>
                    <Link href="/hub/profile">Profile</Link>
                    <Link href="/hub/sign-in">Sign in</Link>
                    <Link href="/hub/sign-up">Sign up</Link>
                </nav>
            </aside>
            <main className="p-6">{children}</main>
        </div>
    );
} 