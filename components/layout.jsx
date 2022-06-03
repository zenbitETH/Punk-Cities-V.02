import Link from 'next/link';

const Layout = ({ children, home }) => {
  
  return (
    <div class="relative py-10 h-screen overflow-y-auto">
      <nav class="top-hud">
      <div class="hud-wallet">
        <div>
            Conectar
        </div>
      </div>
      <div class="hud1">
        <span> ⛲ </span>
        <span class="mx-2">20</span>
      </div>
      <Link href="/NewGame">
        <a class="hud2">
          <span> ⚡ </span>
          <span class="mx-2">20</span>
        </a>
      </Link>
      <Link href="/MyPlaces">
        <a class="hud3">
          <span> 💽 </span>
          <span class="mx-2">12</span>
        </a>
      </Link>
    </nav>

    <main>{children}</main>

    <nav className="left-hud">
        <Link href="/NewPlace">
          <a className="huda"><div className='bigIcon'>⛲</div> Nuevo Lugar</a>
        </Link>

        <Link href="/MyPlaces">
          <a className="hudb"><div className='bigIcon'>🌇 </div>Mi ciudad</a>
        </Link>
    </nav>
    <nav className='right-hud'>
        <Link href="/AllPlaces">
          <a className="hudc"><div className='bigIcon'>🌎</div> Explorar</a>
        </Link>
    
        <Link href={``}>
          <a className="hudd"><div className='bigIcon'>🌞</div> Ciudad DAO</a>
        </Link>
    </nav>         
   
    </div>
  );
};

export default Layout;