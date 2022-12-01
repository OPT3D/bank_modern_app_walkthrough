import styles from '../style'
import Button from './Button'

const CTA = () =>  (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Let's try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quam dignissimos neque consequatur commodi, ipsum deserunt fugit ex nihil odit non suscipit voluptatem sit quas quis eum perferendis quae laborum?</p>
      </div>
      <div>
        <Button className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}/>
      </div>
    </section>
  )


export default CTA
