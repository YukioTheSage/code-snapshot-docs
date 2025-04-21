import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import CTA from '@/components/home/CTA';

export const metadata = {
  title: 'Code Snapshots | Simple Snapshots for VS Code',
  description: 'A dead-simple snapshot system for VS Code that works alongside Git. Take code snapshots with a single keystroke and navigate between them without any complexity.',
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <CTA />
    </div>
  );
}