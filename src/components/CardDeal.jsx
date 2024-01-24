import {card} from '../assets';
import styles, {layout} from '../style';
import Button from './Button';

const CardDeal = () => 
   (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Encuentra la tarjeta que se adapte a tus necesidades <br/>
          en solo 3 pasos. 
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Nuestras tarjetas poseen tecnología de punta, usamos tecnología NFC para brindarte la mejor experiencia.
        </p>
        <Button styles="mt-10"/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]"/>
      </div>
    </section> 
  )


export default CardDeal;