import React, { Component } from 'react';
import { useLocation, useHistory } from "react-router-dom";
import { UserDetail } from '../Models';
import Stories from 'react-insta-stories';
import Overall from './Stories/Overall'
import EvolvedHapiness from './Stories/EvolvedHapiness'
import Happiest from './Stories/Happiest'
import { Button } from "@material-ui/core"


const Story = () => {

    const history = useHistory();
    const location = useLocation();
    const user : UserDetail = location.state.memberDetail

    const stories = [
        {content: () => <Overall user={user} />},
        {content: () => <EvolvedHapiness />},
        {content: () => <Happiest user={user} />},
        {
            content: () => (
                <div style={{ background: 'pink', padding: 20 }}>
                    <h1 style={{ marginTop: '100%', marginBottom: 0 }}>ddd</h1>
                    <h1 style={{ marginTop: 5 }}>A custom title can go here.</h1>
                    <Button onClick={console.log(user.celebrityscore[0].pic)}>Hej med dig</Button>
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