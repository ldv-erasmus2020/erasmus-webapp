import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TranslateIcon from '@material-ui/icons/Translate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

const Language = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event, lang) => {
        setAnchorEl(null);
        if(lang){
            props.setLangState({ lang: lang });
        }
    };

    const lang = "Language";

    return (
        <div>
            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}

                color="inherit"
                startIcon={<TranslateIcon />}
                endIcon={<ExpandMoreIcon />}
            >
                <Typography> {lang} </Typography>
            </Button>

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={(e) => handleClose(e, null)}
            >
                <MenuItem onClick={(e) => handleClose(e, "en")}>English</MenuItem>
                <MenuItem onClick={(e) => handleClose(e, "it")}>Italiano</MenuItem>
                <MenuItem onClick={(e) => handleClose(e, "de")}>Deutsch</MenuItem>
                <MenuItem onClick={(e) => handleClose(e, "cz")}>Czech</MenuItem>
            </Menu>
        </div>
    );
}

export default Language;