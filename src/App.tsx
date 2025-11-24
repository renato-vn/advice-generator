import PatternDividerMobile from "./assets/images/pattern-divider-mobile.svg";
import PatternDividerDektop from "./assets/images/pattern-divider-desktop.svg";
import IconDice from "./assets/images/icon-dice.svg";
import { useMemo, useState } from "react";
import { AdviceItem } from "./components/AdviceItem";
import { advices } from "./constants";
import type { Advice } from "./types";

const App = () => {
  const windowWidth = useMemo(() => window.innerWidth, [window.innerWidth]);

  const isMobile = windowWidth > 375;

  const getRandomizeAdvice = () => {
    const randomIndex = Math.floor(Math.random() * advices.length);
    return advices[randomIndex];
  };

  const handleThrowDice = () => {
    setAdvice(getRandomizeAdvice());
  };

  const [advice, setAdvice] = useState<Advice>(getRandomizeAdvice());

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="relative md:w-[550px] h-[375px] md:h-80 bg-Blue-900 py-16 px-4 md:px-12 rounded-lg flex flex-col items-center justify-between shadow-[0_0_50px_rgba(0,0,0,0.25)]">
        <AdviceItem advice={advice} />

        {isMobile ? (
          <img
            className="w-full h-5 px-3"
            src={PatternDividerMobile}
            alt="divider"
          />
        ) : (
          <img
            className="w-full h-5 px-3"
            src={PatternDividerDektop}
            alt="divider"
          />
        )}

        <button
          onClick={handleThrowDice}
          className="absolute -bottom-7 bg-Green-300 p-4 rounded-full hover:cursor-pointer hover:shadow-[0_0_20px_rgba(0,255,191,0.5)] transition-shadow"
        >
          <img src={IconDice} alt="dice" />
        </button>
      </div>
    </main>
  );
};

export default App;
