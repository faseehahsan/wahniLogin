import React, { useState, useContext} from 'react';
import { UserContext } from './context/user1Context';


function Home() {
    const user = useContext(UserContext);

    return (
        <div>
            <h1>WahniHome</h1>
        </div>
    );
}

export default Home;
