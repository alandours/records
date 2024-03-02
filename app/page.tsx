import { RecordsContainer } from "@/components/RecordsContainer";

export default async function Home() {
  return (
    <div className="flex flex-col items-center bg-slate-50">
      <RecordsContainer />
    </div>
  );
}
