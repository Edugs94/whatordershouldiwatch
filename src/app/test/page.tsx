'use client';

import { getReleaseOrder } from '@/lib/getReleaseOrder';

export default function TestPage() {
  const ordered = getReleaseOrder([
    { title: "Iron Man 2", releaseDate: "2010-05-07" },
    { title: "Iron Man", releaseDate: "2008-05-02" },
  ]);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Release Order (mock)</h1>
      <ul className="list-disc list-inside">
        {ordered.map((m, i) => <li key={i}>{m}</li>)}
      </ul>
    </main>
  );
}
