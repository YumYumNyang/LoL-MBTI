import React from "react";

const NextButton = ({ onNext }) => {
  return (
    <div
      onClick={onNext}
      dangerouslySetInnerHTML={{
        __html: `<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="23" cy="23" r="22.5" fill="#172228" stroke="#D0A85C"/>
<path d="M37.5303 23.5303C37.8232 23.2374 37.8232 22.7626 37.5303 22.4697L32.7574 17.6967C32.4645 17.4038 31.9896 17.4038 31.6967 17.6967C31.4038 17.9896 31.4038 18.4645 31.6967 18.7574L35.9393 23L31.6967 27.2426C31.4038 27.5355 31.4038 28.0104 31.6967 28.3033C31.9896 28.5962 32.4645 28.5962 32.7574 28.3033L37.5303 23.5303ZM9 23.75L37 23.75V22.25L9 22.25V23.75Z" fill="#D0A85C"/>
</svg>
      `,
      }}
    ></div>
  );
};

export default NextButton;
