import Link from "next/link";
import { FileText } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="h-16 px-12 flex items-center justify-between">
        <span className="text-xl font-semibold text-ink-primary">Note Taker</span>
        <div className="flex gap-4">
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-medium text-ink-primary border border-border rounded-md hover:bg-surface transition-colors"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 text-sm font-medium text-white bg-ink-primary rounded-md hover:bg-ink-secondary transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center px-0 py-20 gap-6">
        <h1 className="text-5xl font-semibold text-ink-primary">Note Taker</h1>
        <p className="text-lg text-ink-secondary max-w-lg text-center">
          Capture your thoughts, organize your ideas, and access them anywhere.
        </p>
        <div className="flex gap-4">
          <Link
            href="/signup"
            className="px-6 py-3 text-sm font-medium text-white bg-ink-primary rounded-md hover:bg-ink-secondary transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="#features"
            className="px-6 py-3 text-sm font-medium text-ink-primary border border-border rounded-md hover:bg-surface transition-colors"
          >
            Learn More
          </Link>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="px-12 py-20">
        <h2 className="text-3xl font-semibold text-ink-primary mb-8">Features</h2>
        <div className="flex gap-6">
          {/* Feature Card 1 */}
          <div className="flex-1 p-6 bg-canvas rounded-lg border border-border shadow-sm">
            <FileText className="w-5 h-5 text-ink-secondary mb-3" />
            <h3 className="text-base font-semibold text-ink-primary mb-1">Quick Notes</h3>
            <p className="text-sm text-ink-tertiary">Jot down ideas instantly</p>
          </div>

          {/* Feature Card 2 */}
          <div className="flex-1 p-6 bg-canvas rounded-lg border border-border shadow-sm">
            <FileText className="w-5 h-5 text-ink-secondary mb-3" />
            <h3 className="text-base font-semibold text-ink-primary mb-1">Organize</h3>
            <p className="text-sm text-ink-tertiary">Keep your notes categorized</p>
          </div>

          {/* Feature Card 3 */}
          <div className="flex-1 p-6 bg-canvas rounded-lg border border-border shadow-sm">
            <FileText className="w-5 h-5 text-ink-secondary mb-3" />
            <h3 className="text-base font-semibold text-ink-primary mb-1">Access Anywhere</h3>
            <p className="text-sm text-ink-tertiary">Sync across all your devices</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="h-16 px-12 flex items-center justify-between">
        <span className="text-sm text-ink-tertiary">© 2026 Note Taker. All rights reserved.</span>
        <div className="flex gap-6">
          <span className="text-sm text-ink-secondary cursor-pointer">Privacy</span>
          <span className="text-sm text-ink-secondary cursor-pointer">Terms</span>
          <span className="text-sm text-ink-secondary cursor-pointer">Contact</span>
        </div>
      </footer>
    </div>
  );
}
