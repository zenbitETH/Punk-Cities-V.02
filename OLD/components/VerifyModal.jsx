import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const VerifyModal = ({ isOpen, handleClose }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={handleClose}>
        {/* Use the overlay to style a dim backdrop for your dialog */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
        <Dialog.Overlay className="fixed inset-0 bg-black/70 dark:bg-black/80">      
            <div className="h-screen xl:m-24 rounded-lg xl:px-4 text-center text-white align-middle">
            <div className="VerifyPl">
                <div className="NewIcon">👍🏽</div>
                <div className="text-3xl">Verificar lugar</div>
              <div className="text-left text-xl">
                <div className="mt-3">Tipo de lugar: <span className="verifyText"> test{/*ipfsResponse?.attributes[0].value*/}</span></div>
                <div className="mt-3">Nombre: <span className="verifyText"> test{/*ipfsResponse?.name*/}</span></div>  
                <div className="mt-3">Dirección: <span className="verifyText"> test{/*ipfsResponse?.address*/}</span></div>
                <div className="mt-3">Ciudad: <span className="verifyText"> test</span></div>
                <div className="mt-3">Etiquetas: <span className="verifyText"> test{/*ipfsResponse?.tag*/}</span></div>
                <div className="mt-3">Registrado por: <span className="verifyText"> test{/*register*/}</span></div>
                <div className="text-center text-base mt-5">Sube una foto del lugar<input type="file"/></div>
                <div className="text-center">
                    Elige tu recompensa por verificar:
                  <select className="text-night-100 text-base" id="TypeOfPlace" type="text" placeholder="Park">
                    <option disabled selected>
                      ¿Energia Solarpunk o Chips Cyberpunk?
                    </option>
                    <option>¡Quiero Chispas! (+1⚡)</option>
                    <option>¡Quiero Chips! (+1💽)</option>
                  </select>
                </div>
                
              </div>
          {/* <label className="file">
            Take and upload a photo to IPFS
            <input type="file" />
            <div className="UploadBt"> Upload to IPFS</div>
          </label> */}
          <div className="CreateAcc" type="submit">
            Verificar lugar
          </div>
      </div>
            </div>
        </Dialog.Overlay>
          
        </Transition.Child>

        {/* Content */}
  
      </Dialog>
    </Transition>
  );
};

export default VerifyModal;