import './global.css'
import styles from './App.module.css'

import sofa from './assets/sofa.svg'
import sofaGIF from './assets/sofa.gif'
import threehundredSixty from './assets/threehundredSixty.svg'
import { X } from 'phosphor-react'
import { useState } from 'react'

export function App() {  
  const [ activeImage, setActiveImage ] = useState(sofa)
  const [ isActiveStatus, setIsActiveStatus ] = useState(false)  

  function handleActivateButton() {
    setActiveImage(sofaGIF) 
    setIsActiveStatus(true)   
  }

  function handleDeactivateButton() {
    setActiveImage(sofa)
    setIsActiveStatus(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageBox}>
        <header>
          {
            isActiveStatus 
              ? <button type="button" onClick={handleDeactivateButton} title="Fechar">
                  <X size={16} />
                </button>
              : <button type="button" onClick={handleActivateButton} title="Ativar 360°">
                  <img src={threehundredSixty} alt="360°" />
                </button>
          }                 
        </header>        
        <img src={activeImage} alt="Foto do sofá" />
      </div> 
      <div className={styles.infoBox}>
        <p>Código: 42404</p>
        <h1>Sofá Margot II - Rosé</h1>
        <span>R$ 4.000</span>
        <button>Adicionar à cesta</button>        
      </div>     
    </div>
     
  )
}


