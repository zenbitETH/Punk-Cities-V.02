import Layout from "../components/Layout";

export default function NewGame() {
    
  return (
    <Layout class="text-center content-center">
      <div class="NewGame">
        <div class="NewIcon">🎮</div>
        <div class="text-night-100 text-4xl">Nuevo jugador</div>
        <div class="inputs">
          <label>Elige un nombre o apodo</label>
          <input type="text" placeholder="https://twitter.com/YourAccount" />
          <label>Elige tu ciudad inicial</label>
          <input type="text"  placeholder="Mexico City" />        
          <label>Elige tu país inicial</label>
          <input type="text md:text-xl" placeholder="Mexico" />
        </div>
      
      <div
        class="CreateAcc"
        type="submit"
      >
        {/*onClick={() => tx(writeContracts.YourContract.registerUser(name, hometown, country))} */}
        Crear perfil
      </div>
    </div>
  </Layout>
  )
}