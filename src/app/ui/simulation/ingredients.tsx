"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ingredients as ingredientsDB } from "@/data/ingredients";
import { Button } from "@/components/ui/button";
import IngredientItem from "./ingredientItem";
import { useState } from "react";

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

export default function Ingredients({
  ingredients,
  onUpdateList,
  onSend,
}: {
  ingredients: any[];
  onUpdateList: any;
  onSend: any;
}) {
  const [selectedOnly, setSelectedOnly] = useState(false);

  const categories = [
    //"TYPE",
    "GREEN",
    "BASE",
    "PROTEIN",
    "TOSS_IN",
    "PREMIUM",
    "HERBS",
    "DRESSING",
    "BREAD",
    //"OTHER",
  ];

  function handleItemClick(item: Ingredient) {
    const listCopy = [...ingredients];
    const idx = ingredients.indexOf(item);
    item.selected = !item.selected;
    listCopy[idx] = item;
    onUpdateList(listCopy);
  }

  const handleSelected = (checked: boolean) => {
    setSelectedOnly(checked);
  };

  const handleSend = () => {
    onSend();
  };

  const handleClear = () => {
    const listCopy = [...ingredients];
    listCopy.map((ing) => (ing.selected = false));
    onUpdateList(listCopy);
  };

  const ingredientsList = categories.map((cat) => (
    <div key={cat} className="flex flex-col mb-4">
      <div className="text-lg mb-1">{cat}</div>
      <div className="flex flex-row flex-wrap gap-1.5">
        {ingredients
          .filter(
            (ing) =>
              ing.category === cat &&
              ing.name.indexOf("No ") !== 0 &&
              ing.name.indexOf("Mixed") !== 0 &&
              ing.name.indexOf("On Side") !== 0
          )
          .filter((ing) => (ing.selected && selectedOnly) || !selectedOnly)
          .sort((a, b) => {
            if (a.name.indexOf("No ") == 0) return -1;
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          })
          .map((ing) => {
            return (
              <IngredientItem
                key={ing.id}
                item={ing as Ingredient}
                onItemClick={handleItemClick}
              />
            );
          })}
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b flex h-16">
        <h1 className="text-2xl font-semibold text-gray-900">Ingredients</h1>
        <div className="md:flex flex-row ml-auto hidden">
          <Button variant="link" className="mr-5" onClick={handleClear}>
            Clear Selection
          </Button>
          <div className="flex items-center space-x-2 mr-6">
            <Switch checked={selectedOnly} onCheckedChange={handleSelected} />
            <Label htmlFor="airplane-mode">Only Selected</Label>
          </div>
          <Button onClick={handleSend}>SEND</Button>
        </div>
      </div>
      <ScrollArea className="h-[calc(100vh-116px)]">
        <div className="flex flex-col flex-wrap gap-2 p-4 pt-0 mt-4">
          {ingredientsList}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
