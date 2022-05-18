import React from "react";

const ThirdQue = () => {
  return (
    <div className="px-5 py-3 bg-slate-300 rounded-2xl shadow-2xl">
      <h1 className="pb-4 text-3xl">
        Difference between <b>inline</b>, <b>inline-block</b> and <b>block</b>
      </h1>
      <div>
        <p className="text-2xl justify-center">
          Compared to display: inline, the major difference is that display:
          inline-block allows to set a width and height on the element.
          <br />
          Also, with display: inline-block, the top and bottom margins/paddings
          are respected, but with display: inline they are not.
          <br />
          Compared to display: block, the major difference is that display:
          inline-block does not add a line-break after the element, so the
          element can sit next to other elements.
          <br />
          The following example shows the different behavior of display: inline,
          display: inline-block and display: block:
        </p>
      </div>
    </div>
  );
};

export default ThirdQue;
