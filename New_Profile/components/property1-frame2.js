import { useMemo } from "react";

const Property1Frame2 = ({
  property1Frame583Position,
  property1Frame583Top,
  property1Frame583Left,
}) => {
  const property1Frame583Style = useMemo(() => {
    return {
      position: property1Frame583Position,
      top: property1Frame583Top,
      left: property1Frame583Left,
    };
  }, [property1Frame583Position, property1Frame583Top, property1Frame583Left]);

  return (
    <div
      className="rounded-31xl bg-gold shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center py-[5px] px-[15px] text-center text-base text-white font-poppins"
      style={property1Frame583Style}
    >
      <div className="relative leading-[150%] font-medium inline-block w-[88px] shrink-0 [backdrop-filter:blur(4px)]">
        Uncover
      </div>
    </div>
  );
};

export default Property1Frame2;
