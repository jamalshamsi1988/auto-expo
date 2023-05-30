import Link from 'next/link';
import Location from '../icons/Location';
import styles from './Card.module.css';

const Card = (props) => {
    const {id , name , image , year , distance, price,model,location}=props;
  return (
    <Link href={`/cars/${id}`}>
    <div className={styles.container}>
      <img className={styles.image} src={image} alt={name} />
      <h4 className={styles.title}>{`${name} ${model}`}</h4>
      <p className={styles.detail}>{`${year} . ${distance}`}</p>
      <div className={styles.footer}>
        <p>$ {price}</p>
        <div className={styles.location}>
            <p>{location}</p>
            <Location />
        </div>

      </div>
    </div>
    </Link>
  )
}

export default Card
