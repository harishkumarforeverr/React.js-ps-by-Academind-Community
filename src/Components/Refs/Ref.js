import React, { useRef } from "react";

const RefComponet = () => {
  const nameRef = useRef();
  const ageRef = useRef();
  const handlSubmit = (e) => {
    e.preventDefault();
    if (ageRef.current.value && nameRef.current.value) {
      console.log("nameRef.current.value : ", nameRef.current.value);
      console.log("ageRef.current.value : ", ageRef.current.value);
    } else {
      console.log("please enter a valid nameRef and aageRef");
    }
  };
  return (
    <div>
      <h1 className="flex"> DOM manipulating using React Ref</h1>
      <h2 className="flex">
        {" "}
        Please see the browser console to see the output{" "}
      </h2>
      <form onSubmit={handlSubmit}>
        <div className="flex">
          <div>
            <label> Name : </label>
            <input ref={nameRef} type="text" placeholder="enter nameRef" />
          </div>
          <div>
            <label> ageRef : </label>
            <input ref={ageRef} type="text" placeholder="enter nameRef" />
          </div>
        </div>
        <div className="flex">
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};
export default RefComponet;
