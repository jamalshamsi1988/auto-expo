import { useRouter } from "next/router";
import styles from './CarsList.module.css';
import Back from './../icons/Back';
import Card from './../modules/Card';

const CarsList = ({data}) => {
  const router=useRouter();

  const backHandeler=()=>{
    router.back()
  }
  return (
    <div className={styles.container}>
      <div className={styles.back}>
        <p className={styles.back} onClick={backHandeler} >Back</p>
        <Back />
      </div>
        <div className={styles.cards} >
          {
            data.map(item => <Card key={item.id} {...item} />)
          }

        </div>


    </div>
  )
}

export default CarsList
