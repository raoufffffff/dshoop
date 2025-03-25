import Adds from "@/components/Adds/Adds";
import BestOffer from "@/components/BestOffer/BestOffer";
import Categories from "@/components/Categories/Categories";
import VieCard from "@/components/VieCard/VieCard";

export default function Home() {
  return (
    <div className="w-full">
      <Adds />

      <h1 className="font-bold text-xl mt-3 px-5">التصنيفات</h1>
      <Categories />
      <h1 className="font-bold text-xl mt-3 px-5">أفضل عرض</h1>
      <BestOffer />
      <VieCard />
    </div>
  );
}
