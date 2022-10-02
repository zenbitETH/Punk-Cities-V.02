import Layout from "../components/Layout";
import Image from "next/image"
import PC from "../assets/punkcities.png"

export default function Home() {
  return (
    <Layout home={true}>
    <div className="flex min-h-screen flex-col items-center justify-center">
    <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
      <div className="grid xl:grid-cols-2 mt-36 px-10">
        <div><Image src={PC} height={800} width={800} alt="Punk Cities"/></div>
        <div className="justify-items-center text-center my-auto">
          <div className=" xl:text-6xl text-2xl xl:px-10 font-exo items-center items-center text-white">
            Collect public places as NFTs<span className="text-solar-100"> and play-to-earn on your city</span>
          </div>                      
        </div>

        <div className="h-screen mx-10">
          <div className="md:text-6xl text-4xl text-cyber-100 font-black hover:animate-pulse mt-20">¿Cómo jugar?</div>

          <div className="grid fhd:grid-cols-4 md:grid-cols-2 gap-3 mt-10 text-white text-xl font-exo">
            <a href={"https://punkcity.surge.sh"}>
              <div className="joinBG">
                <div>1.  Empieza un juego nuevo</div>
                <div className="homeIcon">🎮</div>
              </div>
            </a>
            <div className="joinBG cursor-default">
              <div>2. Registra lugares públicos</div>
              <div className="homeIcon">⛲</div>
            </div>
            <div className="joinBG cursor-default">
              <div>3. Verificalos con una foto</div>
              <div className="homeIcon">📸</div>
            </div>
            <div className="joinBG cursor-default">
              <div>4. Obtén recompensas y sube de nivel </div>
              <div className="homeIcon">⚡💽</div>
            </div>
          </div>
        </div>
      </div>
      
    </main>
  </div>
  </Layout>
  )
}