interface CardData {
  id: string;
  itemName: string;
  price: number | undefined;
  amount: number | undefined;
}

interface CalculationResult {
  id: string;
  itemName: string;
  price: number;
  amount: number;
  pricePerUnit: number;
}

export { CardData, CalculationResult };
