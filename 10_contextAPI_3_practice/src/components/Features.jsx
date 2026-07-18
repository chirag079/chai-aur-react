

import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section className="py-20">
      <h2 className="text-center text-4xl font-bold text-slate-900 dark:text-white">
        Why Context API?
      </h2>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        <FeatureCard
          icon="🎨"
          title="Custom Themes"
          description="Share theme state across your application without prop drilling."
        />

        <FeatureCard
          icon="🌙"
          title="Dark Mode"
          description="Toggle between light and dark themes using your own Context API."
        />

        <FeatureCard
          icon="⚡"
          title="Reusable Components"
          description="Every component reacts automatically whenever the theme changes."
        />
      </div>
    </section>
  );
}

export default Features;