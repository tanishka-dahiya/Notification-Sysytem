import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {
    Redirect
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: 4
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar({ ResetUsers }) {
    const [logOut, setLogOUT] = React.useState(false);
    const classes = useStyles();
    const handleClick = () => {
        ResetUsers();
        setLogOUT(true)


    }
    if (logOut == true) {
        return <Redirect to="/Register" push={true} />
    }
    return (

        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Alerto
          </Typography>
                    <Button color="inherit" onClick={handleClick}>LogOut</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}