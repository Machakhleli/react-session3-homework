import React, { useState } from "react";

function TextToggleWidget() {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-amber-100 rounded-lg shadow-md flex flex-col items-center ">
      <h3 className="text-xl font-semibold mb-4">
        ინტერაქტიული ტექსტი და გადამრთველი
      </h3>
      <input
        type="text"
        value={text}
        onChange={(element) => setText(element.target.value)}
        placeholder="enter text here"
        className="max-w-md w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
      />
      <div className="mt-4 flex justify-center gap-4">
        <button
          onClick={() => setIsVisible(true)}
          className="cursor-pointer bg-amber-500 rounded-xl p-2 "
        >
          ტექსტის ჩვენება
        </button>
        <button
          onClick={() => setIsVisible(false)}
          className=" cursor-pointer bg-emerald-600 rounded-xl p-2"
        >
          ტექსტის დამალვა
        </button>
      </div>
      {isVisible && (
        <p className="mt-4 text-lg bg-blue-500 rounded-xl p-2">{text}</p>
      )}
      {isVisible && (
        <p className="mt-4 text-lg bg-red-300 rounded-xl p-2">
          {" "}
          Length of text: {text.length}
        </p>
      )}
    </div>
  );
}
export default TextToggleWidget;
