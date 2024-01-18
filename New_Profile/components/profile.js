import { useMemo } from "react";

const Profile = ({
  profilePosition,
  profileTop,
  profileLeft,
  ellipseDivBorder,
}) => {
  const profileStyle = useMemo(() => {
    return {
      position: profilePosition,
      top: profileTop,
      left: profileLeft,
    };
  }, [profilePosition, profileTop, profileLeft]);

  const ellipseDivStyle = useMemo(() => {
    return {
      border: ellipseDivBorder,
    };
  }, [ellipseDivBorder]);

  return (
    <div
      className="w-8 h-8 text-center text-base text-dimgray-200 font-poppins"
      style={profileStyle}
    >
      <div
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-beige box-border border-[1.3px] border-solid border-linear"
        style={ellipseDivStyle}
      />
      <div className="absolute top-[12.5%] left-[16.56%] font-medium">NV</div>
    </div>
  );
};

export default Profile;
