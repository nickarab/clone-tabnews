import React from 'react';
import styles from '../archive/styles/animation.module.css';

export default function UnderConstruction() {
  return (
    <div className={styles.container}>
      {/* 1ª Camada: Fundo */}
      <div className={styles.background}></div>
      
      {/* 2ª Camada: Sonic */}
      <div className={styles.sonic}></div>

      {/* 3ª Camada: Texto na frente de tudo */}
      <div className={styles.textoContainer}>
        <h1 className={styles.titulo}>PÁGINA EM CONSTRUÇÃO</h1>
        <p className={styles.subtitulo}>Construindo algo incrível na velocidade da luz</p>
      </div>
    </div>
  );
}