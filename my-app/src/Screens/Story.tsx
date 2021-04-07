import React from 'react';
import { useLocation, useHistory } from "react-router-dom";
import { UserDetail } from '../Models';
import Stories from '../Components/Stories'


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