import React from "react";
import Logo from "/1200px-Logo_CODE.svg.png";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-[#282a36] p-5 rounded-xl w-[500px] max-w-[90%] ">
        <img src={Logo} alt="Our Main Logo" className="h-16 mb-8" />
        <h4 className="mt-0 mb-5">Paste Invitation ROOM ID</h4>

        <div className="flex flex-col">
          <input
            type="text"
            placeholder="ROOM ID"
            className="p-3 rounded-md outline-none border-none mb-4 bg-[#eee] text-lg font-bold text-black"
          />
          <input
            type="text"
            placeholder="USERNAME"
            className="p-3 rounded-md outline-none border-none mb-4 bg-[#eee] text-lg font-bold text-black"
          />
          <button className="p-3 rounded-md text-lg font-bold cursor-pointer w-24 ml-auto bg-[#4aed88]">
            JOIN
          </button>
          <span className="mx-auto mt-5">
            If you Don't Have an invite then create &nbsp;
            <a className="text-[#4aed88]">new room</a>
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
