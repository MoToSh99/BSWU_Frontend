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


export type Page = {
    object : React.FC,
    overlay : Boolean
}

const Story = () => {

    const history = useHistory();
    const location = useLocation();
    const user : UserDetail = location.state.memberDetail



    const stories = [
       {object : <Overall user={user} />, overlay : true},
       {object : <EvolvedHapiness/>, overlay : true},
       {object : <Happiest user={user} />, overlay : false},
       {object : <Unhappiest user={user} />, overlay : false},
       {object : <TopFive user={user} />, overlay : false},
       {object : <Done user={user} />, overlay : false},
    ];

    return (
        <Stories stories={stories} user={user}/>
    );
};

export default Story;