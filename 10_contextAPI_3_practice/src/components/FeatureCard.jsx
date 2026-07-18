import React from 'react'

function FeatureCard({ icon, title, description }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900 dark:hover:border-indigo-500">
      <div className="text-5xl">{icon}</div>

      <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">
        {title}
      </h3>

      <p className="mt-3 text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;