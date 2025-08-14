export default function SignUpPage() {
    return (
        <div className="max-w-sm">
            <h1 className="text-2xl font-semibold mb-4">Create your account</h1>
            <form className="space-y-3">
                <input className="w-full border rounded px-3 py-2" placeholder="Name" />
                <input className="w-full border rounded px-3 py-2" placeholder="Email" type="email" />
                <input className="w-full border rounded px-3 py-2" placeholder="Password" type="password" />
                <button className="w-full rounded bg-foreground text-background px-3 py-2">Sign up</button>
            </form>
        </div>
    );
} 