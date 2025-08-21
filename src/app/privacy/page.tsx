import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Notice - BrightCode',
  description: 'Privacy policy and data handling practices for BrightCode.',
  openGraph: {
    title: 'Privacy Notice - BrightCode',
    description: 'Privacy policy and data handling practices for BrightCode.',
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight mb-6">Privacy Notice</h1>
        <p className="text-muted-foreground mb-6">
          This is a placeholder privacy page for BrightCode. Please replace with your finalized legal
          privacy policy text before launch.
        </p>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          <p>
            When you request our free guide or book a strategy call, we may collect your name, email address,
            and other details you provide.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold">2. How We Use Information</h2>
          <p>
            We use your information to send the requested guide, follow up on your inquiry, and share occasional
            BrightCode updates. You can unsubscribe anytime.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold">3. Data Sharing</h2>
          <p>
            We do not sell your data. We may use trusted third-party providers (e.g., email delivery) to
            process your information securely.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold">4. Your Rights</h2>
          <p>
            You can request access, correction, or deletion of your data by contacting us.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold">5. Contact Us</h2>
          <p>
            For privacy questions, reach out at <a href="mailto:hello@brightcode.dev" className="underline">hello@brightcode.dev</a>.
          </p>
        </section>

        <p className="text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </main>

      <Footer />
    </div>
  );
} 