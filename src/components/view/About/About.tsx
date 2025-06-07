import { Button } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const About = () => {
  const router = useRouter();
  return (
    <div className="bg-custom-gradient h-screen w-full flex ">
      <Button
        onPress={() => router.back()}
        isIconOnly
        className="rounded-full ml-8 my-6 bg-white"
      >
        <IoArrowBackCircleOutline className="text-9xl" />
      </Button>
      <div className="text-white mx-auto my-auto space-y-3 text-lg">
        <h1 className="text-3xl font-bold">
          Sometimes when I{"'"}m grocery shopping, I get confused about which
          item is the cheapest.
        </h1>
        <p>
          I end up calculating prices one by one on my phone, and before I know
          it… I forget which number was the price and which one was the item!
        </p>
        <p className="font-semibold">Sound familiar?</p>
        <p>There{"'"}s gotta be an easier way —</p>
        <h1 className="text-xl">
          This website helps users compare prices across different sources to
          find the lowest available deal. <br /> Save time and money by making
          smarter shopping decisions with real-time price insights.
        </h1>
        <p className="text-xl">
          As someone with Asian blood, I always want to find the cheapest deal —
          it{"'"}s in my DNA. &#128526;
        </p>
        <Button
          as={Link}
          href=""
          variant="light"
          className="text-xl text-white"
        >
          AboutME?
        </Button>
      </div>
    </div>
  );
};

export default About;
