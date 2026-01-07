import { useEffect, useState } from 'react';

interface VisitorCounterProps {
  label?: string;
}

export default function VisitorCounter({ label = 'Visitors' }: VisitorCounterProps) {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const STORAGE_KEY = 'visitor_counted';
    const isNewVisitor = !sessionStorage.getItem(STORAGE_KEY);
    const endpoint = isNewVisitor
      ? 'https://api.counterapi.dev/v1/niranjanskulkarni-com/visits/up'
      : 'https://api.counterapi.dev/v1/niranjanskulkarni-com/visits';

    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        if (data.count !== undefined) {
          setCount(data.count);
          if (isNewVisitor) sessionStorage.setItem(STORAGE_KEY, 'true');
        }
      })
      .catch(() => {}) // Silently fail - counter will stay hidden
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <span className="inline-flex items-center gap-1.5 text-white/40 text-xs">
        <svg className="w-3.5 h-3.5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        <span>...</span>
      </span>
    );
  }

  if (count === null) {
    return null; // Hide counter if API fails
  }

  const formattedCount = count.toLocaleString('en-IN');

  return (
    <span className="inline-flex items-center gap-1.5 text-white/40 text-xs">
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
      <span>{formattedCount} {label}</span>
    </span>
  );
}
