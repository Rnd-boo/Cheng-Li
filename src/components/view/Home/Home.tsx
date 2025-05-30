import Cards from "@/components/ui/Cards";
import { Button } from "@heroui/react";
import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
type CardData = {
  id: number;
};
const Home = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [nextId, setNextId] = useState(1);

  const handleAddCard = () => {
    if (cards.length < 5) {
      setCards([...cards, { id: nextId }]);
      setNextId((prev) => prev + 1);
    }
  };
  return (
    <div className="bg-black h-screen w-full">
      <div className="grid gap-y-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Cards index={1} />
        {cards.map((card, index) => (
          <Cards key={card.id} index={index} />
        ))}
        {cards.length < 5 && (
          <div className="h-auto bg-[#14291C] items-center justify-center flex pb-2 rounded-xl">
            <Button
              onPress={handleAddCard}
              radius="full"
              isIconOnly
              aria-label="Add"
              color="primary"
            >
              <IoIosAddCircle className="text-5xl" />
            </Button>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center justify-center my-10 space-y-4">
        <Button color="primary">Calculate</Button>
        <h1 className="text-white">Best Price: Item1</h1>
      </div>
    </div>
  );
};

export default Home;
