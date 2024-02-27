import { RecordsContainer } from "@/components/RecordsContainer";

export default async function Home() {
  return (
    <div className="flex flex-col items-center py-8">
      <h1 className="text-3xl uppercase font-bold mb-2">Records</h1>
      <RecordsContainer />
    </div>
  );
}
