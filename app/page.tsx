import { RecordsContainer } from "@/components/RecordsContainer";

export default async function Home() {
  return (
    <div className="flex flex-col items-center py-4">
      <RecordsContainer />
    </div>
  );
}
