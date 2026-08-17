import StartPopout from "@/components/creator/StartPopout/StartPopout";

StartPopout;
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 h-screen">
      Tu będzie znajdowac sie kreator CV
      <StartPopout />
    </div>
  );
}
