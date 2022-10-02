import Layout from "../components/Layout";
import Image from "next/image"
import tridi from "../assets/3dAssets/11-Library.png"

export default function MyPlaces() {
    
  return (
    <Layout className="text-center content-center">
      <div className="grid xl:grid-cols-2 xl:mx-40 xl:gap-0 mx-5 gap-5 mt-10">
        <div className="MyPlaces">
          <div className="Quest">
            <div className="text-7xl pb-3">⚡</div>Mis lugares Solarpunk
          </div>
          <div className="CityPL">
            <div className="PLheader">
              <div className="col-span-4">Verified Park</div>
              <div className="col-span-2"> Lv0</div>
            </div>
            <div><Image src={tridi} height={150} width={150} alt="Punk Cities" /></div>
            <div className="PLfooter">
              <div className="">3/5👍</div>
              <div className="">1/2⚡</div>
              <div className="">2/2💽</div>
            </div>
          </div>
          {/*
          {solarPunkPerPlaceId.map(place => (
              <a className="CityPL" href={`./PlaceDetail/${place}`}>
              <div className="PLheader">
                <div className="col-span-4">{uriIPFS[place].name}</div>
                <div className="col-span-2">Lv {levelPerPlaceId[place]}</div>
              </div>
              <div><Image src={uriIPFS[place].image3D} height={200} width={200}/></div
              <div className="PLfooter">
                <div className="">{verificationPerPlaceId[place]}/5👍</div>
                <div className="">{energyPerPlaceId[place]}/2⚡</div>
                <div className="">{chipPerPlaceId[place]}/2💽</div>
              </div>
            </a>
          ))}
          */}
        </div>
        <div className="MyPlaces2">
          <div className="Quest">
            <div className="text-7xl pb-3">💽</div>Mis lugares cyberpunk
          </div>
          <div className="CityPL">
            <div className="PLheader">
              <div className="col-span-4">Verified Park</div>
              <div className="col-span-2"> Lv0</div>
            </div>
            <div><Image src={tridi} height={150} width={150} alt="Punk Cities"/></div>
            <div className="PLfooter">
              <div className="">3/5👍</div>
              <div className="">1/2⚡</div>
              <div className="">2/2💽</div>
            </div>
          </div>
          {/* 
          {cyberPunkPerPlaceId.map(place => (
            <a className="CityPL" href={`./PlaceDetail/${place}`}>
              <div className="PLheader">
                <div className="col-span-4">{uriIPFS[place].name}</div>
                <div className="col-span-2">Lv {levelPerPlaceId[place]}</div>
              </div>
              <img src={uriIPFS[place].image3D} className="PLimage" />
              <div className="PLfooter">
                <div className="">{verificationPerPlaceId[place]}/5👍</div>
                <div className="">{energyPerPlaceId[place]}/2⚡</div>
                <div className="">{chipPerPlaceId[place]}/2💽</div>
              </div>
            </a>
          ))}
          */}
        </div>
      </div>  
    </Layout>
  )
}