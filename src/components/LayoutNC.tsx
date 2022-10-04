import Image from "next/image"
import PC from "../assets/punkcities.png"
import ConnectWallet from '@/components/ConnectWallet'
import Link from "next/link"

export default function LayoutNC() {
    
  return (
    /*<div className="relative">
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
    </div>*/
    <div className="">
      <div className="left-hud">
        <Link href={``}>
          <div className="hud1">Create</div>
        </Link>
    
        <Link href={``}>
          <a className="hud2">Collect</a>
        </Link>    
       
        <Link href={``}>
          <a className="hud3">Ride</a>
        </Link>
      </div>
      <div className="top-hud">  
        <div className="hud4">
          <span> 🏢 </span>
          <span className="mx-2">2{/*chip?.toString() ?? "N/A"*/}</span>
        </div>
        <div className="hud5">
          <span> ⚡ </span>
          <span className="mx-2">2{/*energy?.toString() ?? "N/A"*/}</span>
        </div>
        <div className="hud6">
          <span> 💽 </span>
          <span className="mx-2">2{/*chip?.toString() ?? "N/A"*/}</span>
        </div>
      
      </div>
      <div className="hudWallet">
          <ConnectWallet/>
        </div>
    </div>
  )
}