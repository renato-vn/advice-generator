import type { Advice } from "../types";

type Props = {
  advice: Advice;
};

export const AdviceItem = ({ advice }: Props) => {
  return (
    <>
      <p className="text-Green-300 uppercase font-bold text-sm tracking-widest">
        Advice #{advice.id}
      </p>
      <p className="text-3xl max-w-lg font-medium text-center">
        "{advice.advice}"
      </p>
    </>
  );
};
