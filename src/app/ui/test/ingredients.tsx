"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import IngredientItem from "./ingredientItem";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { MouseEvent, useRef } from "react";

export default function Ingredients({
  product,
  ingredients,
  categories,
  progress,
  onSelect,
  onClearSelection,
  onSend,
}: {
  product: any;
  ingredients: any;
  categories: any;
  progress: any;
  onSelect: React.MouseEventHandler;
  onClearSelection: React.MouseEventHandler;
  onSend: React.MouseEventHandler;
}) {
  const scrollRef = useRef(null);

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
        <IngredientItem
          key={ingredient.id}
          ingredient={ingredient}
          onIngredientSelect={(ing) => onSelect(ing)}
        />
      );
    });
  };

  const ingredientsListElements = categories.map((category: string) => {
    return (
      <div key={category} className="flex flex-col mb-4">
        <div className="text-lg mb-1">{category}</div>
        <div className="flex flex-row flex-wrap gap-1.5">
          {ingredientsCategory(category)}
        </div>
      </div>
    );
  });

  const handleSend = (e: any) => {
    onSend(e);
    scrollRef
      .current!.getElementsByTagName("div")[0]
      .scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <div className="flex flex-col h-full">
      <div className="relative p-4 border-b flex h-16 stic">
        <h1 className=" truncate text-wrap text-2xl font-semibold text-gray-900">
          {product.name}
        </h1>
        <div className="md:flex flex-row ml-auto">
          <Button
            variant="link"
            className="mr-5 md:flex hidden"
            onClick={onClearSelection}
          >
            Clear Selection
          </Button>
          <Button onClick={handleSend}>SEND</Button>
        </div>
      </div>
      <div className="flex p-4 items-center border-b h-10">
        <Progress
          className="w-[25%] h-3"
          value={progress.value}
          max={progress.total}
        />
        <div className="ml-2">
          Test Progress: {progress.current} / {progress.total}
        </div>
      </div>
      <ScrollArea className="h-[calc(100vh-156px)]" ref={scrollRef}>
        <div className="flex flex-col flex-wrap gap-2 p-4 pt-0 mt-4">
          {ingredientsListElements}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
