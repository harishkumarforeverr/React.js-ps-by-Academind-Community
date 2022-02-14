import React from "react";
import ReactDOM from "react-dom";
const CreatePortal = () => {
  const BackgroundMask = () => {
    return (
      <div
        style={{
          background: "#F1F5FA",
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: "0",
          zIndex: 10,
        }}
      ></div>
    );
  };
  const BackgroundOverLayText = () => {
    return (
      <div
        style={{
          background: "#F1F5FA",
          // height: "100vh",
          width: "100vw",
          position: "fixed",
          top: "50%",
          display: "flex",
          justifyContent: "center",
          zIndex: 12,
        }}
      >
        <h1
          style={{
            color: "#2D80B5",
          }}
        >
          {" "}
          Data is Saved sucessfully
        </h1>
      </div>
    );
  };
  return (
    <div>
      {ReactDOM.createPortal(
        <BackgroundMask />,
        document.getElementById("root-BackgroundMask")
      )}
      {ReactDOM.createPortal(
        <BackgroundOverLayText />,
        document.getElementById("root-BackgroundMask-text")
      )}
    </div>
  );
};
export default CreatePortal;
