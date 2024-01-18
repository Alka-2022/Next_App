import { useMemo } from "react";
import Property1Frame2 from "./property1-frame2";

const SectionCardForm = ({ propLeft }) => {
  const vectorIconStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="absolute top-[269px] left-[9px] rounded-xl bg-beige shadow-[0px_4px_4px_rgba(136,_36,_44,_0.25)] box-border w-[571px] h-60 overflow-hidden text-left text-xs text-gray-400 font-poppins border-[1.5px] border-solid border-orange-100">
      <div className="absolute top-[2px] left-[0px] w-[202px] h-[236px]">
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
          style={vectorIconStyle}
        />
      </div>
      <div className="absolute top-[38px] left-[calc(50%_-_224.5px)] text-xl font-abhaya-libre-extrabold text-saddlebrown text-center">
        Aakriti A.
      </div>
      <div className="absolute h-[15.42%] w-[17.86%] top-[71.25%] right-[73.38%] bottom-[13.33%] left-[8.76%] text-2xs">
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
      <div className="absolute h-[15.83%] w-[20.49%] top-[52.08%] right-[71.98%] bottom-[32.08%] left-[7.53%]">
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
      <div className="absolute top-[66px] left-[47px] w-[107.7px] h-[21px] text-center text-sm">
        <div className="absolute top-[0px] left-[0px] w-[36.7px] h-[20.3px]">
          <div className="absolute top-[0px] left-[18px] leading-[150%] inline-block w-[18.7px] h-[20.3px]">
            24
          </div>
          <img
            className="absolute top-[3px] left-[0px] w-3.5 h-3.5 overflow-hidden"
            alt=""
            src="/frame-427324712.svg"
          />
        </div>
        <div className="absolute h-full w-[54.78%] top-[0%] right-[0%] bottom-[0%] left-[45.22%]">
          <div className="absolute top-[0%] left-[30.51%] leading-[150%]">
            Hindu
          </div>
          <img
            className="absolute top-[3px] left-[0px] w-3.5 h-3.5 overflow-hidden"
            alt=""
            src="/frame-427324716.svg"
          />
        </div>
      </div>
      <div className="absolute top-[118px] left-[35px] rounded-[50%] bg-gray-300 w-[132px] h-[0.5px]" />
      <div className="absolute top-[66px] left-[233px] w-[307px] h-[89px] text-mini text-saddlebrown">
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
      <div className="absolute top-[18px] left-[447px] font-medium text-dimgray-300 text-center">
        New Jersey
      </div>
      <img
        className="absolute top-[17px] right-[19px] rounded-[2.36px] w-[30px] h-5 object-cover"
        alt=""
        src="/unitedstates-1@2x.png"
      />
      <div className="absolute top-[91px] left-[66px] w-[65px] h-[21px] text-sm">
        <div className="absolute top-[0px] left-[18px] leading-[150%]">
          Gujrati
        </div>
        <img
          className="absolute h-[66.67%] w-[21.54%] top-[14.29%] right-[78.46%] bottom-[19.05%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/people.svg"
        />
      </div>
    </div>
  );
};

export default SectionCardForm;
