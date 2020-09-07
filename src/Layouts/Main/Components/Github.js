import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function IconButtons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <a taregt="_blank" href="https://github.com/ldv-erasmus2020/erasmus-webapp" style={{color: "inherit"}}>
                <IconButton aria-label="delete" color="inherit">
                    <GitHubIcon />
                </IconButton>
            </a>
        </div>
    );
}