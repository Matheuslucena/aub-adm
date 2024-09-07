"use client";

import { items as productsData } from "@/data/items";
import { ingredients as ingredientsData } from "@/data/ingredients";
import { useState, useEffect } from "react";
import Ingredients from "./ingredients";
import Selected from "./selected";
import ResultsDialog from "./resultsDialog";
import InfoDialog from "./infoDialog";
import { useInfoState } from "@/context/userInfoContext";
import Quiz from "./quiz";

interface UserInfo {
  punchId: string;
  name: string;
  location: string;
}

export default function Index() {
  const { userInfoValue, setUserInfoState } = useInfoState();
  const [products, setProducts] = useState([...productsData]);
  const [ingredients, setIngredients] = useState([...ingredientsData]);
  const [currentProductIdx, setCurrentProductIdx] = useState(0);
  const [answers, setAnswers] = useState(Array<any>);
  const [openAlert, setOpenAlert] = useState(false);
  const [openQuiz, setOpenQuiz] = useState(false);
  const [score, setScore] = useState("");
  const [openInfoDialog, setOpenInfoDialog] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    punchId: "",
    name: "",
    location: "",
  });

  const type = userInfoValue ? userInfoValue.type : "Server";

  //LIST OF ITEMS BY TYPE
  const filteredProducts = products.filter(
    (i) =>
      (type === "Server" &&
        (i.category === "BOWL" ||
          i.category === "SALAD" ||
          i.category === "MELTS")) ||
      (type === "Smoothie" &&
        (i.category === "SMOOTHIE" || i.category === "SMOOTHIE_ICE")) ||
      (type === "Breakfast" && i.category === "BREAKFAST")
  );

  const currentProduct = filteredProducts[currentProductIdx];
  const selectedIngredients = ingredients.filter((ing: any) => ing.selected);
  const progress = {
    value: ((currentProductIdx + 1) * 100) / filteredProducts.length,
    total: filteredProducts.length,
    current: currentProductIdx + 1,
  };

  let ingredientCategory = [
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

  if (userInfoValue) {
    switch (userInfoValue.type) {
      case "Server":
        ingredientCategory = [
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
        break;
      case "Breakfast":
        ingredientCategory = [
          //"TYPE",
          "BREAD",
          "CREAM",
          "GREEN_B",
          "TOSS_IN_B",
          "PREMIUM_B",
          "HERBS",
          "DRESSING",
          //"OTHER",
        ];
        break;
      case "Smoothie":
        ingredientCategory = [
          "MILK",
          "SMOOTHIE_SWEETENER",
          "SMOOTHIE_IN",
          "SMOOTHIE_FROZEN",
        ];
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    //setOpenInfoDialog(true);
    //console.log(userInfoValue);
  }, []);

  //Finishes the product
  const handleOnSend = () => {
    const total = filteredProducts.length;
    setAnswers([...answers, checkAnswer(currentProduct, selectedIngredients)]);
    if (isTestFinished(currentProductIdx, total)) {
      showQuiz();
      return;
    }

    setCurrentProductIdx(nextProductIdx(currentProductIdx, total));
    handleClearSelection();
    console.log(answers);
  };

  //Set the selected Ingredients
  const handleSelectIngredient = (ingredient: any) => {
    const ingredientsCopy = ingredients.slice();
    const updatedList = ingredientsCopy.map((ing: any) =>
      ing.id === ingredient.id
        ? { ...ing, selected: !ingredient.selected }
        : ing
    );
    setIngredients(updatedList);
  };

  const handleClearSelection = () => {
    const updatedList = ingredients.map((ing: any) => {
      ing.selected = false;
      return ing;
    });
    setIngredients(updatedList);
  };

  const showQuiz = () => {
    setOpenQuiz(true);
  };

  const showResults = () => {
    console.log("ANSWER ==== ", JSON.stringify(answers));
    const correctAnswers = answers.filter((item) => item.correct).length;
    const correctPercentage = (correctAnswers / answers.length) * 100;

    setScore(correctPercentage.toFixed(1));
    setOpenAlert(true);

    const body = {
      date: new Date().toISOString(),
      id: userInfoValue.punchId,
      employee: userInfoValue.name,
      score: correctPercentage.toFixed(2),
      location: userInfoValue.location,
      type: userInfoValue.type,
      answers: [...answers],
    };
    fetch("/.netlify/functions/hello", {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleCloseResultsDialog = () => {
    setOpenAlert(false);
    setCurrentProductIdx(0);
    setAnswers([]);
    setOpenQuiz(false);
    //setOpenInfoDialog(true);
    setUserInfo({
      punchId: "",
      name: "",
      location: "",
    });
    //Restart test
  };

  const handleSubmitQuiz = () => {
    setOpenQuiz(false);
    showResults();
  };

  const handleStartTest = (data: any) => {
    setUserInfo(data);
    setOpenInfoDialog(false);
  };

  return (
    <>
      <div className="grid lg:grid-cols-5 h-full">
        <div className="lg:border-r lg:col-span-1 hidden md:block">
          <div className="flex flex-col h-full">
            <Selected
              ingredients={selectedIngredients}
              categories={ingredientCategory}
            />
          </div>
        </div>
        <div className="lg:col-span-4">
          <Ingredients
            product={currentProduct}
            ingredients={ingredients}
            categories={ingredientCategory}
            progress={progress}
            onSelect={(ing) => handleSelectIngredient(ing)}
            onClearSelection={handleClearSelection}
            onSend={handleOnSend}
          />
        </div>
      </div>
      <ResultsDialog
        open={openAlert}
        onClose={handleCloseResultsDialog}
        items={answers}
        score={score}
      />
      <InfoDialog
        open={openInfoDialog}
        onClose={() => {}}
        onStart={(data: any) => handleStartTest(data)}
      />
      <Quiz open={openQuiz} onSubmit={handleSubmitQuiz} testType={type}></Quiz>
    </>
  );
}

const normalizeString = (str: string): string => {
  return str
    .toLocaleLowerCase()
    .trim()
    .replace(/[^a-zA-Z0-9 ]/g, "");
};

const checkAnswer = (product: any, selectedIngredients: Array<any>) => {
  console.log(product);

  const correctAnswers = product.desc.split(", ").map((ing: string) => {
    return normalizeString(ing);
  });

  const answered: string[] = selectedIngredients.map((ing) => {
    return normalizeString(ing.name).replace(/[^a-zA-Z0-9 ]/g, "");
  });

  console.log("correctAnswers --> %s", correctAnswers);
  console.log("answered --> %s", answered);
  console.log(" -- - -- -------- - - -----");

  const wrongAnswers: string[] = [];

  answered.forEach((answer: string) => {
    let matched = false;

    console.log("Searching match for answer --> %s", answer);

    for (const corrAnswer of correctAnswers) {
      const answerRgx = new RegExp(`\\b(?:${answer})(?:s)?\\b`, "gmi");

      if (answerRgx.test(corrAnswer)) {
        const idx = correctAnswers.indexOf(corrAnswer);
        correctAnswers.splice(idx, 1);
        matched = true;
        break;
      }
    }

    if (!matched) {
      wrongAnswers.push(answer);
    }

    console.log("+++++++++++++++++++++++++");
  });

  console.log("Wrong selected answers --> %s", JSON.stringify(wrongAnswers));
  console.log("Missing answers --> %s", JSON.stringify(correctAnswers));
  const missingAnswers = correctAnswers;
  const correct = wrongAnswers.length == 0 && missingAnswers.length == 0;

  return {
    product: { id: product.id, name: product.name },
    correct,
    wrongAnswers,
    missingAnswers,
  };
};

const nextProductIdx = (idx: number, total: number) => {
  console.log(idx, total);
  if (idx === total) {
    return 0;
  }

  return idx + 1;
};

const isTestFinished = (idx: number, total: number): boolean => {
  return idx === total - 1;
};
