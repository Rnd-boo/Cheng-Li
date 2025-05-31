import { CardData } from "@/types/card";
import { Input, NumberInput } from "@heroui/react";
import { GrMoney } from "react-icons/gr";

interface CardsProps {
  cardData: CardData;
  onUpdateCard: (
    field: keyof CardData,
    value: string | number | undefined
  ) => void;
}

const Cards = ({ cardData, onUpdateCard }: CardsProps) => {
  const handleInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdateCard("itemName", e.target.value);
  };
  const handlePriceChange = (value: number | undefined) => {
    onUpdateCard("price", value);
  };

  const handleAmountChange = (value: number | undefined) => {
    onUpdateCard("amount", value);
  };

  return (
    <div className="mx-10 max-w-[300px] h-40 bg-[#14291C] pb-2 rounded-xl">
      <div className="px-4 py-2 text-white">
        <Input
          isClearable
          value={cardData.itemName}
          onClear={() => onUpdateCard("itemName", "")}
          onChange={handleInputName}
          label={`Name`}
          classNames={{
            label: "text-white !text-white ",
          }}
          color="primary"
          variant="underlined"
        />
      </div>
      <div className="px-4 pb-2 my-2 flex gap-4 justify-between w-full">
        <NumberInput
          value={cardData.price}
          onValueChange={handlePriceChange}
          color="primary"
          classNames={{
            label: "text-white",
            input: "text-black",
          }}
          label="Price"
          labelPlacement="outside"
          placeholder="000.00"
          hideStepper
          startContent={
            <div>
              <GrMoney className="text-black" />
            </div>
          }
        />
        <NumberInput
          value={cardData.amount}
          onValueChange={handleAmountChange}
          className="w-1/2"
          color="primary"
          classNames={{
            label: "text-white",
            input: "text-black !text-black",
          }}
          label="Amount"
          labelPlacement="outside"
          placeholder="QTY"
          hideStepper
        />
      </div>
    </div>
  );
};

export default Cards;
