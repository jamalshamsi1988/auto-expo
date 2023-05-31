import Link from 'next/link';
import Suv from './../icons/Suv';
import Sport from './../icons/Sport';
import Sedan from './../icons/Sedan';
import Hatchback from './../icons/Hatchback';

import styles from './Categories.module.css';

const Categories = (props) => {
    const {id , name , image , year , distance, price,model,location,category}=props;
  return (
    <div className={styles.container}>
        <Link href='/categories/suv'>
        <div>
            <p>Suv</p>
            <Suv />
        </div>
        </Link>
        <Link href='/categories/sport'>
        <div>
            <p>Sport</p>
            <Sport />
        </div>
        </Link>
        <Link href='/categories/hatchback'>
        <div>
            <p>Hatchback</p>
            <Hatchback />
        </div>
        </Link>
        <Link href='/categories/sedan'>
        <div>
            <p>Sedan</p>
            <Sedan />
        </div>
        </Link>
    </div>
  )
}

export default Categories
