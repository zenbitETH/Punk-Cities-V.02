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
          <div className="h-screen m-24 rounded-lg px-4 text-center text-white align-middle">
            <div class="VerifyPl">
                <div class="NewIcon">👍</div>
                <div class="text-white text-4xl">Subir de nivel</div>

                {/* <label class="file">
                  Take and upload a photo to IPFS
                  <input type="file" />
                  <div class="UploadBt"> Upload to IPFS</div>
                </label> */}
                <div class="CreateAcc" type="submit">
                  Subir a Nivel 2
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

export default UpdateModal;