import { Input, NumberInput } from "@heroui/react";
import { GrMoney } from "react-icons/gr";

const Cards = ({ index }: { index: number }) => {
  return (
    <div className="mx-10 max-w-[400px] bg-[#14291C] pb-2 rounded-xl">
      <div className="px-4 py-2 text-white">
        <Input
          isClearable
          defaultValue={`Item${index}`}
          label={`Item ${index}`}
          classNames={{
            label: "text-white !text-white ",
          }}
          color="primary"
          variant="underlined"
        />
      </div>
      <div className="px-4 pb-2 my-2 flex gap-4 justify-between w-full">
        <NumberInput
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
