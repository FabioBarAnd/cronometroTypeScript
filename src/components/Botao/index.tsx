import React from 'react';
import styles from './Botao.module.scss';

interface BotaoProps {
    children?: React.ReactNode,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
  }

function Botao({onClick, type, children}: BotaoProps) {
    return(
        <button 
            onClick={onClick} 
            type={type} 
            className={styles.botao}
        >
            {children}
        </button>
    )
}

export default Botao;