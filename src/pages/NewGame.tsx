

export default function NewGame() {
    
  return (
      <div className="card0 px-5 max-w-3xl">
        <div className="col-span-12 row-span-5 text-center rounded-3xl p-5">
          <div className="text-4xl mb-10">🎮 New Game</div>
          <div className="text-left text-xl">
            <label className="">I am</label>
            <input type="text" placeholder="https://twitter.com/YourAccount" className="formInput mt-2 mb-5"/>
            <label className="">From:</label>
            <select type="text" /*onChange={handleHometownChange}*/ placeholder="The city where you are going to play" className="bg-white mb-5 pl-5 text-black w-full rounded-dd px-6 py-3 mt-2 ">
              <option disabled selected>
                The city where you i going to play...
              </option>
              <option>Bogotá</option>
              <option>CDMX</option>
              <option>Querétaro</option>
              <option>Global Citizen</option>
            </select>
          </div>
         
        </div>
        <div className="col-span-12 text-center mb-10">
          {/*onClick={() => tx(writeContracts.YourContract.registerUser(name, hometown, country))} */}
          <div className="formBT">Start game</div>
        </div>
      
    </div>
  
  )
}