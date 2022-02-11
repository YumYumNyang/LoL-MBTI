import React from "react";

const BackButton = ({ onBack }) => {
  return (
    <div
      onClick={onBack}
      dangerouslySetInnerHTML={{
        __html: `<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="23" cy="23" r="22.5" fill="#172228" stroke="#D0A85C"/>
<path d="M8.46967 22.4697C8.17678 22.7626 8.17678 23.2374 8.46967 23.5303L13.2426 28.3033C13.5355 28.5962 14.0104 28.5962 14.3033 28.3033C14.5962 28.0104 14.5962 27.5355 14.3033 27.2426L10.0607 23L14.3033 18.7574C14.5962 18.4645 14.5962 17.9896 14.3033 17.6967C14.0104 17.4038 13.5355 17.4038 13.2426 17.6967L8.46967 22.4697ZM37 22.25L9 22.25V23.75L37 23.75V22.25Z" fill="#D0A85C"/>
</svg>

`,
      }}
    ></div>
  );
};

export default BackButton;
