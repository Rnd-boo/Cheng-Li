import { CalculationResult, CardData } from "@/types/card";
import { useState } from "react";

export interface CalculationState {
  bestItem: string | null;
  bestPricePerUnit: number | null;
  allCalculations?: CalculationResult[];
}

export const useHome = () => {
  const [cards, setCards] = useState<CardData[]>([]);

  // Fixed cards data (Item1 and Item2)
  const [fixedCards, setFixedCards] = useState<CardData[]>([
    { id: "item1", itemName: "Item1", price: undefined, amount: undefined },
    { id: "item2", itemName: "Item2", price: undefined, amount: undefined },
  ]);

  const [calculation, setCalculation] = useState<CalculationState>({
    bestItem: null,
    bestPricePerUnit: null,
  });

  const handleAddCard = () => {
    if (cards.length < 4) {
      const newCard: CardData = {
        id: `item${fixedCards.length + cards.length + 1}`,
        itemName: `Item${fixedCards.length + cards.length + 1}`,
        price: undefined,
        amount: undefined,
      };
      setCards([...cards, newCard]);
    }
  };

  const updateCardData = (
    index: number,
    field: keyof CardData,
    value: string | number | undefined
  ) => {
    if (index < 2) {
      setFixedCards((prev) =>
        prev.map((card, i) =>
          i === index ? { ...card, [field]: value } : card
        )
      );
    } else {
      setCards((prev) =>
        prev.map((card, i) =>
          i === index - 2 ? { ...card, [field]: value } : card
        )
      );
    }
  };

  const calculateBestPrice = () => {
    const allCards = [...fixedCards, ...cards];

    // Filter cards that have both price and amount
    const validCards = allCards.filter(
      (card) =>
        card.price !== undefined &&
        card.amount !== undefined &&
        card.price > 0 &&
        card.amount > 0
    );

    if (validCards.length === 0) {
      return {
        bestItem: null,
        bestPricePerUnit: null,
        allCalculations: undefined,
      };
    }

    // Calculate price per unit for each card
    const cardsWithPricePerUnit: CalculationResult[] = validCards.map(
      (card) => ({
        id: card.id,
        itemName: card.itemName,
        price: card.price!,
        amount: card.amount!,
        pricePerUnit: card.price! / card.amount!,
      })
    );

    // Find the card with the lowest price per unit
    const bestCard = cardsWithPricePerUnit.reduce((best, current) =>
      current.pricePerUnit < best.pricePerUnit ? current : best
    );

    return {
      bestItem: bestCard.itemName,
      bestPricePerUnit: bestCard.pricePerUnit,
      allCalculations: cardsWithPricePerUnit,
    };
  };

  const handleCalculate = () => {
    const result = calculateBestPrice();
    setCalculation(result);
  };

  return {
    // State
    cards,
    fixedCards,
    calculation,

    // Actions
    handleAddCard,
    updateCardData,
    handleCalculate,

    // Computed values
    allCards: [...fixedCards, ...cards],
  };
};
