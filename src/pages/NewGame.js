import Layout from "../components/Layout";

export default function NewGame() {
    
  return (
    <Layout className="text-center content-center">
      <div className="NewGame">
        <div className="NewIcon">🎮</div>
        <div className="text-night-100 text-4xl">Nuevo jugador</div>
        <div className="inputs">
          <label>Elige un nombre o apodo</label>
          <input type="text" placeholder="https://twitter.com/YourAccount" />
          <label>Elige tu ciudad inicial</label>
          <input type="text"  placeholder="Mexico City" />        
          <label>Elige tu país inicial</label>
          <input type="text md:text-xl" placeholder="Mexico" />
        </div>
      
      <div
        className="CreateAcc"
        type="submit"
      >
        {/*onClick={() => tx(writeContracts.YourContract.registerUser(name, hometown, country))} */}
        Crear perfil
      </div>
    </div>
  </Layout>
  )
}