import ContactCard from "./ContactCard";

const ContactPage = () => {
    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 py-16 px-4">
            {/* Container */}
            <div className="mx-auto max-w-6xl">
                {/* Hero */}
                <header className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
                        Let's build something great together
                    </h1>
                    <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Have questions, ideas or want to work together? Send a message and we’ll reply within 1-2 business days.
                    </p>
                </header>

                {/* Grid: Form | Info */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Form (spans 2 columns on large screens) */}
                    <div className="lg:col-span-2">
                        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-800">
                            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                                Send a message
                            </h2>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <label className="flex flex-col">
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Your name</span>
                                        <input
                                            aria-label="Your name"
                                            className="mt-1 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500 transition"
                                            placeholder="Arsan Pathak"
                                        />
                                    </label>

                                    <label className="flex flex-col">
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</span>
                                        <input
                                            type="email"
                                            aria-label="Email"
                                            className="mt-1 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500 transition"
                                            placeholder="you@example.com"
                                        />
                                    </label>
                                </div>

                                <label className="flex flex-col">
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</span>
                                    <input
                                        className="mt-1 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500 transition"
                                        placeholder="Project, question, or feedback"
                                    />
                                </label>

                                <label className="flex flex-col">
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</span>
                                    <textarea
                                        rows={6}
                                        className="mt-1 px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
                                        placeholder="Tell me more about what you need..."
                                    />
                                </label>

                                <div className="flex items-center justify-between gap-4">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-2.5 rounded-lg shadow-md transition"
                                    >
                                        Send message
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90">
                                            <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" fill="currentColor" />
                                        </svg>
                                    </button>

                                    <div className="text-sm text-slate-500 dark:text-slate-400">
                                        Or email: <a href="mailto:support@example.com" className="text-indigo-600 dark:text-indigo-300 font-medium">support@example.com</a>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* Small CTA / socials */}
                        <div className="mt-5 flex gap-3">
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm"
                            >
                                Twitter
                            </a>
                        </div>
                    </div>

                    {/* Right column: Contact info cards + map */}
                    <aside className="space-y-5">
                        <div className="sticky top-24">
                            <ContactCard
                                title="Email"
                                icon={
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M3 7.5v9A2.5 2.5 0 0 0 5.5 19h13A2.5 2.5 0 0 0 21 16.5v-9A2.5 2.5 0 0 0 18.5 5h-13A2.5 2.5 0 0 0 3 7.5z" stroke="currentColor" strokeWidth="0" />
                                        <path d="M21 7.5L12 13 3 7.5" fill="currentColor" />
                                    </svg>
                                }
                            >
                                <a href="mailto:support@example.com" className="block underline">support@example.com</a>
                                <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">Typically replies within 1–2 business days</div>
                            </ContactCard>

                            <div className="mt-4">
                                <ContactCard
                                    title="Phone"
                                    icon={
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M22 16.92V21a1 1 0 0 1-1.11 1A19 19 0 0 1 3 5.11 1 1 0 0 1 4 4h4.09a1 1 0 0 1 1 .75c.12.86.38 1.7.76 2.5a1 1 0 0 1-.24 1.02L9.7 10.7a14 14 0 0 0 4.6 4.6l1.44-1.2a1 1 0 0 1 1.02-.24c.8.38 1.64.64 2.5.76a1 1 0 0 1 .75 1V21z" fill="currentColor" />
                                        </svg>
                                    }
                                >
                                    <a href="tel:+919876543210" className="block">+91 98765 43210</a>
                                    <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">Call hours: Mon–Fri, 9am–6pm IST</div>
                                </ContactCard>
                            </div>

                            <div className="mt-4">
                                <ContactCard
                                    title="Office"
                                    icon={
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M3 11.5V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.5L12 4 3 11.5z" fill="currentColor" />
                                        </svg>
                                    }
                                >
                                    Kolkata, West Bengal, India
                                </ContactCard>
                            </div>

                            {/* Small map preview */}
                            <div className="mt-6 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm">
                                <iframe
                                    title="Map"
                                    src="https://maps.google.com/maps?q=kolkata&t=&z=12&ie=UTF8&iwloc=&output=embed"
                                    className="w-full h-40"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </aside>
                </section>

                {/* Footer note */}
                <footer className="mt-12 text-center text-sm text-slate-500 dark:text-slate-400">
                    Prefer a quick chat? <a href="tel:+919876543210" className="text-indigo-600 dark:text-indigo-300 underline">Call us</a> — or send a message above.
                </footer>
            </div>


        </main>
    );
};

export default ContactPage;
