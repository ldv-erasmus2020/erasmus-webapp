import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    leftButton: {
        position: 'absolute',
        right: theme.spacing(13),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    rightButton: {
        position: 'absolute',
        right: theme.spacing(7),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const useStyles = makeStyles({
    root: {
        maxWidth: "100%",
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        marginTop:'30'
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {/* {onClose ? ( */}
                <div>
                    <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                    <IconButton aria-label="left" className={classes.leftButton} onClick={() => props.changeDialog(-1)}>
                        <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton aria-label="right" className={classes.rightButton} onClick={() => props.changeDialog(1)}>
                        <ChevronRightIcon/>
                    </IconButton>    
                </div>
            {/* ) : null} */}
        </MuiDialogTitle>
    );
});


const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);


export default function CustomizedDialogs(props) {
    const classes = useStyles();

    const getTitle = () => props.dialogState.data ? props.dialogState.data.name : "title"

    return (
        <div>
            <Dialog onClose={props.closeDialog} aria-labelledby="customized-dialog-title" open={props.dialogState.open}>
                <DialogTitle id="customized-dialog-title" onClose={props.closeDialog} changeDialog={props.changeDialog}>
                    {getTitle()}
                </DialogTitle>
                <DialogContent dividers>
                    <CardMedia
                        className={classes.media}
                        image="https://vivicentro.it/wp-content/uploads/2016/09/Battistero-medievale-di-Cureggio-sar%C3%A0-meta-di-visite.jpg"
                        title="Contemplative Reptile"
                    />
                </DialogContent>
                <DialogContent >
                    <Typography gutterBottom>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </Typography>
                    <Typography gutterBottom>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                        lacus vel augue laoreet rutrum faucibus dolor auctor.
                    </Typography>
                    <Typography gutterBottom>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                        auctor fringilla.
                    </Typography>
                </DialogContent>

                {/* <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Save changes
                    </Button>
                </DialogActions> */}
            </Dialog>
        </div>
    );
}
