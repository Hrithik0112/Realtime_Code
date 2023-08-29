import React, { useEffect, useRef, useState } from "react";
import Logo from "/1200px-Logo_CODE.svg.png";
import Editor from "../components/Editor";
import Client from "../components/Client";
import { initSocket } from "../socket";
import ACTIONS from "../Action";
import { useLocation } from "react-router-dom";

const LIveCodePage = () => {
  const socketRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    const init = async () => {
      socketRef.current = await initSocket("http://localhost:3000");
      // socketRef.current.emit(ACTIONS.JOIN , {
      //   roomId,
      //   username: location.state?.username,
      // })
    };
    init();
  }, []);

  const [clients, setClients] = useState([
    { socketId: 1, username: "Hrithik Dutta" },
    { socketId: 2, username: "Lama Dev" },
  ]);
  return (
    <div className="grid grid-cols-12 h-screen ">
      <div className="bg-[#1c1e29] p-4 text-[#fff] flex flex-col col-span-2 ">
        <div className="flex-1 ">
          <div className="border-b-2 border-[#424242]">
            <img className="h-16" src={Logo} alt="logo" />
          </div>
          <h3 className="font-semibold text-lg mt-4 mb-4">Connected</h3>
          <div className="flex items-center flex-wrap gap-5">
            {clients.map((client) => (
              <Client key={client.socketId} username={client.username} />
            ))}
          </div>
        </div>
        <button className="p-3 rounded-md text-lg font-bold cursor-pointer w-full ml-auto bg-gray-500">
          Copy ROOM ID
        </button>
        <button className="p-3 rounded-md text-lg font-bold cursor-pointer w-full ml-auto bg-[#4aed88] mt-5">
          Leave
        </button>
      </div>

      <div className="col-span-10">
        <Editor />
      </div>
    </div>
  );
};

export default LIveCodePage;
