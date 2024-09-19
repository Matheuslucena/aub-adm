"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useEffect, useState } from "react";

export default function Index() {
  const [score, setScore] = useState({ menu: 0, quiz: 0 });
  const [correct, setCorrect] = useState<any[]>([]);
  const [incorrect, setIncorrect] = useState<any[]>([]);
  const [quiz, setQuiz] = useState<any[]>([]);
  const [userInfo, setUserInfo] = useState({
    punchId: "",
    name: "",
    location: "",
    type: "",
  });

  useEffect(() => {
    let local = localStorage.getItem("score");
    if (local !== null) {
      setScore(JSON.parse(local));
    }

    local = localStorage.getItem("correct");
    if (local !== null) {
      setCorrect(JSON.parse(local));
    }

    local = localStorage.getItem("incorrect");
    if (local !== null) {
      setIncorrect(JSON.parse(local));
    }

    local = localStorage.getItem("user_info");
    if (local !== null) {
      setUserInfo(JSON.parse(local));
    }

    local = localStorage.getItem("quiz");
    if (local !== null) {
      setQuiz(JSON.parse(local));
    }
  }, []);

  const correctElements = correct.map((item) => {
    return (
      <div key={item.product.id} className="mb-1 p-1 text-left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 inline-block text-green-900 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

        {item.product.name}
      </div>
    );
  });

  const quizInfo = quiz.map((item) => {
    return (
      <div key={item.id} className="mb-1 p-1 text-left flex">
        {item.correct ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 inline-block text-green-900 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 inline-block text-red-900 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        )}
        <div>
          <div>Question: {item.question}</div>
          <div>Answered: {item.answered}</div>
        </div>
      </div>
    );
  });

  const incorrectElements = incorrect.map((item) => {
    return (
      <div
        key={item.product.id}
        className="border xs:w-full sm:w-full lg:w-1/6 text-left shadow-md bg-white"
      >
        <div className="py-2 px-2 font-bold border-b bg-gray-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 inline-block text-red-900 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          {item.product.name}
        </div>
        <div className="text-left py-2 px-2">
          <div className="flex justify-between space-x-4">
            <div className="space-y-1">
              {item.wrongAnswers.length > 0 && (
                <div className="text-sm capitalize font-semibold">
                  - Wrong Ingredient:{" "}
                </div>
              )}
              {item.wrongAnswers.map((wrong: string) => {
                return (
                  <p key={wrong} className="text-sm ml-1 italic">
                    {wrong}
                  </p>
                );
              })}
              {item.missingAnswers.length > 0 && (
                <div className="text-sm capitalize font-semibold">
                  - Missing Ingredient:{" "}
                </div>
              )}
              {item.missingAnswers.map((miss: string) => {
                return (
                  <p key={miss} className="text-sm ml-1 italic">
                    {miss}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="p-10 bg-white">
      <h1 className="text-center text-2xl  text-white p-2 rounded-md bg-blue-600">
        RESULTS
      </h1>
      <div className="pt-6">
        <div>Punch ID: {userInfo.punchId}</div>
        <div>Name: {userInfo.name}</div>
        <div>Location: {userInfo.location}</div>
        <div>Training: {userInfo.type}</div>
      </div>
      <div className="flex flex-col justify-center text-center">
        <div className="py-10 flex gap-6 justify-center">
          <div className="border p-5 rounded shadow-md flex flex-col">
            <div>Score</div>
            <h1 className="text-3xl font-bold">{score.menu}%</h1>
          </div>
          {/* <div className="border p-5 rounded shadow-md flex flex-col">
            <div>Quiz Score</div>
            <h1 className="text-3xl font-bold">{score.quiz}%</h1>
          </div> */}
        </div>
        <div className="text-left">
          <Collapsible className="border mb-2 py-4 px-2 shadow-md bg-gray-100">
            <CollapsibleTrigger className="w-full text-left">
              Correct Items ({correct.length})
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="mt-4 flex flex-row flex-wrap gap-6">
                {correctElements}
              </div>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="border mb-2 py-4 px-2 shadow-md bg-gray-100">
            <CollapsibleTrigger className="w-full text-left">
              Incorrect Items ({incorrect.length})
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="mt-4 flex flex-row flex-wrap gap-6">
                {incorrectElements}
              </div>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="border mb-2 py-4 px-2 shadow-md bg-gray-100">
            <CollapsibleTrigger className="w-full text-left">
              Quiz Answers
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="mt-4 flex flex-col flex-wrap gap-6">
                {quizInfo}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </div>
  );
}
