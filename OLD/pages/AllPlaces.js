import Layout from "../components/layout";
import Image from "next/image"
import tridi from "../assets/3dAssets/11-Library.png"
import Link from 'next/link'

export default function AllPlaces() {
  

  return (
    <Layout className="text-center content-center">
        <div className="grid xl:mx-40 xl:gap-0 mx-5 gap-5 mt-10">
            <div className="AllPlaces">
              <div className="Quest">
                <div className="text-7xl pb-3">🌎</div>Todos los lugares
              </div>
              <Link href={"./PlaceDetail"}>
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
              </Link>
              {/*
              {placeIdDetails.map((place, index) => (
                  <a className="CityPL" href={`./PlaceDetail/${index}`}>
                  <div className="PLheader">
                    <div className="col-span-4">{uriIPFS[index].name}</div>
                    <div className="col-span-2">{`Lv${place[5]}`}</div>
                  </div>
                  <div><Image src={uriIPFS[index].image3D} height={150} width={150}/></div
                  <div className="PLfooter">
                    <div className="PLtitle">{`${place[2]}/2👍`}</div>
                    <div className="PLlevel">{`${place[3]}/2⚡`}</div>
                    <div className="PLlevel">{`${place[4]}/2💽`}</div>
                  </div>
                </a>
              ))}
              */}
            </div>
        </div>
    </Layout>
  )
}