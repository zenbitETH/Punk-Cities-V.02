import Layout from "../components/Layout";

export default function NewPlace() {
    
  return (
    <Layout class="text-center content-center">
      <div class="NewPlace">
        <div class="NewIcon">⛲</div>
        <div class="text-white text-4xl">Nuevo lugar</div>
          <div class="inputs">
            <label class="text-white" for="TypeOfPlace">¿Qué tipo de lugar quieres registrar?</label>
            <select id="TypeOfPlace" type="text" placeholder="Park" >
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
            <label class="text-white">¿Cúal es el nombre del lugar?</label>
            <input type="text" placeholder="Conocemos este lugar como..." />
            <label class="text-white">¿Cual es la dirección del lugar?</label>
            <input type="text" placeholder="Pega la dirección de goolge maps"  />
            <label class="text-white">Elige etiqutas de las actividades en este lugar</label>
            <input type="text" placeholder="Ciclismo, Clases de arte, Familia" />
            <label class="text-white"> ¿Qué recompensa prefieres?</label>
            <select id="TypeOfPlace" type="text" placeholder="Park">
              <option disabled selected>
              ⚡ Energia Solarpunk o 💽 Chips Cyberpunk
              </option>
              <option>¡Quiero energia! (+1⚡)</option>
              <option>¡Quiero chips! (+1💽)</option>
            </select>
          </div>
          <div class="CreateAcc hover:bg-solar-100" type="submit" >
            Registrar lugar
          </div>
      </div>
    </Layout>
  )
}

