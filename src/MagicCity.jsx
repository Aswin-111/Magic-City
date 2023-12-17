import MagicCityLogo from "./assets/magiccitylogo.png";
import Stroller from "./assets/Hero-stoller.png";
import KidDress from "./assets/kids-dress.png";
import KidAcc from "./assets/kids.care.png";
import KidToys from "./assets/kids-toys.png";

import DrivableOne from "./assets/motocross.png";
import DrivableTwo from "./assets/drivable.png";

import Dolls from "./assets/dolls.png";

import ToyDrone from "./assets/drone.png";

import ToyCar from "./assets/rccar.png";




import Cosmetics from "./assets/cosmetics.png";

import CareProducts from "./assets/babycare.png";

import Gifts from "./assets/toysset.png";




import PartyItems from './assets/party.png'
import Curve from './assets/lvl.png'
import ToyGuns from './assets/toyswater.png'
import PampersLogo from './assets/pamp.png'


import PopeesLogo from './assets/popeeslogo.png'
import SebaLogo from './assets/sebamed.png'
import PigeonLogo from './assets/pigeon.png'
import MemeLogo from './assets/memelogo.jpg'
import SprogLogo from './assets/sproglogo.png'












import ChiccoLogo from './assets/chicco.png'

import Instagram from './assets/instagram.png'
import Youtube from './assets/youtubelogo.png'
// import Youtube from './assets/instagram.png'

// uxI6LM6#H5AK
// 68.178.164.66
// magicity
export default function MagicCity() {
  return (
    <div className="magicity max-w-100">
      <div className="hero w-full h-[100vh] bg-[#FDEFE6] py-10 px-5 sm:py-16 sm:px-16  ">
        <nav className="w-full  h-28 px-5 md:px-10 lg:px-16 bg-white rounded-2xl flex items-center justify-between shadow-xl">
          <div className="logo flex items-center ">
            <img src={MagicCityLogo} alt="magic-city-logo" className="h-10 sm:h-14 lg:h-16" />

            <span className="text-sm font-bold  sm:text-lg lg:text-xl">Magic City</span>
          </div>

          <ul className="hidden md:flex md:justify-around md:text-lg lg:text-xl ">
            <li className="px-2 py-1  lg:px-3 bg-violet-900  text-white rounded-xl">
              <a href="#">Home</a>
            </li>
            <li className="px-2 py-1  lg:px-3 rounded-lg ">
              <a href="#">Products</a>
            </li>
            <li className="px-2 py-1  lg:px-3 rounded-lg ">
              <a href="#">Login</a>
            </li>
            <li className="px-2 py-1  lg:px-3 rounded-lg ">
              <a href="#">Sign up</a>
            </li>
          </ul>
        </nav>
        <div className="hero-content my-28 sm:my-16 flex flex-col items-center justify-center md:flex md:flex-row md:my-0 lg:my-5">
          <div className="hero-text flex flex-col items-center">
            <h1 className="text-[25px] my-2 text-[#640087] font-bold sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
              Welcome to Magic City
            </h1>
            <p className="text-base sm:text-xl lg:text-xl xl:text-2xl">
              The world of fantasy for your little ones
            </p>
          </div>
          <div className="hero-img h-[65vh] flex flex-col justify-between items-center">
            <div className=" hidden sm:hidden md:block lg:h-56 lg:w-[20px] xl:w-[40px]"></div>
            <img
              src={Stroller}
              alt="hero-stroller-image"
              className="h-[30vh] sm:h-[45vh]  lg:h-[55vh] xl:h-[60vh]"
            />
          </div>
        </div>
      </div>

      <div className="kids-items-cards my-20 w-full px-20 flex flex-col md:flex-row md:justify-between lg:my-36">
        <div className="card-grp flex flex-col items-center ">
          <div className="card-one h-80 w-64 bg-[#30F2B8] flex items-center justify-center  rounded-xl md:w-[25vw] md:h-[50vh] xl:h-[60vh]">
            <img src={KidDress} alt="" className="h-72 " />
          </div>

          <span className="my-5 font-semibold text-xl text-gray-600 ">
            Baby dresses
          </span>
        </div>
        <div className="card-grp flex flex-col items-center">
          <div className="card-one h-80 w-64 bg-[#59C3FF] flex items-center justify-center rounded-xl  md:w-[25vw] md:h-[50vh] xl:h-[60vh]">
            <img src={KidAcc} alt="" className="h-52 md:h-44" />
          </div>
          <span className="my-5 font-semibold text-xl text-gray-600">
            Baby Accessories
          </span>
        </div>

        <div className="card-grp flex flex-col items-center ">
          <div className="card-one h-80 w-64 bg-[#FF8282] flex items-center justify-center rounded-xl md:h-[50vh]  md:w-[25vw] xl:h-[60vh] ">
            <img src={KidToys} alt="" className="h-52 md:h-44" />
          </div>
          <span className="my-5 font-semibold text-xl text-gray-600">
            Baby Toys
          </span>
        </div>
      </div>

      <div className="content flex flex-col items-center">
        <div className="text-grp flex flex-col items-center my-5">
        <span className="text-2xl  font-bold xl:text-3xl">What Do We Sell</span>
        <div className="line w-24 h-1 bg-black my-2 rounded-xl"></div>
        </div>
        <div className="main px-5">
          <div className="main-card flex flex-col justify-center items-center sm:my-10 lg:my-16">



            <div className="img w-full h-[45vh] flex items-center justify-center bg-[#60A9FF]  my-5  rounded-xl lg:h-[60vh] sm:w-[80vw] md:h-[55vh] xl:h-[80vh]">
              <img src={Dolls} alt="" className="h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] xl:h-[70vh]" />
            </div>
            <span className="text-xl font-semibold text-gray-600">
              Varieties Of Dolls 
            </span>
          </div>
          <div className="main-drivable flex flex-col justify-center items-center sm:my-10 md:flex-row md:justify-between">
            <div className="main-sub flex flex-col items-center sm:my-7 lg:my-16">


              <div className="img w-full h-[45vh] flex items-center justify-center md:w-[35vw] bg-[#60A9FF] my-5 rounded-xl sm:w-[80vw]   md:h-[55vh] xl:h-[70vh]">
                <img src={DrivableOne} alt="" className="h-[40vh] sm:h-[45vh] md:h-[45vh] lg:h-[50vh]" />
              </div>
              <span className="text-xl font-semibold text-gray-600">
                40cc Motor Bike
              </span>
            </div>
            <div className="main-sub flex flex-col items-center  sm:my-10 lg:my-16">

              <div className="img w-full h-[45vh] flex items-center justify-center bg-[#60A9FF]  my-5 rounded-xl sm:w-[80vw] md:h-[55vh] md:w-[35vw]  xl:h-[70vh]">
                <img src={DrivableTwo} alt="" className="h-[40vh] sm:h-[45vh] md:h-[45vh] lg:h-[50vh]" />
              </div>
              <span className="text-xl font-semibold text-gray-600">
                Drivable Cars
              </span>
            </div>
          </div>

          <div className="main-card flex flex-col justify-center items-center sm:my-10 lg:my-16">
            <div className="img w-full h-[45vh] bg-[#60A9FF] flex items-center justify-center  my-5 rounded-xl sm:w-[80vw] md:h-[55vh] lg:h-[60vh] xl:h-[70vh]">
            

              <img src={ToyCar} alt="" className="h-[20vh] sm:h-[30vh] md:h-[35vh] lg:h-[45vh] xl:h-[50vh]" />

             
              <img src={ToyDrone} alt="" className="h-[17vh] sm:h-[25vh] lg:h-[45vh] md:h-[35vh] xl:h-[45vh]" />
            </div>
            <span className="text-xl font-semibold text-gray-600">
              Remote Controlled Cars
            </span>
          </div>

          <div className="main-card flex flex-col justify-center items-center sm:my-10 lg:my-16">
            <div className="img w-full h-[45vh] bg-[#60A9FF] flex items-center justify-center  my-5 rounded-xl sm:w-[80vw] md:h-[55vh] lg:h-[60vh] xl:h-[70vh]">
              <img src={PartyItems} alt="" className="h-[35vh] sm:h-[45vh] md:h-[50vh] lg:h-[60vh]" />
            
            </div>
            <span className="text-xl font-semibold text-gray-600">
              Party Items
            </span>
          </div>


          <div className="main-card flex flex-col justify-center items-center sm:my-10 lg:my-16">
            <div className="img w-full h-[45vh] bg-[#60A9FF] flex items-center justify-center  my-5 rounded-xl sm:w-[80vw] md:h-[55vh] lg:h-[60vh] xl:h-[70vh]">
             
              <img src={CareProducts} alt="" className="h-[35vh] sm:h-[45vh] lg:h-[60vh] md:h-[50vh] xl:h-[65vh]" />
              
            </div>
            <span className="text-xl font-semibold text-gray-600">
             Baby Care Products
            </span>
          </div>


          <div className="main-card flex flex-col justify-center items-center sm:my-10 lg:my-16">
            <div className="img w-full h-[45vh] bg-[#60A9FF] flex items-center justify-center  my-5 rounded-xl sm:w-[80vw] md:h-[55vh] lg:h-[60vh] xl:h-[70vh]">
              <img src={ToyGuns} alt="" className="h-[35vh] sm:h-[45vh] md:[50vh] lg:h-[60vh] xl:h-[65vh]" />
            </div>
            <span className="text-xl font-semibold text-gray-600">
              Varieties of Guns
            </span>
          </div>



          <div className="main-card flex flex-col justify-center items-center sm:my-10 lg:my-16">
            <div className="img w-full h-[45vh] bg-[#60A9FF] flex items-center justify-center  my-5 rounded-xl sm:w-[80vw] md:h-[55vh] lg:h-[60vh] xl:h-[70vh]">
            
           
           



            <img src={Cosmetics} alt="" className="h-[35vh] sm:h-[45vh] md:[50vh] lg:h-[60vh] xl:h-[70vh]" />


            </div>
            <span className="text-xl font-semibold text-gray-600">
              Cosmetics
            </span>
          </div>



          <div className="main-card flex flex-col justify-center items-center sm:my-10 lg:my-16">
            <div className="img w-full h-[45vh] bg-[#60A9FF] flex items-center justify-center  my-5 rounded-xl sm:w-[80vw] md:h-[55vh] lg:h-[60vh] xl:h-[70vh]">
              <img src={Gifts} alt="" className="h-[35vh] lg:h-[60vh] sm:h-[45vh] md:h-[50vh] xl:h-[70vh]" />
             
            </div>
            <span className="text-xl font-semibold text-gray-600">
              Gift Sets
            </span>
          <span className="text-2xl font-bold mt-20">And Much More .....</span>

          </div>
        </div>
      </div>

      <div className="partners my-20">
        <div className="partner-text flex justify-center text-2xl font-semibold">
            <span className="lg:text-3xl">Our Partners</span>
        </div>
        <div className="logo ">

            <div className="first-set flex flex-col items-center justify-between md:flex-row md:justify-around">
            <img src={PopeesLogo} alt="" className="h-12 mt-10 md:h-16"/>
            <img src={SprogLogo} alt="" className="h-12 mt-10 md:h-14 md:mt-10"/>

           





         
            <img src={PigeonLogo} alt="" className="h-12 mt-10"  />
            </div>
            <div className="second-set flex flex-col items-center md:flex-row md:justify-around">
            <img src={ChiccoLogo} alt="" className="h-20 mt-10"/>
            <img src={MemeLogo} alt="" className="h-20 mt-10"/>
            <img src={PampersLogo} alt="" className="h-20 mt-10"/>
            </div>
            <div className="third-set flex flex-col items-center">
            <img src={Curve} alt="" className="h-20 mt-10"/>
</div>
        </div>
      </div>

      <div className="footer flex flex-col items-center bg-[#FDEFE6] mt-20 lg:flex-row lg:justify-between lg:px-5">
        
        
        <div className="footer-logo flex flex-col items-center justify-center mt-20 lg:mt-0">

            <img src={MagicCityLogo} className="h-16 sm:h-16 sm:my-2 md:h-16 lg:h-20" />
            
            <span className="magic-city text-xl font-bold md:text-xl lg:text-[1rem]">Magic City</span>
        </div>
        <div className="wearehere flex flex-col items-center my-5 w-full lg:w-[30%]">
            <span className="text-xl font-bold my-5">We Are Here</span>

            

        

        <span className="">Tharamoodu JN, Manancherry,Alappuzha</span>
        <a href="https://www.google.com/maps/dir//Mannanchery,+Kerala/@9.5677273,76.3094679,14z/data=!4m18!1m8!3m7!1s0x3b0886c433337865:0xd09ecb0d5ef3e1f9!2sMannanchery,+Kerala!3b1!8m2!3d9.5675238!4d76.3463624!16s%2Fm%2F0523rn3!4m8!1m0!1m5!1m1!1s0x3b0886c433337865:0xd09ecb0d5ef3e1f9!2m2!1d76.3463624!2d9.5675238!3e3?entry=ttu" className="w-[60%] h-10 bg-white font-semibold flex justify-center items-center rounded-xl my-5" target="_blank">Find Us On Map</a>
        </div>

        <div className="getintouch flex flex-col items-center  w-full lg:w-[30%] lg:justify-between lg:my-5">
            <span className="text-xl font-bold my-5">Get In Touch</span>
<div className="h-6 my-1">Lorem ipsum dolor sit amet consectetur </div>
            

        

        <span className="w-[60%] h-10 bg-white font-semibold flex justify-center items-center rounded-xl my-5">+917907227922</span>
        </div>
        <div className="socials flex flex-col items-center  w-[100%]  lg:w-[20%]  ">
            <span className="text-xl font-bold  my-7">Socials</span>
            <div className="h-16">Lorem ipsum dolor sit </div>
          

          



          <div className="w-[16vw] flex  justify-evenly">
          <a href=""><img src={Instagram} alt="" className="h-7 " /></a>
          <a href=""><img src={Youtube} alt=""  className="h-7 "/></a>
          <a href=""><img src={Youtube} alt=""  className="h-7 "/></a>
          </div>
        </div>
      </div>
    </div>
  );
}
