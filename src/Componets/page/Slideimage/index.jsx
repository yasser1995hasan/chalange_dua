import React, { useState } from "react";
import Slider from "../../slider/Slider";
import image1 from "./image1.jpg";
import thumb1 from "./thumb1.jpg";
import thumb2 from "./thumb2.jpg";
import thumb3 from "./thumb3.jpg";
import thumb4 from "./thumb4.jpg";
import FsLightbox from "fslightbox-react";
export default function Slidemage() {
  const Handeler1 = (e) => {
    const jumbo = document.querySelector(".jumbo");
    jumbo.src = e.target.src;
  };

  const Handeler2 = (e) => {
    const jumbo = document.querySelector(".jumbo");
    jumbo.src = e.target.src;
  };

  const Handeler3 = (e) => {
    const jumbo = document.querySelector(".jumbo");
    jumbo.src = e.target.src;
  };

  const Handeler4 = (e) => {
    const jumbo = document.querySelector(".jumbo");
    jumbo.src = e.target.src;
  };
  const [toggler, setToggler] = useState(false);
  return (
    <div>
      <Slider />
      <div className="container  sm:grid justify-items-center m-0 p-0 mt-10 w-full hidden ">
        <button onClick={() => setToggler(!toggler)}>
          <img src={image1} className="jumbo h-[400px] rounded " />
        </button>
        <FsLightbox toggler={toggler} sources={[<img src={thumb1} />, <img src={thumb2} />, <img src={thumb3} />, <img src={thumb4} />]} />
        <div className="flex mt-3 gap-x-2">
          <a className="hover:opacity-60 ">
            <img onClick={Handeler1} src={thumb1} className=" thumb image" />
          </a>
          <a className="hover:opacity-60">
            <img onClick={Handeler2} src={thumb2} className=" thumb image" />
          </a>

          <a className="hover:opacity-60">
            <img onClick={Handeler3} src={thumb3} className="thumb image active:ring-4 active:ring-orange-500" />
          </a>
          <a className="hover:opacity-60 active:ring-4 active:ring-orange-500">
            <img onClick={Handeler4} src={thumb4} className="thumb image  " />
          </a>
        </div>
      </div>
    </div>
  );
}
