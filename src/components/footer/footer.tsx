"use client"

import { useEffect, useState } from "react";
import "./index.css"

export default function Footer() {
    const  [year, setYear] = useState(0);
    useEffect(() => {
        const  currentYear:number = new Date().getFullYear();
        setYear(currentYear);
    },[]);

    return (
        <footer>
            <p>Challenge by <a 
            href="https://www.frontendmentor.io/" 
            target="_blank"
            rel="noopener noreferrer">Frontend Mentor.</a></p>

            <p>© {year} • Desenvolvido por <a 
            href="https://lucasgabrielmoya.com.br/" 
            target="_blank"
            rel="noopener noreferrer">Lucas Gabriel Moya</a>
            </p>
        </footer>
    )
}