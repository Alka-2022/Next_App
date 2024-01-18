const NewProfilesFormContainer = () => {
  return (
    <div className="absolute top-[56px] left-[calc(50%_-_262px)] w-[524px] h-[57px] text-center text-mid-1 text-white font-poppins">
      <nav className="m-0 absolute top-[17px] left-[calc(50%_-_262px)] flex flex-row items-start justify-start gap-[24px] text-center text-xl text-darkgray-300 font-poppins">
        <div className="rounded-31xl bg-palevioletred-200 flex flex-row items-center justify-center py-[5px] px-3 text-white">
          <div className="relative leading-[150%] font-medium">
            New Profiles
          </div>
        </div>
        <div className="rounded-81xl flex flex-row items-center justify-center py-[5px] px-3">
          <div className="relative leading-[150%]">Received</div>
        </div>
        <div className="rounded-81xl flex flex-row items-center justify-center py-[5px] px-3">
          <div className="relative leading-[150%]">Matches</div>
        </div>
        <div className="rounded-81xl flex flex-row items-center justify-center py-[5px] px-3">
          <div className="relative leading-[150%]">Chat</div>
        </div>
      </nav>
      <div className="absolute top-[5px] left-[268px] w-6 h-6">
        <img
          className="absolute top-[0px] left-[0px] w-6 h-6"
          alt=""
          src="/group-427325194.svg"
        />
        <div className="absolute top-[0px] left-[6.9px] leading-[150%] font-medium inline-block w-[10.3px] h-[20.6px]">
          1
        </div>
      </div>
      <div className="absolute top-[5px] left-[398px] w-6 h-6">
        <img
          className="absolute top-[0px] left-[0px] w-6 h-6"
          alt=""
          src="/group-427325194.svg"
        />
        <div className="absolute top-[0px] left-[6.9px] leading-[150%] font-medium inline-block w-[10.3px] h-[20.6px]">
          3
        </div>
      </div>
      <div className="absolute top-[5px] left-[500px] w-6 h-6">
        <img
          className="absolute top-[0px] left-[0px] w-6 h-6"
          alt=""
          src="/group-427325194.svg"
        />
        <div className="absolute top-[0px] left-[6.9px] leading-[150%] font-medium inline-block w-[10.3px] h-[20.6px]">
          5
        </div>
      </div>
      <div className="absolute top-[0px] left-[125px] w-7 h-[29px] text-xl">
        <div className="absolute top-[1px] left-[0px] rounded-[50%] bg-gold box-border w-7 h-7 border-[1.5px] border-solid border-moccasin" />
        <div className="absolute top-[0px] left-[8px] leading-[150%] font-medium inline-block w-3 h-6">
          2
        </div>
      </div>
    </div>
  );
};

export default NewProfilesFormContainer;
