import React from 'react';
import profile from '../../img/profile.jpeg';
import {BiSearch , BiBell , BiChevronDown } from 'react-icons/bi';

export default function Dashboard () {

    return ( 
            <div className='flex flex-row pl-6 pt-12 h-24 items-center'>
                <div className='text-2xl pr-8 font-bold'>
                    Dashboard
                </div> 
                <form>   
                    <div class='relative'>
                        <div class="absolute right-0 flex items-center pr-4 inset-y-0 pointer">
                            <div class="w-6 h-6 text-gray-300 pt-1 cursor-pointer"><BiSearch Bi-9px/></div>
                        </div>
                        <input type="text" class="border border-gray-300 text-gray-900 text-sm rounded-3xl block pr-12 pl-6 py-3 w-80" placeholder="Cari di Dashboard"></input>
                    </div>
                </form>
                    <div className='mr-3 ml-12'>
                            <div class="block border border-gray-300 px-4 py-2 rounded-3xl cursor-pointer flex flex-row relative">
                                <div className='pr-2'><BiBell/></div>
                                <div class='text-sm'>Notifikasi</div>
                                    <div class='absolute top-0 right-0 bg-red-500 rounded-full p-1.5'></div>
                            </div>
                    </div>
                    <button class="block border border-gray-300 px-4 py-2 rounded-3xl cursor-pointer text-sm flex" type='button'>
                                Hari Ini
                                <div class='pl-2'><BiChevronDown/></div>
                    </button>
                    <div className="flex flex-row ml-16">
                    <img src={profile} alt="logo" className="w-14 h-12 rounded-2xl"></img>
                        <div className="text-left pt-1.5 pl-3">
                            <div className="text-sm">Muhammad Rafael</div>
                            <div className="text-[0.7rem] text-gray-400">Admin</div>
                        </div>
            </div>
                </div>

)}