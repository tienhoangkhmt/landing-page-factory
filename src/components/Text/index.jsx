import React from "react";

function Text(props) {
  return (
    <p className={`sm:text-sm text-[12px] ${props.class}`}>{props?.children}</p>
  );
}

export default Text;
