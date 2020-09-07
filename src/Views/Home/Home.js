import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
        textAlign: "center",
    },
}));

const Home = (props) => {
    const classes = useStyles();

    const content = {
        "title": {
            "en": "WebApp in development",
            "it": "WebApp in sviluppo",
            "de": "WebApp in Entwicklung",
            "cz": "WebApp ve vývoji"
        },
        "desc": {
            "en": "Use the menu to access the map",
            "it": "Usa il menu per accedere alla mappa",
            "de": "Verwenden Sie das Menü, um auf die Karte zuzugreifen",
            "cz": "Pomocí nabídky přejděte na mapu"
        }
    }

    return(
        <div>
            <Typography variant="h3" className={classes.root}>
                {content.title[props.lang.lang]}
            </Typography>
            <Typography variant="h5" className={classes.root}>
                {content.desc[props.lang.lang]}
            </Typography>

        </div>
    )
}

export default Home;