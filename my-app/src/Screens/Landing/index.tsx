import React, { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {TextField } from '@material-ui/core';

export interface LandingScreenProps {

}

const LandingScreen: FC<LandingScreenProps> = (props) => {
    const classes = useStyles({});

    return (
        
        <TextField id="time" type="time" />
    )
}

const useStyles = makeStyles<Theme, any>((theme) => ({

}));

export default LandingScreen;