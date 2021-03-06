import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const UpdateModal = ({ isOpen, handleClose }) => {
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
            <div class="UpgradePl">
                <div class="NewIcon">🌟</div>
                <div class="text-white text-3xl">Subir de nivel</div>
                
                    <div class="grid grid-cols-2 gap-5">
                      <div class="mt-5">
                        <div class="xl:text-5xl mt-5">{/*energyPerPlaceId*/}1/2⚡<div class="text-lg">Chispas para subir de nivel</div></div>
                        <div class="text-center mt-5">
                          {/*<input type="number" placeholder="0" onChange={handleEnergyChange}></input> */}
                          + 
                          <input class="text-night-100 w-24" type="number" placeholder="0"></input>
                          ⚡
                        </div>
                        {/*<div className="EnergyBt" onClick={depositEnergy}> */}
                        <div className="UpdateBT ">
                          Depositar ⚡
                        </div>
                      </div>
                      <div class="mt-5">
                        <div class="xl:text-5xl mt-5">{/*chipPerPlaceId*/}1/2💽<div class="text-lg">Chips para subir de nivel</div></div>
                        <div class="text-center mt-5">
                          {/*<input type="number" placeholder="0" onChange={handleChipChange}></input> */}
                          + 
                          <input class="text-night-100 w-24" type="number" placeholder="0"></input>
                          💽
                        </div>
                        {/*<div className="ChipsBt" onClick={depositChip}> */}
                        <div className="UpdateBT ">
                        Depositar 💽
                        </div>
                      </div>
                    </div>

                    {/*<div class="LevelUnblock" type="submit" onClick={upgradePlace}> */}
                    <div class="UpdateBT" type="submit">
                    Subir a Nivel 2
                    </div>
                
                {/* <label class="file">
                  Take and upload a photo to IPFS
                  <input type="file" />
                  <div class="UploadBt"> Upload to IPFS</div>
                </label> */}
            </div>
          </div>
        </Dialog.Overlay>
          
        </Transition.Child>

        {/* Content */}
  
      </Dialog>
    </Transition>
  );
};

export default UpdateModal;