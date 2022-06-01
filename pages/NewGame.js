import Layout from "../components/Layout";

export default function NewGame() {
    
  return (
    <Layout class="text-center content-center">
      <div class="NewGame">
        <div class="NewPlayer">🎮</div>
        <div class="text-night-100 text-4xl">Nuevo jugador</div>
        <div class="inputs">
          <label class="text-left mt-3 md:text-2xl">Elige un nombre o apodo</label>
          <input type="text" class="rounded-lg py-5 px-5 md:text-xl" placeholder="https://twitter.com/YourAccount" />
          <label class="text-left mt-3 md:text-2xl">Elige tu ciudad inicial</label>
          <input type="text" class="rounded-lg py-5 px-5 md:text-xl" placeholder="Mexico City" />        
          <label class="text-left mt-3 md:text-2xl">Elige tu país inicial</label>
          <input class="rounded-lg py-5 px-5" type="text md:text-xl" placeholder="Mexico" />
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