import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import AutorenewIcon from '@mui/icons-material/Autorenew';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ReturnPolicy() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button style={{color:"white",fontSize:"15px"}} variant="filled" onClick={handleClickOpen}>
       Return Policy <AutorenewIcon style={{fontSize:"large"}}></AutorenewIcon>
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <p dir='rtl' style={{textAlign:"center", fontSize:"25px"}}>
            מדיניות החזרה
          </p>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <p dir='rtl'>
            אנו ב SOFA SPORT לא מחזיקים במלאי מוצרים וההזמנות מתבצעות באופן פרטי ופר הזמנה, ולכן לא תינתן אפשרות להחליף או להחזיר את המוצר.


            </p>
          </Typography>
          <Typography gutterBottom>
            <p dir='rtl'>
              במידה והמוצר הגיע פגום ו/או שונה מהמוצר שהוזמן, ניתן ליצור איתנו קשר בדרכי ההתקשרות וניתן את המענה בהתאם.
            </p>
          </Typography>
        </DialogContent>
        <DialogActions style={{display:"flex",flexDirection:"row-reverse"}}>
          <Button autoFocus onClick={handleClose}>
            <p dir="rtl">
              הבנתי
            </p>
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
