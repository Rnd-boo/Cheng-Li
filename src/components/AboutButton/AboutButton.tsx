import { Button } from "@heroui/react";
import Link from "next/link";
import { CiSquareQuestion } from "react-icons/ci";

const AboutButton = () => {
  return (
    <div className="hidden lg:flex absolute bottom-8 right-8 bg-white rounded-xl">
      <Button isIconOnly as={Link} href="/about" variant="light">
        <CiSquareQuestion className="text-9xl" />
      </Button>
    </div>
  );
};

export default AboutButton;
