import { useMemo } from "react";
import Property1Frame2 from "./property1-frame2";

const UncoverSection = ({ propColor }) => {
  const newStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="absolute top-[9px] left-[9px] rounded-xl bg-beige shadow-[0px_4px_4px_rgba(136,_36,_44,_0.25)] box-border w-[571px] h-60 overflow-hidden text-center text-xs text-saddlebrown font-poppins border-[1.5px] border-solid border-orange-100">
      <div className="absolute top-[66px] left-[233px] w-[307px] h-[89px] text-left text-mini">
        <img
          className="absolute top-[0px] left-[0px] rounded-2xl w-[307px] h-[89px]"
          alt=""
          src="/rectangle-6641.svg"
        />
        <div className="absolute top-[8px] left-[12px] font-medium inline-block w-[262px]">
          What matters to you the most in a partner?
        </div>
        <div className="absolute top-[58px] left-[12px] text-xs font-light text-dimgray-100">
          Honesty and long drives
        </div>
      </div>
      <Property1Frame2
        property1Frame583Position="absolute"
        property1Frame583Top="179px"
        property1Frame583Left="328px"
      />
      <div className="absolute top-[18px] left-[447px] font-medium text-dimgray-300">
        New Jersey
      </div>
      <img
        className="absolute top-[17px] right-[19px] rounded-[2.36px] w-[30px] h-5 object-cover"
        alt=""
        src="/unitedstates-1@2x.png"
      />
      <div className="absolute top-[2px] left-[0px] w-[202px] h-[236px] text-gray-400">
        <div className="absolute top-[0px] left-[0px] w-[202px] h-[236px]">
          <div className="absolute top-[0px] left-[0px] w-[202px] h-[236px]">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-floralwhite w-[202px] h-[236px]" />
            <img
              className="absolute top-[0px] left-[0px] w-[202px] h-[236px] object-cover"
              alt=""
              src="/golden-farem-1@2x.png"
            />
          </div>
          <img
            className="absolute top-[calc(50%_-_106px)] left-[calc(50%_-_85px)] w-[171px] h-[207px]"
            alt=""
            src="/vector.svg"
          />
        </div>
        <div className="absolute top-[41px] left-[calc(50%_-_32px)] text-xl font-abhaya-libre-extrabold text-saddlebrown">
          Vidhi S.
        </div>
        <div className="absolute h-[15.68%] w-[50.5%] top-[71.61%] right-[24.75%] bottom-[12.71%] left-[24.75%] text-left text-2xs">
          <div className="absolute top-[54.05%] left-[14.71%] leading-[150%] font-light">
            Within a year
          </div>
          <div className="absolute h-[48.65%] w-full top-[0%] right-[0%] bottom-[51.35%] left-[0%] text-xs text-darkslategray">
            <div className="absolute top-[0%] left-[17.65%] leading-[150%] font-semibold">
              Settling Down
            </div>
            <img
              className="absolute top-[2px] left-[0px] w-3.5 h-3.5"
              alt=""
              src="/frame-744.svg"
            />
          </div>
        </div>
        <div className="absolute h-[16.1%] w-[57.92%] top-[52.12%] right-[20.79%] bottom-[31.78%] left-[21.29%] text-left">
          <div className="absolute top-[52.63%] left-[0%] leading-[150%] font-light">
            Software Developer
          </div>
          <div className="absolute h-[47.37%] w-[70.09%] top-[0%] right-[14.53%] bottom-[52.63%] left-[15.38%] text-darkslategray">
            <div className="absolute top-[0%] left-[21.95%] leading-[150%] font-semibold">
              Profession
            </div>
            <img
              className="absolute top-[2px] left-[0px] w-3.5 h-3.5 object-cover"
              alt=""
              src="/icontyl-pluslightboldcase@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[65px] left-[55px] w-[92.7px] h-[18px]">
          <div className="absolute top-[1px] left-[0px] w-[33px] h-4">
            <div className="absolute top-[0px] left-[18px] leading-[130%]">
              28
            </div>
            <img
              className="absolute top-[1px] left-[0px] w-3.5 h-3.5 overflow-hidden"
              alt=""
              src="/frame-427324712.svg"
            />
          </div>
          <div className="absolute h-full w-[57.17%] top-[0%] right-[0%] bottom-[0%] left-[42.83%]">
            <div className="absolute top-[0%] left-[33.96%] leading-[150%]">
              Hindu
            </div>
            <img
              className="absolute top-[2px] left-[0px] w-3.5 h-3.5 overflow-hidden"
              alt=""
              src="/frame-427324716.svg"
            />
          </div>
        </div>
        <div className="absolute top-[116px] left-[35px] rounded-[50%] bg-gray-300 w-[132px] h-[0.5px]" />
        <div className="absolute top-[89px] left-[70px] w-[63px] h-[18px]">
          <div className="absolute top-[0px] left-[18px] leading-[150%]">
            Punjabi
          </div>
          <img
            className="absolute h-[77.78%] w-[22.22%] top-[11.11%] right-[77.78%] bottom-[11.11%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/people.svg"
          />
        </div>
      </div>
      <div className="absolute top-[27px] left-[calc(50%_-_201.5px)] rounded-11xl bg-orange-200 w-[34px] h-3 flex flex-row items-center justify-center py-0 px-2 box-border text-3xs text-white">
        <i
          className="relative tracking-[0.03em] leading-[150%] font-medium"
          style={newStyle}
        >
          New
        </i>
      </div>
    </div>
  );
};

export default UncoverSection;
