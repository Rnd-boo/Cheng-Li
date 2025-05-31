import NavbarLayout from "@/components/NavbarLayout";
import Cards from "@/components/ui/Cards";
import { Accordion, AccordionItem, Button } from "@heroui/react";
import { IoIosAddCircle } from "react-icons/io";
import { useHome } from "./useHome";

const Home = () => {
  const {
    cards,
    fixedCards,
    calculation,
    handleAddCard,
    updateCardData,
    handleCalculate,
  } = useHome();
  return (
    <div className="md:h-screen h-svh bg-black w-full flex ">
      <NavbarLayout />

      <div className="w-full space-y-3 md:space-y-6 px-4 py-4 md:py-0">
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
              title: "text-white text-center font-bold text-sm md:text-medium",
              content: "text-center text-xs md:text-sm",
              subtitle: "text-center",
            }}
          >
            <ul>
              <li>Input/Enter the price of Item</li>
              <li>Enter Amount make sure they same UOM (e.g.100ml type 100)</li>
              <li>Then calculate to find the cheapest price item</li>
            </ul>
          </AccordionItem>
        </Accordion>

        {/* Cards Section */}
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
          <div className="flex col-span-2 md:col-span-3 lg:col-span-4 flex-wrap gap-4">
            {fixedCards.map((card, index) => (
              <Cards
                key={card.id}
                cardData={card}
                onUpdateCard={(field, value) =>
                  updateCardData(index, field, value)
                }
              />
            ))}
            {cards.map((card, index) => (
              <Cards
                key={card.id}
                cardData={card}
                onUpdateCard={(field, value) =>
                  updateCardData(index + 2, field, value)
                }
              />
            ))}

            {cards.length < 4 && (
              <div className="md:mx-10 mx-auto w-[300px] h-40 border bg-[#14291C] items-center justify-center flex pb-2 rounded-xl">
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
          <Button color="primary" onPress={handleCalculate}>
            Calculate
          </Button>
          {calculation.bestItem && (
            <div className="text-white text-center space-y-2">
              <h1>Cheapest Item: {calculation.bestItem}</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
