import { starWars } from '@/data/sagas/star-wars';

const sagaDataMap: Record<string, any> = {
  'star-wars': starWars,
};

export default function SagaPage({ params }: { params: { saga: string } }) {
  const saga = sagaDataMap[params.saga];
  if (!saga) return <p>Saga not found: {params.saga}</p>;

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">{saga.name}</h1>
      <section className="mt-6">
        <h2 className="text-xl font-semibold">📅 Release Order</h2>
        <ul className="list-disc list-inside">
          {saga.orders.release.map((item: string, i: number) => <li key={i}>{item}</li>)}
        </ul>

        <h2 className="text-xl font-semibold mt-6">🧭 Chronological Order</h2>
        <ul className="list-disc list-inside">
          {saga.orders.chronological.map((item: string, i: number) => <li key={i}>{item}</li>)}
        </ul>

        <h2 className="text-xl font-semibold mt-6">🔥 Community Recommendation</h2>
        <ul className="list-disc list-inside">
          {saga.orders.community.map((item: string, i: number) => <li key={i}>{item}</li>)}
        </ul>
      </section>
    </main>
  );
}
