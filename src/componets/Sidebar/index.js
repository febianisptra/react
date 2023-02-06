import React from "react";
import logo from "../../img/logo.png";
import { BiCategory , BiTime , BiBook , BiUserPlus} from 'react-icons/bi';   
// import '../../fontawesome';

export default function Sidebar () {
    const Menu = [
        { name: "Dashboard", icon: <BiCategory/>},
        { name: "History", icon: <BiTime />},
        { name: "Daftar Barang", icon: <BiBook />},
        { name: "Tambah User", icon: <BiUserPlus/>}
    ];

    return (
        <div className="h-screen border-r border-gray-100 px-8 bg-gray-100 ">
            <div className="flex flex-row pt-8 pb-28 items-center">
                    <img src={logo} alt="logo" className="w-18 h-14 pr-3"></img>
                        <div className="text-left">
                            <div className="text-lg text-blue-600 font-semibold">Inventaris</div>
                            <div className="text-[0.7rem] text-gray-400">SMK Wikrama bogor</div>
                        </div>
            </div>
                <div className="text-left pb-28">
                    <ul className="text-gray-500">
                        {
                            Menu.map((val, index) => {
                                return (
                                    <li key={index} className="pb-6 hover:text-blue-400 cursor-pointer text-base flex flex-row">
                                        <div class="pt-1 pr-3">{val.icon}</div>
                                        <div>{val.name}</div>
                                    </li>
                                );
                            })
                            }
                    </ul>
                </div>
        </div>
    )
}