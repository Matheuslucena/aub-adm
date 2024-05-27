import clsx from "clsx";
import Image from "next/image";

interface Ingredient {
  id: number;
  category:
    | "TYPE"
    | "GREEN"
    | "BASE"
    | "PROTEIN"
    | "TOSS_IN"
    | "PREMIUM"
    | "HERBS"
    | "DRESSING"
    | "BREAD"
    | "OTHER";
  name: string;
  src: string;
  selected: boolean;
}

export default function IngredientItem({
  item,
  onItemClick,
}: {
  item: Ingredient;
  onItemClick: any;
}) {
  function handleItemClick(item: Ingredient) {
    console.log("Item Clicked" + item.name);
    onItemClick(item);
  }

  return (
    <div
      className={clsx(
        "border-2 rounded-sm  bg-white w-32 h-36 shadow-md relative lg:hover:border-fuchsia-700 lg:hover:border-1 lg:hover:shadow-lg lg:hover:shadow-purple-800 hover:cursor-pointer",
        item.selected
          ? "border-fuchsia-700 border-1 shadow-lg shadow-purple-800"
          : "border-gray-500/[.60]"
      )}
      onClick={() => handleItemClick(item)}
    >
      <Image
        className="h-auto w-auto object-cover rounded"
        src={item.src}
        alt={item.name}
        fill
      ></Image>
      <div className="truncate absolute bottom-0 p-1 w-full text-sm bg-gray-500/[.60] font-semibold">
        {item.name}
      </div>
    </div>
  );
}
