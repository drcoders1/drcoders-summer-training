import { FlipWords } from "../ui/flip-words";

const ChangingWords = () => {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="flex h-[30rem] items-center justify-center px-4">
      <div className="mx-auto text-5xl font-normal text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        websites with Aceternity UI
      </div>
    </div>
  );
};

export default ChangingWords;
