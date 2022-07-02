import Link from "next/link";
import Account from "./Account/Account";
import { useMoralis } from "react-moralis";
import { useContext, useEffect,} from "react";
import { Menu, Transition } from "@headlessui/react";
import { useQueryPunkCities } from "../hooks/useQueryPunkCities";
import SwitchNetwork from "./SwitchNetwork";

const PUNKCITIES_ADDRESS = "0x20B991Dcf13f0854c142B4A5F217cBCD640e6409";

const MyLink = props => {
  const { href, children, ...rest } = props;

  return (
    <div className="text-center m-2 p-2">
      <Link href={href}>
        <a {...rest}>{children}</a>
      </Link>
    </div>
  );
};

const Layout = ({ children, home }) => {
  const { account, isAuthenticated } = useMoralis();

  // query energy
  const {
    data: energy,
    error: energyError,
    loading: energyLoading,
  } = useQueryPunkCities(
    PUNKCITIES_ADDRESS,
    "energyPerAddress",
    account,
    // testing with "0xecb4c1245665e8a1f43826355aab0dd6bf336e05",
  );

  // query energy
  const {
    data: chip,
    error: chipError,
    loading: chipLoading,
  } = useQueryPunkCities(
    PUNKCITIES_ADDRESS,
    "chipPerAddress",
    account,
    // testing with "0xc6AEadbb68a277cDB5137700650755669F1cC475",
  );

  energyError && console.error("fail to fetch energy ", energyError);
  chipError && console.error("fail to fetch chip ", chipError);

  return (
    <div>
      <nav className="top-hud">
        {!account && (
          <span className="hud0">
            <SwitchNetwork />
          </span>
        )}
        <Account />
        {/*account && isAuthenticated && <Authenticate />*/}
        
        {account && isAuthenticated /*&& isLensReady*/ && (
          <Menu>
          {account && (
          <div className="hud3">
            <span> 🏢 </span>
            <span className="mx-2">{chip?.toString() ?? "N/A"}</span>
          </div>
        )}
          {account && (
          <div className="hud3">
            <span> ⚡ </span>
            <span className="mx-2">{energy?.toString() ?? "N/A"}</span>
          </div>
        )}
        {account && (
          <div className="hud4">
            <span> 💽 </span>
            <span className="mx-2">{chip?.toString() ?? "N/A"}</span>
          </div>
        )}
        
          </Menu>
        )}

        {/* Lens Api interactions hidden for pilot testing
        account && isAuthenticated && isLensReady && (
          <Link href="/dashboard">
            <a className="hud4">Solarpunk DAO</a>
          </Link>
        )      
          <Link href={`/profiles/${defaultHandle}/timeline`}>
            <a className="hud4">Timeline</a>
          </Link>
        )*/}
        
        
      </nav>
      <main>{children}</main>
      <nav className="bottom-hud">
        {/* This needs an before state to not show until the user is joined to the DAO*/}      
      {account && isAuthenticated /*&& isLensReady*/ && (
          <Link href={``}>
            <a className="huda">⛲ New place</a>
          </Link>
        )}

        {/* This needs an after state to show that user is already joined to DAO*/}      
        {account && isAuthenticated /*&& isLensReady*/ && (
          <Link href={``}>
            <a className="hudb">🌇 My City Places</a>
          </Link>
        )}
         {/* This needs an after state to show that user is already joined to DAO*/}      
         {account && isAuthenticated /*&& isLensReady*/ && (
          <Link href={``}>
            <a className="hudb">🌎 All places</a>
          </Link>
        )}
         {/* This needs an after state to show that user is already joined to DAO*/}      
         {account && isAuthenticated /*&& isLensReady*/ && (
          <Link href={``}>
            <a className="hudd">🌞 Solarpunk DAO</a>
          </Link>
        )}
        

        
      </nav>
    </div>
  );
};

export default Layout;