import Layout from "../components/layout";
import Image from "next/image"
import tridi from "../assets/3dAssets/11-Library.png"
import Link from 'next/link'

export default function AllPlaces() {
  

  return (
    <Layout class="text-center content-center">
        <div class="grid xl:mx-40 xl:gap-0 mx-5 gap-5 mt-10">
            <div class="AllPlaces">
              <div class="Quest">
                <div class="text-7xl pb-3">🌎</div>Todos los lugares
              </div>
              <Link href={"./PlaceDetail"}>
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
              </Link>
              {/*
              {placeIdDetails.map((place, index) => (
                  <a class="CityPL" href={`./PlaceDetail/${index}`}>
                  <div class="PLheader">
                    <div class="col-span-4">{uriIPFS[index].name}</div>
                    <div class="col-span-2">{`Lv${place[5]}`}</div>
                  </div>
                  <div><Image src={uriIPFS[index].image3D} height={150} width={150}/></div
                  <div class="PLfooter">
                    <div class="PLtitle">{`${place[2]}/2👍`}</div>
                    <div class="PLlevel">{`${place[3]}/2⚡`}</div>
                    <div class="PLlevel">{`${place[4]}/2💽`}</div>
                  </div>
                </a>
              ))}
              */}
            </div>
        </div>
    </Layout>
  )
}