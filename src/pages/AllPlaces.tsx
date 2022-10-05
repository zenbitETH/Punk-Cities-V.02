import Image from "next/image"
import tridi from "../assets/3dAssets/11-Library.png"
import Link from 'next/link'

export default function AllPlaces() {
  

  return (
    <div className="card0 w-full text-center content-center">
        <div className="AllPlaces col-span-12 mx-5 gap-5">
              <div className="Quest">
                <div className="text-7xl pb-3">🌎</div>All places
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
  )
}