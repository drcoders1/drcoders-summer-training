import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";

const TextReveal = () => {
  return (
    <div className="flex h-[24rem] w-full items-center justify-center rounded-2xl bg-base-background">
      <TextRevealCard
        text="You know the business"
        revealText="I know the chemistry "
      >
        <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          This is a text reveal card. Hover over the card to reveal the hidden
          text.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
};

export default TextReveal;
