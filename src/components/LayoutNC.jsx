import Image from "next/image"
import PC from "../assets/punkcities.png"
import ConnectWallet from '@/components/ConnectWallet'
import Link from "next/link"

export default function LayoutNC() {
    
  return (
    <div className="relative">
      <div className="w-3/4 mx-auto">
        <Image src={PC}/>
      </div>
      <div className="grid grid-cols-3 mt-10">
        <div/>
        <ConnectWallet/>
        <div/>
      </div>

      
        <Link href="https://zenbit.mx">
          <div className="zenbit">zenbit.eth /<span> 2022</span></div>
      </Link>
				
			
    </div>
  )
}