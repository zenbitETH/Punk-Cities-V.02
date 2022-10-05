
export default function NewPlace() {
    
  return (
    <div className="card0 px-5 max-w-3xl ">
      <div className="col-span-12 row-span-5 text-center rounded-3xl p-5">
        <div className="text-white text-4xl mb-10">⛲ Nuevo lugar</div>
          <div className="text-left text-xl">
            <label className="text-white">¿Qué tipo de lugar quieres registrar?</label>
            <select id="TypeOfPlace" placeholder="Park"  className="bg-white mb-5 pl-5 text-black w-full rounded-dd px-6 py-3 mt-2 ">
              <option disabled selected>El lugar que quiero regisrtrar es...</option>
              <option>⛲ Parque Público</option>
              <option>🛹 Skate Park</option>
              <option>⚽ Cancha de Fut</option>
              <option>🏀 Cancha de Basket</option>
              <option>😄 Juegos infantiles</option>
              <option>🏋️‍♀️ Gym al aire libre</option>
              <option>🎭 Galeria de Arte / Museo</option>
              <option>🏟️ Estadio</option>
              <option>🏖️ Playa</option>
              <option>♻️ Punto de Reciclaje</option>
              <option>🚏 Parada de autobus</option>
              <option>📚 Biblioteca</option>
              <option>🎓 Universidad</option>
              <option>⛪ Iglesia o Templo</option>
              <option>🗳️ Oficina de gobierno</option>
            </select>
            <label className="text-white">¿Cúal es el nombre del lugar?</label>
            <input type="text" placeholder="Conocemos este lugar como..."  className="formInput mt-2 mb-5"/>
            <label className="text-white">¿Cual es la dirección del lugar?</label>
            <input type="text" placeholder="Pega la dirección de goolge maps"   className="formInput mt-2 mb-5"/>
            <label className="text-white">Elige etiqutas de las actividades en este lugar</label>
            <input type="text" placeholder="Ciclismo, Clases de arte, Familia"  className="formInput mt-2 mb-5"/>
            <label className="text-white"> ¿Qué recompensa prefieres?</label>
            <select id="TypeOfPlace" placeholder="Park" className="formInput mt-2 mb-5 text-night-100">
              <option disabled selected>
              ⚡ Energia Solarpunk o 💽 Chips Cyberpunk
              </option>
              <option>¡Quiero energia! (+1⚡)</option>
              <option>¡Quiero chips! (+1💽)</option>
            </select>
          </div>
      </div>
      <div className="col-span-12 text-center mb-10">
        {/*onClick={() => tx(writeContracts.YourContract.registerUser(name, hometown, country))} */}
        <div className="formBT">Registrar lugar</div>
      </div>
    </div>
  )
}

