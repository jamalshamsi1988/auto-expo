import styles from './CarDetails.module.css';
import Location from './../icons/Location';
import Company from './../icons/Company';
import Model from './../icons/Model';
import Calender from './../icons/Calender';
import Road from './../icons/Road';
import Money from './../icons/Money';


const CarDetails = (props) => {
    const {id , name , image , year , distance, price,model,location,description}=props;
    console.log(props)
  return (
    <div className={styles.container}>
        <img className={styles.image} src={image} target="_blank" rel="noreferrer" />
        <h3 className={styles.header}>{name} {model}</h3>
    <div className={styles.details}>
    <div>
        <Company/>
        <p>Company</p>
        <span>{name}</span>
        </div>
        <div>
        <Model/>
        <p>Model</p>
        <span>{model}</span>
        </div>
        <div>
        <Calender/>
        <p>First registration</p>
        <span>{year}</span>
        </div>
        <div>
        <Road/>
        <p>kms driven</p>
        <span>{distance}</span>
        </div>
        <div>
        <Location/>
        <p>Location</p>
        <span>{location}</span>
        </div>
    </div>

      <div className={styles.details}>
      <div>
        <Location/>
        <p>Location</p>
        <span>{location}</span>
        </div>
      </div>
     <div className={styles.details}>
        <p className={styles.descriptionTitle}>Extra Information </p>
        <p className={styles.descriptionText}>{description} </p>
     </div>
    <div className={styles.details}>
    <div>
        <Money/>
        <p>Price</p>
        <span>{price}</span>
        </div>
    </div>
    <button className={styles.button}>Buy</button>
    </div>
  )
}

export default CarDetails
