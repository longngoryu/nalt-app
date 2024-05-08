import Link from "next/link";
import Image from "next/image";
import nalt from "@public/nalt.svg";
import home from "@public/home.svg";
import statistic from "@public/statistic.svg";
import wallet from "@public/wallet.svg";
import profile from "@public/profile.svg";
import logout from "@public/logout.svg";

export default function Sidebar() {
  return (
    <div className="h-screen w-full py-14 pl-6 shadow-[0px_4px_20px_#00000040]">
      <div className="h-full flex flex-col">
        <div className="mb-8">
          <Image className="w-14" src={nalt} alt="nalt logo" />
        </div>
        <ul className="flex-1 relative flex flex-col gap-y-2">
          <li>
            <Link
              className="flex items-center h-14 gap-x-2 px-2 bg-[#F5FFFE]"
              href="/"
            >
              <Image className="w-6" src={home} alt="home icon" />
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link className="flex items-center h-14 gap-x-2 px-2" href="#">
              <Image className="w-6" src={statistic} alt="statistic icon" />
              <p>Statistic</p>
            </Link>
          </li>
          <li>
            <Link className="flex items-center h-14 gap-x-2 px-2" href="#">
              <Image className="w-6" src={wallet} alt="wallet icon" />
              <p>My wallet</p>
            </Link>
          </li>
          <li>
            <Link className="flex items-center h-14 gap-x-2 px-2" href="#">
              <Image className="w-6" src={profile} alt="profile icon" />
              <p>My profile</p>
            </Link>
          </li>

          <li className="absolute bottom-0 w-full">
            <Link className="flex items-center h-14 gap-x-2 px-2" href="#">
              <Image className="w-6" src={logout} alt="logout icon" />
              <p>Logout</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
