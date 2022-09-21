import styled from './Header.module.css';
import logo from '../assets/logo.svg'

export function Header() {
    return (
        <div className={styled.Header}>
            <img src={logo} alt="logo"/>
        </div>
    );
}