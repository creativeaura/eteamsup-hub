export default function PricingPage() {
    return (
        <section className="max-w-5xl mx-auto px-4 py-16">
            <h1 className="text-3xl font-semibold mb-6">Pricing</h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border rounded p-6">
                    <h2 className="font-semibold">Starter</h2>
                    <p className="opacity-80 text-sm mt-2">For individuals getting started.</p>
                </div>
                <div className="border rounded p-6">
                    <h2 className="font-semibold">Team</h2>
                    <p className="opacity-80 text-sm mt-2">For growing teams.</p>
                </div>
                <div className="border rounded p-6">
                    <h2 className="font-semibold">Enterprise</h2>
                    <p className="opacity-80 text-sm mt-2">For large organizations.</p>
                </div>
            </div>
        </section>
    );
} 