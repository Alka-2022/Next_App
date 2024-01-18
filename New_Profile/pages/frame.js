import UncoverSection from "../components/uncover-section";
import SectionCardForm from "../components/section-card-form";
import SectionCard from "../components/section-card";

const Frame = () => {
  return (
    <div className="relative w-full h-[460px] overflow-y-auto">
      <UncoverSection propColor="#fff" />
      <SectionCardForm propLeft="calc(50% - 85px)" />
      <SectionCard />
    </div>
  );
};

export default Frame;
