import Layout from "../components/Layout";

export default function NewGame() {
    
  return (
    <Layout>
      <div class="NewGame">
        <div class="NewPlayer">🎮</div>
        <div class="text-white text-4xl">Nuevo jugador</div>
        <div class="inputs">
          <label class="text-left mt-3">Elige un nombre o apodo</label>
          <input type="text" class="rounded-lg py-5 px-5" placeholder="https://twitter.com/YourAccount" />
          <label class="text-left mt-3">Elige tu ciudad inicial</label>
          <input type="text" class="rounded-lg py-5 px-5" placeholder="Mexico City" />        
          <label class="text-left mt-3">Elige tu país inicial</label>
          <input class="rounded-lg py-5 px-5" type="text" placeholder="Mexico" />
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