import React, { useState } from "react";
import styles from "./Car.module.css"

const CarDetails = () => {
  const [cars] = useState([
    { id: 1, Marca: "VW", Cor: "Preto", Km: 0 },
    { id: 2, Marca: "Toyota", Cor: "Branco", Km: 14000 },
    { id: 3, Marca: "Mitsubishi", Cor: "Cinza", Km: 25000 }
  ]);
  return (
    <div>
      <h1>Detalhes de carros</h1>
      {cars.map((car) => (
        <div key={car.id}>
            <h1 className={styles.My_Marca}>Marca: {car.Marca}</h1>
            <h1 className={styles.My_Cor}>Cor: {car.Cor}</h1>
            <h1 className={styles.My_Km}>Km: {car.Km}</h1>
        </div>
      ))}
    </div>
  );
};

export default CarDetails;
