import React from 'react';
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Autocomplete from '../autocomplete';
import './style.css';

function Page(props) {
    const {
        text,
        suggestions,
        onChangeText,
        onChangeSelection,
    } = props;

    return (
        <AppBar position="static">
            <Toolbar className="appbar">
                <Typography variant="h6" color="inherit">
                   <Link to={'/'}  style={{color:"black", textDecoration:"none"}}> Programax </Link>
                </Typography>

                <Autocomplete
                    text={text}
                    suggestions={suggestions}
                    onChangeText={onChangeText}
                    onChangeSelection={onChangeSelection}
                />

                <AccountCircle />
            </Toolbar>
        </AppBar>
    );
}

export default Page;
