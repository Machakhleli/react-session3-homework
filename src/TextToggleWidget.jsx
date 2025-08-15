import React, { useState } from "react";

function TextToggleWidget() {
  const [text, setText] = useState("");
  const [isVisable, setIsVisable] = useState(true);
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">
        ინტერაქტიული ტექსტი და გადამრთველი
      </h3>
      {
        <input
          type="text"
          value={text}
          onChange={(element) => setText(element.target.value)}
          placeholder="enter text here"
          className="max-w-md w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        /> /* Input field, displayed text, toggle button, character counter */
      }
    </div>
  );
}
export default TextToggleWidget;
