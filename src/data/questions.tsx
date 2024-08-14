export const questions = [
  {
    id: 1,
    question: "What does it mean if something is vegan?",
    options: [
      { id: 1, text: "It does not contain meat" },
      {
        id: 2,
        text: "It does not contain meat or any other animal products (eggs, dairy, meat)",
      },
    ],
    correct: 2,
    type: "Server",
  },
  {
    id: 2,
    question: "What does it mean if something is vegetarian?",
    options: [
      { id: 1, text: "It does not contain meat" },
      {
        id: 2,
        text: "It does not contain meat or any other animal products (eggs, dairy, meat)",
      },
    ],
    correct: 1,
    type: "Server",
  },
  {
    id: 3,
    question: "What is our gluten-free policy?",
    options: [
      { id: 1, text: "We are a completely gluten-free environment" },
      {
        id: 2,
        text: "We have lots of gluten-free options, but we do not guarantee no cross-contamination",
      },
      {
        id: 3,
        text: "We don't offer any gluten-free items",
      },
    ],
    correct: 2,
    type: "Server",
  },
  {
    id: 4,
    question: "Is the cheese bread gluten-free?",
    options: [
      { id: 1, text: "Yes" },
      {
        id: 2,
        text: "No",
      },
    ],
    correct: 1,
    type: "Server",
  },
  {
    id: 5,
    question:
      "What are the Strawberry Lemonade, Cucumber Mint Lemonade, and the Pineapple Ginger Juice sweetened with?",
    options: [
      { id: 1, text: "Sugar" },
      {
        id: 2,
        text: "Dates",
      },
      {
        id: 3,
        text: "Stevia",
      },
      {
        id: 4,
        text: "Corn Syrup",
      },
    ],
    correct: 3,
    type: "Server",
  },
  {
    id: 6,
    question: "Please select all items that contain nuts?",
    options: [
      { id: 1, text: "Dream salad" },
      {
        id: 2,
        text: "Mediterranea bowl",
      },
      {
        id: 3,
        text: "Gluten free mac n cheese",
      },
      {
        id: 4,
        text: "Rio bowl",
      },
      {
        id: 5,
        text: "Avocado cashew melt",
      },
      {
        id: 6,
        text: "Brazilian acai",
      },
    ],
    correct: [1, 3, 4, 6],
    type: "Server",
  },
  {
    id: 7,
    question: "Which categories on our menu are not gluten-free?",
    options: [
      { id: 1, text: "Sandwiches" },
      {
        id: 2,
        text: "mac n cheese",
      },
      {
        id: 3,
        text: "nice cream",
      },
      {
        id: 4,
        text: "bowls",
      },
    ],
    correct: 1,
    type: "Server",
  },
  {
    id: 8,
    question: "Is the avocado cashew melt vegan, vegetarian or gluten-free?",
    options: [
      { id: 1, text: "Vegan" },
      {
        id: 2,
        text: "Vegeterian",
      },
      {
        id: 3,
        text: "gluten-free",
      },
      {
        id: 4,
        text: "none of the above",
      },
    ],
    correct: 1,
    type: "Server",
  },
  {
    id: 9,
    question: "What does Aubergine use for oil in our food?",
    options: [
      { id: 1, text: "extra virgin olive oil" },
      {
        id: 2,
        text: "canola oil",
      },
      {
        id: 3,
        text: "vegetable oil",
      },
      {
        id: 4,
        text: "butter",
      },
    ],
    correct: 1,
    type: "Server",
  },
  {
    id: 10,
    question: "Are the baked chicken bites vegan, vegetarian or gluten-free?",
    options: [
      { id: 1, text: "Vegan" },
      {
        id: 2,
        text: "Vegeterian",
      },
      {
        id: 3,
        text: "gluten-free",
      },
      {
        id: 4,
        text: "none of the above",
      },
    ],
    correct: 3,
    type: "Server",
  },
  {
    id: 11,
    question: "What does Aubergine use to sweeten our food?",
    options: [
      { id: 1, text: "dates, monk fruit and stevia" },
      {
        id: 2,
        text: "high fructose corn syrup",
      },
      {
        id: 3,
        text: "refined sugar",
      },
    ],
    correct: 1,
    type: "Smoothie",
  },
  {
    id: 12,
    question: "Which of the following is not dairy free?",
    options: [
      { id: 1, text: "Nice milkshake" },
      {
        id: 2,
        text: "nice-ookie",
      },
      {
        id: 3,
        text: "coco mint smoothie",
      },
      {
        id: 4,
        text: "strawberry glow",
      },
    ],
    correct: 3,
    type: "Smoothie",
  },
  {
    id: 13,
    question: "Which of the following is not dairy free?",
    options: [
      { id: 1, text: "Nice milkshake" },
      {
        id: 2,
        text: "nice-ookie",
      },
      {
        id: 3,
        text: "coco mint smoothie",
      },
      {
        id: 4,
        text: "strawberry glow",
      },
    ],
    correct: 3,
    type: "Smoothie",
  },
  {
    id: 14,
    question:
      "What are the Strawberry Lemonade, Cucumber Mint Lemonade, and the Pineapple Ginger Juice sweetened with?",
    options: [
      { id: 1, text: "Sugar" },
      {
        id: 2,
        text: "Dates",
      },
      {
        id: 3,
        text: "Stevia",
      },
      {
        id: 4,
        text: "corn syrup",
      },
    ],
    correct: 3,
    type: "Smoothie",
  },
  {
    id: 15,
    question: "Please select all items that contain nuts?",
    options: [
      { id: 1, text: "Hi-vibe" },
      {
        id: 2,
        text: "Banana monkey",
      },
      {
        id: 3,
        text: "Hot chocolate",
      },
      {
        id: 4,
        text: "Cucumber mint lemonade",
      },
      {
        id: 5,
        text: "Nice cream",
      },
    ],
    correct: [1, 3, 5],
    type: "Smoothie",
  },
  {
    id: 16,
    question:
      "Do our Hibiscus, Raspberry and Chamomile teas contain any type of sweetener?",
    options: [
      { id: 1, text: "Stevia" },
      {
        id: 2,
        text: "Monk fruit",
      },
      {
        id: 3,
        text: "are not sweetened",
      },
      {
        id: 4,
        text: "Dates",
      },
    ],
    correct: 3,
    type: "Smoothie",
  },
];

export type Question = (typeof questions)[number];
