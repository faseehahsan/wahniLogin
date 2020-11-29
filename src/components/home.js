import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <div style={{margin: 0}}>
            <a><NavLink to='/account'>Go to My Account</NavLink></a>
        </div>

    );
}

export default Home;
