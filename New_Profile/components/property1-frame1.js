import { useMemo } from "react";

const Property1Frame1 = ({
  property1Frame582Position,
  property1Frame582Top,
  property1Frame582Left,
}) => {
  const property1Frame582Style = useMemo(() => {
    return {
      position: property1Frame582Position,
      top: property1Frame582Top,
      left: property1Frame582Left,
    };
  }, [property1Frame582Position, property1Frame582Top, property1Frame582Left]);

  return (
    <div
      className="rounded-31xl bg-coral shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center py-[5px] px-[15px] text-center text-sm text-white font-poppins"
      style={property1Frame582Style}
    >
      <div className="relative leading-[150%] font-medium">Send Interest</div>
    </div>
  );
};

export default Property1Frame1;
