import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content",
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

const Upload = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [file, setFile] = useState(null);
  // const [fullWidth, setFullWidth] = useState(true);
  // const [maxWidth, setMaxWidth] = useState("sm");

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const fileSetForUpload = (evt) => {
    evt.preventDefault();
    console.log(evt.target.files[0]);
    setFile(evt.target.files[0]);
  };

  function uploadFile() {
    var data = new FormData();
    data.append("file", file);

    const reaponse = fetch("http://localhost:3000/api/v1/upload", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("File :: ", file, " data --- ", data);
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="Site Map Upload Dialog !"
      >
        <DialogTitle id="max-width-dialog-title">UPLAOD SITE MAP</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Simulation Session, Welcome to the Aconex site clearing simulator.
          </DialogContentText>
          <form
            className={classes.form}
            noValidate
            encType="multipart/form-data"
          >
            <label htmlFor="myfile">Select a file:</label>
            <input
              type="file"
              id="myfile"
              name="myfile"
              onChange={fileSetForUpload}
            />
            <Button onClick={uploadFile}>Upload Site-Map</Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Upload;
