import React, { Component } from 'react';
import Stories from 'react-insta-stories';
import Overall from './Stories/Overall'
import EvolvedHapiness from './Stories/EvolvedHapiness'
import { useLocation, useHistory } from "react-router-dom";
import { User } from '../../Models';


const Story = () => {

    const history = useHistory();
    const location = useLocation();
    const userinfo : User = location.state.memberDetail

    const stories = [
        {content: (props) => <Overall />},
        {content: (props) => <EvolvedHapiness />}
    ];

    return (
        <Stories
            stories={stories}
            defaultInterval={30000}
            height= {window.innerHeight}
            width= {window.innerWidth}
        />
    );
};

export default Story;