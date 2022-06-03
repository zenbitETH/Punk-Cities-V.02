import Layout from "../components/Layout";
import Image from "next/image"
import tridi from "../assets/3dAssets/11-Library.png"

export default function MyPlaces() {
    
  return (
    <Layout class="text-center content-center">
      <div class="grid xl:grid-cols-2 xl:mx-40 xl:gap-0 mx-5 gap-5 mt-10">
        <div class="MyPlaces">
          <div class="Quest">
            <div class="text-7xl pb-3">⚡</div>Mis lugares Solarpunk
          </div>
          <div class="CityPL">
            <div class="PLheader">
              <div class="col-span-4">Verified Park</div>
              <div class="col-span-2"> Lv0</div>
            </div>
            <div><Image src={tridi} height={150} width={150} alt="Punk Cities" /></div>
            <div class="PLfooter">
              <div class="">3/5👍</div>
              <div class="">1/2⚡</div>
              <div class="">2/2💽</div>
            </div>
          </div>
          {/*
          {solarPunkPerPlaceId.map(place => (
              <a class="CityPL" href={`./PlaceDetail/${place}`}>
              <div class="PLheader">
                <div class="col-span-4">{uriIPFS[place].name}</div>
                <div class="col-span-2">Lv {levelPerPlaceId[place]}</div>
              </div>
              <div><Image src={uriIPFS[place].image3D} height={200} width={200}/></div
              <div class="PLfooter">
                <div class="">{verificationPerPlaceId[place]}/5👍</div>
                <div class="">{energyPerPlaceId[place]}/2⚡</div>
                <div class="">{chipPerPlaceId[place]}/2💽</div>
              </div>
            </a>
          ))}
          */}
        </div>
        <div class="MyPlaces2">
          <div class="Quest">
            <div class="text-7xl pb-3">💽</div>Mis lugares cyberpunk
          </div>
          <div class="CityPL">
            <div class="PLheader">
              <div class="col-span-4">Verified Park</div>
              <div class="col-span-2"> Lv0</div>
            </div>
            <div><Image src={tridi} height={150} width={150} alt="Punk Cities"/></div>
            <div class="PLfooter">
              <div class="">3/5👍</div>
              <div class="">1/2⚡</div>
              <div class="">2/2💽</div>
            </div>
          </div>
          {/* 
          {cyberPunkPerPlaceId.map(place => (
            <a class="CityPL" href={`./PlaceDetail/${place}`}>
              <div class="PLheader">
                <div class="col-span-4">{uriIPFS[place].name}</div>
                <div class="col-span-2">Lv {levelPerPlaceId[place]}</div>
              </div>
              <img src={uriIPFS[place].image3D} class="PLimage" />
              <div class="PLfooter">
                <div class="">{verificationPerPlaceId[place]}/5👍</div>
                <div class="">{energyPerPlaceId[place]}/2⚡</div>
                <div class="">{chipPerPlaceId[place]}/2💽</div>
              </div>
            </a>
          ))}
          */}
        </div>
      </div>  
    </Layout>
  )
}