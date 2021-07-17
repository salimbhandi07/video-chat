// import { Typography } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import { Paper } from "@material-ui/core";
// import { Grid } from "@material-ui/core";
// import React, { useContext } from "react";
// import { SocketContext } from "../SocketContex";

// const useStyle = makeStyles((theme) => ({
//   video: {
//     width: "550px",
//     [theme.breakpoints.down("xs")]: {
//       width: "300px",
//     },
//   },

//   gridContainer: {
//     justifyContent: "center",
//     [theme.breakpoints.down("xs")]: {
//       flexDirection: "column",
//     },
//   },
//   paper: {
//     padding: "10px",
//     border: "2px solid black",
//     margin: "10px",
//   },
// }));

// const VideoPlayer = () => {
//   const { call, callAccepted, myVideo, userVideo, stream, name } =
//     useContext(SocketContext);
//   const classes = useStyle();
//   return (
//     <Grid container className={classes.gridContainer}>
//       {stream && (
//         <Paper className={classes.paper}>
//           <Grid item xs={12} md={6}>
//             <Typography variant="h5" gutterBottom>
//               {name || "Name"}
//             </Typography>
//             <video
//               playsInline
//               muted
//               ref={myVideo}
//               autoPlay
//               className={classes.video}
//             />
//           </Grid>
//         </Paper>
//       )}

//       {callAccepted && !callAccepted && (
//         <Paper className={classes.paper}>
//           <Grid item xs={12} md={6}>
//             <Typography variant="h5" gutterBottom>
//               {call.name || "Name"}
//             </Typography>
//             <video
//               playsInline
//               ref={userVideo}
//               autoPlay
//               className={classes.video}
//             />
//           </Grid>
//         </Paper>
//       )}
//     </Grid>
//   );
// };

// export default VideoPlayer;
import React, { useContext } from "react";
import { Grid, Typography, Paper, makeStyles } from "@material-ui/core";
import { SocketContext } from "../SocketContex";

const useStyles = makeStyles((theme) => ({
  video: {
    width: "550px",
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
  gridContainer: {
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  paper: {
    padding: "10px",
    border: "2px solid black",
    margin: "10px",
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {name || "Name"}
            </Typography>
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              className={classes.video}
            />
          </Grid>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {call.name || "Name"}
            </Typography>
            <video
              playsInline
              ref={userVideo}
              autoPlay
              className={classes.video}
            />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
