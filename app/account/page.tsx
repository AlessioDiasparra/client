"use client";
import { SignupForm } from "./components/SignupForm";
import useSubTypeModal from "@/hooks/useSubTypeModal";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

const Account = () => {
  const SubTypeModal = useSubTypeModal();
  const handleClick = () => {
  
    /* if (!user) {
      return authModal.onOpen();
    } */
    // TODO: verifica abbonamento subscription
    /* if (!subscription) {
      return subscribeModal.onOpen();
    } */

    return SubTypeModal.onOpen();
  }
  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-between px-5 pt-4'>
        <div className=' inline-flex items-center gap-y-2'>
          <TbPlaylist className='text-neutral-400' size={26} />
          <p className='text-neutral-400 font-medium text-md'>La tua libreria</p>
        </div>
        <AiOutlinePlus
          size={20}
          className='text-neutral-400 cursor-pointer hover:text-white transition'
          onClick={handleClick}
        />
      </div>
      <SignupForm />
    </div>
  
  )
}

export default Account;