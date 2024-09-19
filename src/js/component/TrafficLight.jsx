import React, {useState,} from "react";


const TrafficLight = () => {//Aquí se define el componente TrafficLight como una función.
    const[light, setLight] = useState ('red'); //Dentro de este componente, el hook useState se utiliza para crear una variable de estado llamada light, que comienza con el valor 'red'. Esta variable almacenará el color actual de la luz del semáforo.
    const [lights, setLights]   =  useState(['red', 'yellow', 'green']); 
    
    
    // Función para alternar entre los colores del semáforo
    const handleButtonClick = () => {
      setLight (prevLight => {
         const currentIndex = lights.indexOf(prevLight);
         const nextIndex = (currentIndex + 1) % lights.length;
         return lights[nextIndex];
      })
    };
    // funcion para agregar el color purpura
  const handleAddPurple = () => {
   if (lights.includes('purple')) {
     // Si púrpura ya está, lo removemos
     setLights(lights.filter(color => color !== 'purple'));
     if (light === 'purple') {
       setLight('red'); // Si púrpura era la luz activa, volvemos a rojo
     }
   } else {
     // Si púrpura no está, lo agregamos
     setLights([...lights, 'purple']);
   }
 };
    // manejador de clic para seleccionar luces manuelmente
    const handleLightClick = (color) => {
      setLight(color);
    };



      return (
         <div className="traffic-light-container">
         <div className="traffic-light">
            {lights.map((color) =>(
               <div key={color}
               className={`light ${color} ${light === color ? 'active' : ''}`} 
               onClick={() => handleLightClick(color)} // Asigna el manejador de clic 

               ></div>
            ))}
         </div>
         <button onClick={handleButtonClick} className="toggle-button">
           Cambiar Color
         </button>
         <button onClick={handleAddPurple} className="toggle-button">
           {lights.includes('purple') ? 'Quitar Purpura' : 'Agregar Purpura'}
         </button>
         </div>
      );    
};
export default TrafficLight;