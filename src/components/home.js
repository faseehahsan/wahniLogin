import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <div style={{margin: 0}}>
            <button><NavLink to='/account'>Go to My Account</NavLink></button>
        </div>

    );
}

export default Home;
