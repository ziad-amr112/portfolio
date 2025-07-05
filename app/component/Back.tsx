"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaBackward } from "react-icons/fa";

interface BackProps {
  moveback: () => void;
}

const Back: React.FC<BackProps> = ({ moveback }) => {
  return (
    <Button
      onClick={moveback}
      className="flex hover:text-purple duration-200 w-fit items-center transition-all left-0 mb-5"
      aria-label="Go back"
    >
      <FaBackward />
      <span className="ml-2">Back</span>
    </Button>
  );
};

export default Back;
