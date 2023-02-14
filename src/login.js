import React from 'react';
import gradasi from './img/gradasi.svg';
import people from './img/people.svg';
import profile from './img/profile.jpeg';

export default function Login(){
    return(
        <div class="flex">
            <div class="buttom-7">
                <img class="z-0 absolute" src={people}></img>
                <img class="z-1 relative" src={gradasi}></img>
            </div>
            <div class="">
                <div class="">
                    <p class="text-[#107BDE] leading-12 text-4xl">
                        Selamat Datang
                    </p>
                    <p class="text-[#8B9AAC] text-sm">
                        Ada banyak peminjam yang menunggumu
                    </p>
                    <div class="mt-6">
                        <input placeholder="username" class="border border-#DDDDDD rounded-lg py-2 w-full focus:ring-#DDDDDD">
                        </input>
                    </div>
                    <div class="mt-4">
                        <input placeholder="password" id="password" class="border border-#DDDDDD rounded-lg py-2 w-full">
                         
                        </input>
                    </div>
                    <div class="mt-6">
                        <button type="submit" class="bg-blue-500 rounded-lg py-2 w-full text-white">
                            Log In
                        </button>
                    </div>
                </div>
            </div>
        </div>
)}