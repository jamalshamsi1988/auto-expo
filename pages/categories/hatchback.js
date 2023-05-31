import CarsList from "../../components/templates/CarsList";
import carsData from "../../data/carsData";



const HatchBack = () => {
    const hatchBackCars=carsData.filter((car) => car.category === "hatchback")
  return (
    <CarsList data={hatchBackCars}/>
  )
}

export default HatchBack;
