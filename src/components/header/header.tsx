"use client"
import ThemeSwitcher from "../themeSwitcher/theme-switcher";
import "./index.css";



export default function Header(){
    return(
        <header>
            <h1 className="header__title">ProcuraDevs</h1>
            <ThemeSwitcher />
        </header>
    );
}