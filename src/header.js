import React from 'react';
import logo from './img/al.png'

function Header(){       
    return(
        <header>
          <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
              <div class="flex flex-wrap justify-between items-center mx-auto w-full">
                  <div class=" flex">
                      <a href="#" class="flex items-center">
                          <img src={logo} alt="Logo" class="mr-4 sm:h-9"/>
                          <span class="self-center text-2xl font-semibold whitespace-nowrap">SIT AL HUSNA</span>
                      </a>
                  </div>
                  <div class="flex mr-8">
                      <ul class="flex flex-row mt-4 space-x-9">
                          <li>
                              <a href="#" class="text-gray-500 hover:text-purple-600 pb-15 underline">Home</a>
                          </li>
                          <li>
                              <a href="#" class="text-gray-500 hover:text-purple-600">Profil</a>
                          </li>
                          <li>
                              <a href="#" class="text-gray-500 hover:text-purple-600">Informasi</a>
                          </li>
                          <li>
                              <a href="#" class="text-gray-500 hover:text-purple-600">Galeri</a>
                          </li>
                          <li>
                              <a href="#" class="text-gray-500 hover:text-purple-600">Kontak</a>
                          </li>
                          <li>
                              <a href="#" class="text-gray-500 hover:text-purple-600">PPDB</a>
                          </li>
                          <li>
                              <a href="#" class="text-gray-500 hover:text-purple-600">Link Pendaftaran</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
      </header>
    )
}

export default Header;
