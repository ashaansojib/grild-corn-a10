import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => { })
    }

    return (
        <header className='lg:h-16 my-container p-4 lg:flex justify-between items-center border-b'>
            <div className=''>
                <Link to="/"><img src="/logo.png" alt="" /></Link>
            </div>
            <nav className='list-none gap-4 flex'>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/blog" >Blogs</NavLink>
            </nav>
            <div className='flex md:justify-between items-center space-x-2'>
                {
                    user ?
                        <><button onClick={handleLogOut} className="border border-green-600 p-2">Sign Out</button>
                        </> :
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'active')} to="/login" >Login</NavLink>
                }
                {
                    user && <div className="avatar tooltip tooltip-bottom" data-tip={user?.displayName}>
                    <div className="w-14 border rounded-full">
                        <img src={user?.photoURL} />
                    </div>
                </div>
                }
            </div>

        </header>
    );
};

export default Header;