import React from 'react';
import '../css/Header.css'
import {Link} from 'react-router-dom';
import NavLink from './NavLink';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Link to={'/'} className="logo"/>
                <div className="header-right">
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/search'}>Gists</NavLink>
                </div>
            </div>
        );
    }
}
