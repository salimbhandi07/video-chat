// import React from "react";

// const Notification = () => {
//   return <div>Notification</div>;
// };

// export default Notification;
import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { SocketContext } from "../SocketContex";

const Notification = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h1>{call.name} is calling:</h1>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </>
  );
};

export default Notification;
