import AboutButton from "@/components/AboutButton";
import Cards from "@/components/ui/Cards";
import { Accordion, AccordionItem, Button } from "@heroui/react";
import { IoIosAddCircle } from "react-icons/io";
import { useHome } from "./useHome";

const Home = () => {
  const {
    cards,
    fixedCards,
    calculation,
    showAllDetails,
    handleAddCard,
    updateCardData,
    handleCalculate,
    setShowAllDetails,
  } = useHome();
  return (
    <div className="md:min-h-screen min-h-svh bg-black w-full flex ">
      <AboutButton />
      <div className="w-full space-y-3 md:space-y-6 px-4 md:px-0 py-4 md:py-0  ">
        {/* Accordion Section */}
        <Accordion
          isCompact
          hideIndicator
          className="text-black bg-content2 md:rounded-none rounded-2xl "
        >
          <AccordionItem
            key="1"
            aria-label="Tutorial"
            subtitle="Press to Expand"
            title="How to Use"
            classNames={{
              title: "text-black text-center font-bold text-sm md:text-medium",
              content: " text-xs md:text-sm flex justify-center",
              subtitle: "text-center ",
            }}
          >
            <ul className="space-y-1 list-disc list-inside">
              <li>Input/Enter the price of Item</li>
              <li>Enter Amount make sure they same UOM (e.g.100ml type 100)</li>
              <li>Then calculate to find the cheapest price item</li>
            </ul>
          </AccordionItem>
        </Accordion>

        {/* Cards Section */}
        <div className="grid w-full ">
          <div className="flex col-span-2 flex-wrap gap-y-4 md:gap-y-12 ">
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
              <div className="hidden md:flex md:mx-10 mx-auto w-[300px] h-40 border bg-[#14291C] items-center justify-center pb-2 rounded-xl">
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
            <div className="text-white text-center space-y-4">
              <h1>Cheapest Item: {calculation.bestItem}</h1>

              <Button
                size="sm"
                onPress={() => setShowAllDetails((prev) => !prev)}
              >
                {showAllDetails ? "Hide Details" : "Show Details?"}
              </Button>
              {showAllDetails && calculation.allCalculations && (
                <div className="flex mt-4 gap-4 text-sm text-left pb-4">
                  {calculation.allCalculations.map((card) => (
                    <div key={card.id} className="bg-gray-800 p-2 rounded">
                      <p>
                        <strong>{card.itemName}</strong>
                      </p>
                      <p>Price per Unit: {card.pricePerUnit.toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
