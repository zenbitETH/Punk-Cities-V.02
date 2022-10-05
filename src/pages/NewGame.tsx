

export default function NewGame() {
    
  return (
      <div className="card0 px-5 max-w-3xl">
        <div className="col-span-12 row-span-5 text-center rounded-3xl p-5">
          <div className="text-4xl mb-10">🎮 Nuevo jugador</div>
          <div className="text-left text-xl">
            <label className="">Elige un nombre o apodo</label>
            <input type="text" placeholder="https://twitter.com/YourAccount" className="formInput mt-2 mb-5"/>
            <label className="">Elige tu ciudad inicial</label>
            <input type="text"  placeholder="Mexico City" className="formInput mt-2 mb-5"/>
          </div>
         
        </div>
        <div className="col-span-12 text-center mb-10">
          {/*onClick={() => tx(writeContracts.YourContract.registerUser(name, hometown, country))} */}
          <div className="formBT">Crear perfil</div>
        </div>
      
    </div>
  
  )
}