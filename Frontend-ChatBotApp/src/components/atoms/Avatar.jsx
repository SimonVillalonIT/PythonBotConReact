import React from "react";
import avatarAlice from "../../assets/a22370323.png";
import avatarMark from "../../assets/a15017103.png";

const Avatar = ({ styles, avatar }) => {
  return (
    <img
      className={`${styles} rounded-full bg-cover`}
      src={avatar === "alice" ? avatarAlice : avatarMark}
      alt="Avatar-IA ITR3"
    />
  );
};

export default Avatar;
