const CarDetails = ({Marca, Km, Cor, NewCar}) => { // forma mais atual de se fazer.
  return <div>
    <ul>
        <li>Marca: {Marca}</li>
        <li>Km: {Km}</li>
        <li>Cor: {Cor}</li>
    </ul>
    {NewCar && <p>Carro novo!</p> }
  </div>;
};

export default CarDetails;
