'use client';

import { useEffect, useState } from 'react';

export default function HomePage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('/api/proxy')
      .then((r) => r.json())
      .then(setData)
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  return (
    <main>
      <h1>Next.js App Router Frontend</h1>
      <p>Connected to backend at <code>http://localhost:4000</code></p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
