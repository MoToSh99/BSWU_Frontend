import React from 'react';
import { useLocation, useHistory } from "react-router-dom";
import { UserDetail } from '../Models';
import Overall from './Stories/Overall'
import EvolvedHapiness from './Stories/EvolvedHapiness'
import Happiest from './Stories/Happiest'
import Unhappiest from './Stories/Unhappiest'
import Stories from '../Components/Stories'
import TopFive from './Stories/TopFive'
import Done from './Done';
import Compare from './Stories/Compare';
import WeekdayScores from './Stories/WeekdayScores'


export type Page = {
    object : React.FC,
    overlay : Boolean
}

const Story = () => {

    const history = useHistory();
    const location = useLocation();
    const user : UserDetail = location.state.memberDetail


    return (
        <Stories user={user}/>
    );
};

export default Story;