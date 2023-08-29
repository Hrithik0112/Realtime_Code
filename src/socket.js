import { io } from "socket.io-client";

export const initSocket = async (url) => {
  const options = {
    "force new connection": true,
    reconnectionAttempt: "Infinity",
    timeout: 10000,
    transports: ["websocket"],
  };
  return io(url, options);
};
