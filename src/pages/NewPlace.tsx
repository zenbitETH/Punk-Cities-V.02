
export default function NewPlace() {
    
  return (
    <div className="card0 px-5 max-w-3xl ">
      <div className="col-span-12 row-span-5 text-center rounded-3xl p-5">
        <div className="text-white text-4xl mb-10">⛲ New Place</div>
          <div className="text-left text-xl">
            <label className="text-white">Type of place:</label>
            <select id="TypeOfPlace" placeholder="Park"  className="bg-white mb-5 pl-5 text-black w-full rounded-dd px-6 py-3 mt-2 ">
              <option disabled selected>The place is a...</option>
              <option>⛲ Public Park</option>
              <option>🛹 Skate Park</option>
              <option>⚽ Soccer Field</option>
              <option>🏀 Basket Court</option>
              <option>😄 Playground</option>
              <option>🏋️‍♀️ Outdoor Gym</option>
              <option>🎭 Art Gallery / Museum</option>
              <option>🏟️ Stadium</option>
              <option>🏖️ Beach</option>
              <option>♻️ Recycling Deposit</option>
              <option>🚏 Bus stop</option>
              <option>📚 Library</option>
              <option>🎓 University</option>
              <option>⛪ Church or Temple</option>
              <option>🗳️ Government Office</option>
              <option>🌳 Tree</option>
            </select>
            <label className="text-white">Place Name</label>
            <input type="text" placeholder="Its name is..."  className="formInput mt-2 mb-5"/>
            <label className="text-white">Address</label>
            <input type="text" placeholder="Paste the Address from google maps"   className="formInput mt-2 mb-5"/>
            <label className="text-white">Tags</label>
            <input type="text" placeholder="Camping, Climbing, Nature"  className="formInput mt-2 mb-5"/>
            <label className="text-white"> Choose your quest in this place:</label>
            <select id="TypeOfPlace" placeholder="Park" className="formInput mt-2 mb-5 text-night-100">
              <option disabled selected>
              ⚡Energy or 💽 Chips 
              </option>
              <option>I want Energy! (+1⚡)</option>
              <option>I want Chips! (+1💽)</option>
            </select>
          </div>
      </div>
      <div className="col-span-12 text-center mb-10">
        {/*onClick={() => tx(writeContracts.YourContract.registerUser(name, hometown, country))} */}
        <div className="formBT">Mint Place NFT</div>
      </div>
    </div>
  )
}

