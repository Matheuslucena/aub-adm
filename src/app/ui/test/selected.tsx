import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import IngredientItem from "./ingredientItem";

export default function Selected({
  ingredients,
  categories,
}: {
  ingredients: any;
  categories: Array<string>;
}) {
  const ingredientsCategory = (category: string) => {
    const list = ingredients
      .filter(
        (ing: any) =>
          ing.category === category &&
          ing.name.indexOf("No ") !== 0 &&
          ing.name.indexOf("Mixed") !== 0 &&
          ing.name.indexOf("On Side") !== 0
      )
      .sort((a: any, b: any) => {
        if (a.name.indexOf("No ") == 0) return -1;
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });

    return list.map((ingredient: any) => {
      return (
        <li key={ingredient.id} className="font-normal text-gray-500 italic">
          {ingredient.name}
        </li>
      );
    });
  };

  const ingredientsListElements = categories.map((category: string) => {
    return (
      <div key={category} className="flex flex-col mb-4">
        <div className="text-lg mb-1">{category}</div>
        <div className="flex flex-row flex-wrap gap-1.5">
          <ul className="list-disc list-inside">
            {ingredientsCategory(category)}
          </ul>
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b flex h-16">
        <h1 className="truncate text-wrap text-2xl font-semibold text-gray-900">
          Selected
        </h1>
      </div>
      <ScrollArea className="h-[calc(100vh-116px)]">
        <div className="flex flex-col flex-wrap gap-2 p-4 pt-0 mt-4">
          {ingredientsListElements}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
