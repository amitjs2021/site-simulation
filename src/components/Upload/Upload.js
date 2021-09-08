import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
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
  const [file, setFile] = useState(''); // storing the uploaded file
  // storing the recived file from backend
  const [data, getFile] = useState({ name: "", path: "" });
  const [progress, setProgess] = useState(0); // progess bar
  const el = useRef(); // accesing input element

  const handleChange = (e) => {
    setProgess(0)
    const file = e.target.files[0]; // accessing file
    console.log(file);
    setFile(file); // storing file
  }

  const uploadFile = () => {
    const formData = new FormData();
    formData.append('file', file); // appending file
    axios.post('http://localhost:4500/api/v1/upload', formData, {
      onUploadProgress: (ProgressEvent) => {
        let progress = Math.round(
          ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
        setProgess(progress);
      }
    }).then(res => {
      console.log(res);
      getFile({
        name: res.data.name,
        path: 'http://localhost:4500' + res.data.path
      })
    }).catch(err => console.log(err))
  }


  const handleClose = () => {
    setOpen(false);
  };



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


          <input type="file" ref={el} onChange={handleChange} />
          <br />

          <Button variant="contained" onClick={uploadFile}>
            Upload File
          </Button>
          <hr />
          {/* displaying received image*/}
          Fil updated name : {data.path && data.name}

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Upload;
