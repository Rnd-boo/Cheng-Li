import NavbarLayout from "@/components/NavbarLayout";
import Cards from "@/components/ui/Cards";
import { Accordion, AccordionItem, Button } from "@heroui/react";
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
    <div className="bg-black h-screen w-full flex">
      <NavbarLayout />

      <div className="w-full space-y-6 px-4">
        {/* Accordion Section */}
        <Accordion
          isCompact
          className="text-white border-white"
          variant="bordered"
        >
          <AccordionItem
            key="1"
            aria-label="Tutorial"
            subtitle="Press to Expand"
            title="How to Use"
            classNames={{
              title: "text-white text-center",
              content: "text-center text-sm",
              subtitle: "text-center",
            }}
          >
            <ul>
              <li>Input/Enter the price of Item</li>
              <li>
                Enter Amount (e.g: 100ml type 100) Make sure they same UOM
              </li>
              <li>Then calculate to find the cheapest price item</li>
            </ul>
          </AccordionItem>
        </Accordion>

        {/* Cards Section */}
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
          <div className="flex col-span-2 md:col-span-3 lg:col-span-4 flex-wrap gap-4">
            <Cards index={1} />
            <Cards index={2} />
            {cards.map((card, index) => (
              <Cards key={card.id} index={index + 3} />
            ))}

            {cards.length < 4 && (
              <div className="mx-10 w-[300px] h-40 border bg-[#14291C] items-center justify-center flex pb-2 rounded-xl">
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
        </div>

        {/* Calculate Button Section */}
        <div className="flex flex-col items-center justify-center my-10 space-y-4">
          <Button color="primary">Calculate</Button>
          <h1 className="text-white">Best Price: Item1</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
