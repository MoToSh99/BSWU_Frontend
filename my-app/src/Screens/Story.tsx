import React, { Component } from 'react';
import Stories from 'react-insta-stories';
import Overall from './Stories/Overall'
import EvolvedHapiness from './Stories/EvolvedHapiness'
import { useLocation, useHistory } from "react-router-dom";
import { UserDetail } from '../Models';
import { Button } from "@material-ui/core"


const Story = () => {

    const history = useHistory();
    const location = useLocation();
    const userinfo : UserDetail = location.state.memberDetail

    const stories = [
        {content: (props) => <Overall />},
        {content: (props) => <EvolvedHapiness />},
        {
            content: (props) => (
                <div style={{ background: 'pink', padding: 20 }}>
                    <h1 style={{ marginTop: '100%', marginBottom: 0 }}>ddd</h1>
                    <h1 style={{ marginTop: 5 }}>A custom title can go here.</h1>
                    <Button onClick={console.log(userinfo.tweets)}>Hej med dig</Button>
                </div>
            ),
        },
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