import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },

  background: {
      backgroundColor: "white",
      borderRadius: "5px",
      padding: "15px",
  }
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
      
    <form className={classes.root} noValidate autoComplete="off">

        <h1>Edit Class Details</h1>

      <div>
        <TextField required id="standard-required" label="Required" defaultValue="Hello World" className={classes.background}/>
        <TextField required id="standard-required" label="Required" defaultValue="Hello World" className={classes.background}/>
        <TextField required id="standard-required" label="Required" defaultValue="Hello World" className={classes.background}/>
      </div>

      <div>
        <TextField required id="standard-required" label="Required" defaultValue="Hello World" className={classes.background}/>
        <TextField required id="standard-required" label="Required" defaultValue="Hello World" className={classes.background}/>
        <TextField required id="standard-required" label="Required" defaultValue="Hello World" className={classes.background}/>
      </div>

      <div>
        <TextField required id="standard-required" label="Required" defaultValue="Hello World" className={classes.background}/>
      </div>

      
    </form>
  );
}