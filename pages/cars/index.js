import Categories from '../../components/modules/Categories';
import carsData from '../../data/carsData';
import CarsPage from './../../components/templates/CarsPage';

const Detailes = () => {
  return (
    <div >
      <Categories />
      <CarsPage data={carsData}  />
    </div>
  )
}

export default Detailes
