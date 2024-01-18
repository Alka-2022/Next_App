import { useMemo } from "react";

const Property1Frame = ({
  property1Frame581Position,
  property1Frame581Top,
  property1Frame581Left,
}) => {
  const property1Frame581Style = useMemo(() => {
    return {
      position: property1Frame581Position,
      top: property1Frame581Top,
      left: property1Frame581Left,
    };
  }, [property1Frame581Position, property1Frame581Top, property1Frame581Left]);

  return (
    <div
      className="rounded-31xl bg-gray-200 flex flex-row items-center justify-center py-[5px] px-[15px] text-center text-sm text-darksalmon font-poppins border-[1px] border-solid border-peachpuff"
      style={property1Frame581Style}
    >
      <div className="relative leading-[150%] font-medium">Politely Deny</div>
    </div>
  );
};

export default Property1Frame;
