import React, { Component } from 'react';
import Stories from 'react-insta-stories';
import Overall from '../Screens/Overall'


const stories = [
    {content: (props) => <Overall />},
    {content: (props) => <Overall />}
];

const Story = () => {

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