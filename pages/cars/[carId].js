import {useRouter} from 'next/router';
import carsData from '../../data/carsData';
import CarDetails from '../../components/templates/CarDetails';

const CarId = () => {
    const router=useRouter();
    const {carId}=router.query;
    const carDetails=carsData[carId - 1];
    console.log(carDetails);
  return (
    <CarDetails {...carDetails} />
  )
}

export default CarId
