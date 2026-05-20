import {
  //useRef,
  useState,
} from "react";

export default function FixBrokenReRender() {
  const [isOn, setIsOn] = useState(false);
  //const isOnRef = useRef(false);

  return (
    <>
      <hr />
      <h2>Fix broken re-render</h2>
      <button
        onClick={() => {
          //isOnRef.current = !isOnRef.current;
          setIsOn(!isOn);
        }}
      >
        {/* {isOnRef.current ? "On" : "Off"}*/}
        {isOn ? "On" : "Off"}
      </button>
    </>
  );
}
