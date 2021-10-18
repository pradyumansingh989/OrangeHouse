import react from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
    // inline css
    const brandStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '20px',
        display: 'flex',
        alignItems: 'center'
    };
    const logotext ={
        marginLeft: '10px',
        color: '#F59606'
    }
    return (
        <div>
            <nav className={`${styles.navbar} container`}>
                <Link style={brandStyle} to="/">
                    <img src="/images/logo-grey-1.png" alt="logo" />
                    <span style={logotext}>Orange</span><span>House</span>
                </Link>
            </nav>
        </div>
    )
}

export default Navigation;