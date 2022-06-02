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
      <div class="hud2">
        <span> ⚡ </span>
        <span class="mx-2">20</span>
      </div>
      <div class="hud3">
        <span> 💽 </span>
        <span class="mx-2">12</span>
      </div>
    </nav>

      <main>{children}</main>

    <nav className="left-hud">
        <Link href="/NewGame">
          <a className="huda"><div className='bigIcon'>⛲</div> Nuevo Lugar</a>
        </Link>

        <Link href="/NewPlace">
          <a className="hudb"><div className='bigIcon'>🌇 </div>Mi ciudad</a>
        </Link>
    </nav>
    <nav className='right-hud'>
        <Link href={``}>
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