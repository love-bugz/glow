import socketIO from "socket.io-client";
import { SERVER_URL } from "../secrets";

// Initialize Socket IO:
const socket = socketIO.io(SERVER_URL, {
  transports: ["websocket"],
  jsonp: false,
});

// export the function to connect and use socket IO:
export const startSocketIO = (store: any) => {
  socket.connect();

  socket.on("connect", () => {
    // const { userId } = store.getState().user;

    socket.on("disconnect", () => {
      console.log("connection to server lost.");
    });

    // socket.on('newMessage', (message) => {
    //   store.dispatch(storePublicMessages([ message ]));
    // });
  });
};
