import {card} from '../assets'
import styles, {layout} from '../style'
import Button from './Button'

const CardDeal = () =>  (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card <br className='sm:block hidden'/> deal in a few easy steps. </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos tenetur distinctio, iste voluptatum dolores placeat nihil esse in cumque quod. Ratione cupiditate distinctio illum sed magnam. Esse sequi nesciunt consequuntur.</p>
        <Button styles="mt-10"/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]' />
      </div>
    </section>
  )


export default CardDeal
