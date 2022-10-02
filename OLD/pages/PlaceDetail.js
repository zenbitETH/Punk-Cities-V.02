import Layout from "../components/Layout";
import {useState} from "react";
import VerifyModal from "../components/VerifyModal";
import UpgradeModal from "../components/UpgradeModal";
import Image from "next/image"
import tridi from "../assets/3dAssets/11-Library.png"

export default function PlaceDetail() {
  const [isVeDialogOpen, setIsVeDialogOpen] = useState(false);
  const closeVeDialogModal = () => setIsVeDialogOpen(false);
  const openVeDialogModal = () => setIsVeDialogOpen(true);

  const [isUpDialogOpen, setIsUpDialogOpen] = useState(false);
  const closeUpDialogModal = () => setIsUpDialogOpen(false);
  const openUpDialogModal = () => setIsUpDialogOpen(true);

  return (
    <Layout className="text-center content-center">
        <div className="PlaceDetail gap-5">
            <div className="xl:col-span-5 col-span-10 row-span-6">
              <div className="grid grid-cols-4 -mt-5">
                <div className="col-span-3 text-2xl text-left py-10 rounded-lg ">{/*`${ipfsResponse?.name*/} Tipo de lugar / Nombre del lugar {/*ipfsResponse?.attributes[0].value}`*/}</div>
                <div className="xl:text-4xl text-2xl bg-glass-500 rounded-br-lg rounded-tl-lg py-10 my-5">Nivel 1 {/*placeLevel ?? "NA"*/}</div>
              </div>
              {/*<img src={`${ipfsResponse?.image3D}`} className="PLDetail" />*/}
              <div><Image src={tridi} height={650} width={650} alt="Punk Cities" /></div>
              <div className="grid grid-cols-2 text-xl gap-5">
                {/*<a className="GMaps" href={`${ipfsResponse?.address}`}> */}
                <a className="bg-glass-200 col-span-2 xl:col-span-1 rounded-lg py-3" href={""}>
                  IRL Location{" "}
                </a>
                <div className="bg-glass-200 col-span-2 xl:col-span-1 rounded-lg py-3">Registered by</div> {/*displayAddress ?? "NA"*/}
              </div>
            </div>
    
            <div className="xl:col-span-5 col-span-10 row-span-2 grid xl:grid-cols-3 grid-cols-4
            bg-gradient-to-t from-glass-900 to-glass-500 p-5 rounded-lg xl:gap-5 gap-10">
              <div className="xl:col-span-2 col-span-4 text-5xl">
                {" "}
                {/*solarpunkVerificationsPerPlaceId*/}/25👍🏽<div className="text-lg">verificaciones para subir de nivel</div>
              </div>
              {/*
                <div className="col-span-2">
                {" "}
                {cyberpunkVerificationsPerPlaceId}/25 Cyberpunk <div className="AssetRg">to upgrade</div>
              </div>
              */}
              {/*<a className="VerBt" href={`../VerifyPlace/${placeId}`}> */}
              
                <button className="DetailBT hover:bg-solar-100 hover:text-night-100 xl:col-span-1 col-span-4" onClick={openVeDialogModal}>👍🏽 Verificar</button>
                <VerifyModal
                  isOpen={isVeDialogOpen}
                  handleClose={closeVeDialogModal}
                  title="Take fotos to verify this place "
                >
                </VerifyModal>
              
              <div className="xl:col-span-1 col-span-2 text-5xl">
                {/*energy ?? "0"*/}/2⚡<div className="text-lg">Chispas para subir de nivel</div>
              </div>
              <div className="xl:col-span-1 col-span-2 text-5xl">
                {/*chip ?? "0"*/}/2💽<div className="text-lg">Chips para subir de nivel</div>
              </div>
              {/*<a className="VerBt" href={`../UpgradePlace/${placeId}`}> */}
              
              <button className="DetailBT xl:col-span-1 col-span-4" onClick={openUpDialogModal}>⚡Depositar 💽</button>
                <UpgradeModal
                  isOpen={isUpDialogOpen}
                  handleClose={closeUpDialogModal}
                  title="Deposit energy or chips to upgrade this place "
                >
                </UpgradeModal>

            </div>
            
            <div className="xl:col-span-5 xl:row-span-4 col-span-10 text-center bg-gradient-to-t from-glass-900 to-glass-600 p-5 rounded-lg">
              <div className="VeriTl">Verifiers</div>
                {/*verifiers.map((verifier, i) => (
                  <React.Fragment>
                    <div>{formatAddress(verifier)}</div>
                    <div>{questTypePerVerifiers[i] ?? ""}</div>
                    <div></div>
                    <div></div>
                    <div>0⚡</div>
                  </React.Fragment>
                ))*/}
            </div>
        </div>
    </Layout>
  )
}