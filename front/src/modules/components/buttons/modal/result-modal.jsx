
import "../buttons.css"
import "./modal.css"
import "../../complect/complect.css"

import * as React from 'react';

import { AppBar, Button, Dialog, IconButton, Toolbar, Slide, Typography, List, ListItem, ListItemText, Divider } from "@material-ui/core"
import Header from "../../header/header"
import DealContainer from "../../deal/deal-Container"
import { CURRENT_UNIVERSAL } from "../../../redux/redusers/global-parameters/global-parameters-reducer";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ResultModalButton = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    props.handleShow(ref)
  };

  const handleClose = () => {
    props.handleClose(ref)
  };
  let ref = React.createRef()
  let buttonStyle = props.styleBtnModal
  let buttonClassname = 'btn__result__modal'
  let disabled = false
  let title = props.title
  if (props.currentComplectsType === CURRENT_UNIVERSAL) {
    buttonStyle = null
    buttonClassname = 'btn__result__universal--active'
    if(props.currentComplect.name === 'СОБРАН НЕВЕРНО!'){
      buttonClassname = 'btn__result__universal'
      disabled = true
      title = props.currentComplect.name
    }
    
  }
  return (
    <div>
      <Button ref={ref} disabled={disabled} style={buttonStyle} onClick={handleClickOpen} className={buttonClassname}>
        {title}

      </Button>
      <Dialog
        fullScreen
        open={props.show}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        {/* <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="end"
           
              onClick={handleClose}
              aria-label="close"
            >
            
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">

            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar> */}
        <List>

          <DealContainer />
        </List>
      </Dialog>
    </div>
  );
}


export default ResultModalButton

