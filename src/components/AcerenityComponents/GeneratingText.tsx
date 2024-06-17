import MaxContainer from "../MaxContainer";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;

const GeneratingText = () => {
  return (
    <MaxContainer className="flex h-[20rem] max-w-lg items-center justify-center md:max-w-xl lg:max-w-5xl">
      <TextGenerateEffect words={words} />
    </MaxContainer>
  );
};

export default GeneratingText;
