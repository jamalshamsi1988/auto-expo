import Categories from '../../components/modules/Categories';
import SearchBar from '../../components/modules/SearchBar';
import carsData from '../../data/carsData';
import CarsPage from './../../components/templates/CarsPage';

const Detailes = () => {
  return (
    <div >
      <SearchBar />
      <Categories />
      <CarsPage data={carsData}  />
    </div>
  )
}

export default Detailes
