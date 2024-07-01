import Image from "next/image";
import clsx from "clsx";

export default function IngredientItem({
  ingredient,
  onIngredientSelect,
}: {
  ingredient: any;
  onIngredientSelect: React.MouseEventHandler;
}) {
  return (
    <button
      onClick={() => {
        onIngredientSelect(ingredient);
      }}
      type="button"
      className={clsx(
        "border-2 rounded-sm  bg-white w-32 h-36 shadow-md relative lg:hover:border-green-600 lg:hover:border-1 lg:hover:shadow-lg lg:hover:shadow-green-600 hover:cursor-pointer",
        ingredient.selected
          ? "border-green-700 border-1 shadow-lg shadow-green-600"
          : "border-gray-500/[.60]"
      )}
    >
      {ingredient.selected && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 absolute -top-0 -right-0 z-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
          />
        </svg>
      )}
      <Image
        className="h-auto w-auto object-cover rounded"
        src={ingredient.src}
        alt={ingredient.name}
        priority={ingredient.name == "Arugula"}
        sizes="(max-width: 1200px) 50vw, 33vw"
        fill
      ></Image>
      <div className="truncate absolute bottom-0 p-1 w-full text-sm bg-gray-200/[.60] font-semibold lowercase">
        {ingredient.name}
      </div>
    </button>
  );
}
