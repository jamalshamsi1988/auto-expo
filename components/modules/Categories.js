import Link from 'next/link';
import Suv from './../icons/Suv';
import Sport from './../icons/Sport';
import Sedan from './../icons/Sedan';
import Hatchback from './../icons/Hatchback';

import styles from './Categories.module.css';

const Categories = () => {
  return (
    <div className={styles.container}>
        <div>
            <p>Suv</p>
            <Suv />
        </div>

        <div>
            <p>Sportt</p>
            <Sport />
        </div>

        <div>
            <p>Hatchback</p>
            <Hatchback />
        </div>

        <div>
            <p>Sedan</p>
            <Sedan />
        </div>
      
    </div>
  )
}

export default Categories
