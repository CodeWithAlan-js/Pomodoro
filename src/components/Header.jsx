import { CiApple } from "react-icons/ci";
import { MdOutlineSettings } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import "animate.css";


export default function Header( props ) {
    const { onSettingClick } = props;
  return (
    <nav className="flex text-white w-screen absolute flex-wrap justify-around items-center pt-5 ">
      <div className="flex items-center flex-wrap">
        <h1 className=" text-l sm:text-4xl m-0">TimeCraft</h1>
        <CiApple className="ml-2 animate__animated animate__swing text-3xl sm:text-5xl" />
      </div>
      <ul className="list-none flex items-center space-x-4 text-l sm:text-2xl">
        <li className="flex items-center">
          <a className="flex text-white no-underline hover:opacity-50 duration-300" href="#" onClick={onSettingClick}>
            <MdOutlineSettings className="mr-2" />
            Setting
          </a>
        </li>
        <li className="flex items-center">
          <a href="#" className="flex text-white no-underline hover:opacity-50 duration-300">
            <CiLogin className="mr-2" />
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}
