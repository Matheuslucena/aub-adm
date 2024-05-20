"use client";

import Ingredients from "./ingredients";
import Metrics from "./metrics";
import Ticket from "./ticket";
import Alert from "./alert";
import FeedbackDialog from "./feedbackDialog";
import { items as itemsDB } from "@/data/items";
import { Ingredient, ingredients as ingredientsDB } from "@/data/ingredients";
import { useState, useEffect } from "react";

export default function Index() {
  const [items, setItems] = useState(itemsDB);
  const [currentItems, setCurrentItems] = useState<any[]>([]);
  const [typeTicket, setTypeTicket] = useState("To Go");
  const [ingredients, setIngredients] = useState(ingredientsDB);
  const [metrics, setMetrics] = useState({ mistakes: 0, corrects: 0 });
  const [openAlert, setOpenAlert] = useState(false);
  const [correct, setCorrect] = useState(false);

  function getRandomItems(arr: any, limit: number) {
    const arrCopy = [...arr];
    const shuffledList = arrCopy
      .filter((i) => i.category === "BOWL" || i.category === "SALAD")
      .sort(() => Math.random() - Math.random());

    return shuffledList.slice(0, limit);
  }

  const handleNextTicket = () => {
    setCurrentItems(getRandomItems(items, 1));
  };

  const handleIngredientUpdate = (ingredients: any) => {
    setIngredients(ingredients);
  };

  const handleCloseModalAlert = () => {
    setOpenAlert(false);
    if (correct) {
      handleNextTicket();
      const listCopy = [...ingredients];
      listCopy.map((ing: any) => (ing.selected = false));
      setIngredients(listCopy);
    }
  };

  const handleSend = () => {
    const currMetrics = { ...metrics };

    const foodIngredients = `${currentItems[0].desc}, cheesebread`.split(",");
    const selectedIngredients = ingredients.filter(
      (ing: any) => ing.selected && ing.category !== "TYPE"
    );
    const selectedIngredientsNames = selectedIngredients.map((ing) =>
      ing.name.trim().toLocaleLowerCase()
    );

    console.log(foodIngredients);
    console.log(selectedIngredients);

    for (let index = 0; index < foodIngredients.length; index++) {
      const selected = foodIngredients[index];
      const currIng = selected.trim().split(" ").join("|");
      console.log(`\\b(?:${currIng})(?:s)?\\b`);
      const regex = new RegExp(`\\b(?:${currIng})(?:s)?\\b`, "gmi");
      console.log(selectedIngredientsNames.join(" "));
      console.log(selected);
      console.log(regex.test(selectedIngredientsNames.join(" ")));
    }

    if (foodIngredients.length === selectedIngredients.length) {
      const diff = foodIngredients.filter((selected) => {
        const currIng = selected.trim().split(" ").join("|");
        const regex = new RegExp(`\\b(?:${currIng})(?:s)?\\b`, "gmi");
        return !regex.test(selectedIngredientsNames.join(" "));
      });

      if (diff.length === 0) {
        currMetrics.corrects = ++currMetrics.corrects;
        setCorrect(true);
      } else {
        currMetrics.mistakes = ++currMetrics.mistakes;
        setCorrect(false);
      }
    } else {
      currMetrics.mistakes = ++currMetrics.mistakes;
      setCorrect(false);
    }

    setMetrics(currMetrics);
    setOpenAlert(true);
  };

  useEffect(() => {
    setCurrentItems(getRandomItems(items, 1));
  }, []);

  return (
    <>
      <div className="grid lg:grid-cols-5 h-full">
        <div className="border-r hidden lg:block">
          <Ticket
            items={currentItems}
            type={typeTicket}
            onNextTicket={handleNextTicket}
          />
        </div>
        <div className="border-r col-span-3">
          <Ingredients
            ingredients={ingredients}
            onUpdateList={handleIngredientUpdate}
            onSend={handleSend}
          />
        </div>
        <div className="hidden lg:block">
          <Metrics metrics={metrics} />
        </div>
      </div>
      <FeedbackDialog
        open={openAlert}
        onClose={handleCloseModalAlert}
        item={currentItems[0]}
        correct={correct}
      />
    </>
  );
}
