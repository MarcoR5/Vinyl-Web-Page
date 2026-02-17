'use client'
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  
// outline text svg
  const OutlinedText = () => {
    return(
      <svg width={'100%'} height={150} viewBox="0 0 600 150">
        <text 
        x='50%'
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize={60}
        fontWeight={'bold'}
        stroke="black"
        strokeWidth={2}
        fill="none">
             <tspan x="50%" dy="-0.6em">YOU MAKE MUSIC.</tspan>
              <tspan x="50%" dy="1.2em">WE DO THE REST.</tspan>
        </text>
      </svg>
    )
  }

  // OUTLINE TEXT SVG
  // outline text svg
  const OutlinedText2 = () => {
    return(
      <svg width={'100%'} height={150} viewBox="0 0 600 150">
        <text 
        x='0%'
        y="50%"
        dominantBaseline="middle"
       textAnchor="start"
        fontSize={60}
        fontWeight={'bold'}
        stroke="white"
        strokeWidth={2}
        fill="none">
             <tspan x="0%" dy="-0.6em">MUSIC IN</tspan>
              <tspan x="0%" dy="1.2em">YOUR HANDS</tspan>
        </text>
      </svg>
    )
  }

// dropdown logic

const [openDropdown, setOpenDropdown] = useState<number | null>(null);


const dropDownItems =[

  {
    id: 1,
    title: "Design & Customization",
    content: "Get your design suited for your needs.",
  },
  {
    id: 2,
    title: "Mastering",
    content: "We offer professional sound mixing and mastering.",
  },
  {
    id: 3,
    title: "Artwork Assistance",
    content: "Distribute your music across all major platforms.",
  },
    {
    id: 4,
    title: "Pressing",
    content: "Distribute your music across all major platforms.",
  },

    {
    id: 5,
    title: "Free Storage",
    content: "Distribute your music across all major platforms.",
  },
    {
    id: 6,
    title: "Shop",
    content: "Distribute your music across all major platforms.",
  },
    {
    id: 7,
    title: "Digital Downloads",
    content: "Distribute your music across all major platforms.",
  },
    {
    id: 8,
    title: "Retail Distribution",
    content: "Distribute your music across all major platforms.",
  },

  
    {
    id: 9,
    title: "Customer Support",
    content: "Distribute your music across all major platforms.",
  },
   {
    id: 10,
    title: "Artist Support",
    content: "Distribute your music across all major platforms.",
  },
  
]
  return (
   <>
   {/* navbar */}
   <div className="p-3 flex justify-between items-center">
    <img  src="/logo.png" alt="" width={60} />
    {/* links */}
    <div className="text-black space-x-10 w-[50%] flex justify-center">
       <Link href={""}> DISCOVER</Link>
      <Link href={""}> SEARCH</Link>
      <Link href={""}>WHY QRATES</Link>
      <Link href={""}>CART</Link>
    </div>
   
    {/* btns group */}
    <div className="pr-5">
      <button className="text-black pr-5">LOG IN</button>
      <button className="bg-black w-40 h-10 rounded-full"> MAKE A RECORD</button>
    </div>
   </div>

<div className="flex w-full h-250 ">
   {/* left side panel */}
   <div className="pl-20 space-y-5 mt-50 mr-20">
    <div className="border-2 border-black w-30 flex justify-center text-black ">
    <p className="">WHY QRATES</p>
    </div>
    <h1 className="text-7xl text-black">Your music on <br></br> vinyl. <br></br>Without the barriers</h1>
    <p className="text-black text-3xl">Full-service pressing, a global retail <br></br> network, customer support - and <br /> you keep up to 85% of profits.</p>
   </div>

   {/* right side panel */}
   <div className="mt-10 bg-[url('./images/picture1.jpg')] w-200 h-250 bg-cover bg-center rotate-3">
   </div>

  
</div>
 {/* bottom pic */}
 <div>   
  <div className="bg-[url('./images/picture2.jpg')] w-200 h-200 bg-cover bg-center -rotate-3 ml-25 -mt-50">
   </div>
   </div>

{/* middle section */}
<div className="  text-black h-50 w-full  flex justify-center items-center border-t-5 border-b-5">
    <p className="text-xl"> No matter where you&apos;re at in your career, we&apos;ve got a production model to suit you.</p>
</div>

{/* 2 panels side-by-side */}
<div className="flex">
{/* left */}
<div className="w-[50%] h-250 bg-yellow border-r-5 border-black p-5 flex items-center flex-col">
   <div className="border-4 border-black w-50 h-10 flex justify-center items-center text-black bg-white ">
    <p className="">NO RISK, NO WASTE</p>
    </div>
    <h1 className="text-6xl text-black mt-10">Crowdfunding</h1>
    <p className="text-center text-black text-2xl mt-10">Rally your fans and gather pledges. Press the exact <br /> number of records you need, without having to pay <br/> anyting upfront.</p>
    <div className="bg-[url('./images/hands.png')] w-120 h-120 bg-cover bg-center ">
        </div>
        <button className="bg-black rounded-full w-70 h-20 mt-10">LEARN MORE</button>
</div>
{/* right */}
<div className="w-[50%] h-250 bg-gray flex items-center flex-col p-5">
  <div className="border-4 border-black w-50 h-10 flex justify-center items-center text-black bg-white ">
    <p className="">GET INTO IT</p>
    </div>
    <h1 className="text-6xl text-black mt-10">Press & Sell</h1>
    <p className="text-center text-black text-2xl mt-10 mb-8">Launch your record, sooner. Take pre-orders from <br/> fans and we&apos;ll take care of the rest.</p>
    <div className="bg-[url('./images/man.png')] w-120 h-120 bg-cover bg-center ">
        </div>
        <button className="bg-black rounded-full w-70 h-20 mt-10">LEARN MORE</button>

</div>
</div>

{/* section */}
    <div className="h-50 bg-black text-white flex justify-center items-center">
    <p className="text-xl text-center">Just after straight vinyl pressing? We do that too. Records are shipped in buld wherever you need.</p>
    </div>

    {/* specification section */}
    <div className="w-full h-320 flex">
      {/* left */}
      <div className="w-[50%] h-full flex flex-col items-center pt-10">
        <div className="border-4 border-black w-50 h-10 flex justify-center items-center text-black bg-white mb-10">
          <p className="">OUR SERVICES</p>
        </div>
        <h1 className="text-outline text-5xl text-center text-black"> <OutlinedText/> </h1>
          <div className="bg-[url('./images/picture3.jpg')] w-120 h-150 bg-cover bg-center -rotate-3 mt-10 border-black border-3">
          </div>
          <p className="text-black mt-15 text-lg mb-15">We want you to be able to put all your energy into the creative side <br/> of the music. So we created a one-stop shop for everything else.</p>
          <button className="text-black border-3 w-60 h-15 rounded-full">LEARN MORE</button>
      </div>
      {/* right */}
      <div className="flex w-[50%] items-center flex-col">
        {/* box */}
        <div className="flex flex-col items-start" >
           <div className="h-25 w-150 mt-10 bg-black flex p-5">
            <h2 className="text-white text-2xl">Making Records</h2>
          </div>
        {/* button */}
        <div >
          {dropDownItems.slice(0,4).map((item) => (
            <div key={item.id} className="h-20 w-150 border-t-3 border-l-3 border-r-3 border-black p-1 pl-5">
              <button className="text-black mt-5 text-xl" onClick={() => setOpenDropdown(openDropdown === item.id ? null : item.id)} >
           {item.title}
            </button>
             {/* dropdown */}
        {openDropdown === item.id && (
          <div className="text-black">{item.content}</div>
        )}
            </div>
          ))}
        </div>
        </div>
         {/* box */}
        <div className="flex flex-col items-start" >
           <div className="h-25 w-150  bg-black flex p-5">
            <h2 className="text-white text-2xl">Storage & Distribution</h2>
          </div>
        {/* button */}
        <div >
          {dropDownItems.slice(4,8).map((item) => (
            <div key={item.id} className="h-20 w-150 border-t-3 border-l-3 border-r-3 border-black p-1 pl-5">
              <button className="text-black mt-5 text-xl" onClick={() => setOpenDropdown(openDropdown === item.id ? null : item.id)} >
          {item.title}
            </button>
             {/* dropdown */}
        {openDropdown === item.id && (
          <div className="text-black">{item.content}</div>
        )}
            </div>
          ))}
        </div>
        </div>
             {/* box */}
        <div className="flex flex-col items-start" >
           <div className="h-25 w-150  bg-black flex p-5">
            <h2 className="text-white text-2xl">Support</h2>
          </div>
        {/* button */}
        <div >
          {dropDownItems.slice(8,10).map((item) => (
            <div key={item.id} className="h-20 w-150 border-t-3 border-b-3 border-l-3 border-r-3 border-black p-1 pl-5">
              <button className="text-black mt-5 text-xl" onClick={() => setOpenDropdown(openDropdown === item.id ? null : item.id)} >
                  {item.title}

            </button>
             {/* dropdown */}
        {openDropdown === item.id && (
          <div className="text-black">{item.content}</div>
        )}
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
    {/* Brand section */}
          <div className="h-230 w-full border-t-3 border-b-3 border-black flex">
            {/* left */}
            
              <div className="bg-black w-[50%] h-full  pt-10">
                <div className="flex justify-center  ">   
                  <div className="bg-[url('./images/logos/2.png')] w-50 h-50 bg-contain bg-no-repeat   "></div>
                  <div className="bg-[url('./images/logos/3.png')] w-50 h-50 bg-contain bg-no-repeat  ml-10 mr-10 "></div>
                  <div className="bg-[url('./images/logos/4.png')] w-50 h-50 bg-contain bg-no-repeat   "></div>
                  </div>
                <div className="flex justify-center -mt-20">
                 <div className="bg-[url('./images/logos/5.png')] w-100 h-90 bg-contain bg-no-repeat   "></div>
                 <div className="bg-[url('./images/milan.png')] w-100 h-90 bg-contain bg-no-repeat "></div>
                </div>
                <div className="flex flex-col items-center mt-6 ">
                  <div className="border-4 font-bold border-black w-50 h-10 flex justify-center items-center text-black bg-white mb-5 ">
                      <p className="">RETAIL NETWORK</p>
                    </div>
                    <h2 className="text-4xl font-bold text-center mb-5">Worldwide distro, <br /> demystified.</h2>
                    <p className="text-xl text-center">Get direct access to over 150 of our retail partners across the  the <br /> globe.</p>
                </div>
                    
                <div>

                </div>
            </div>

            {/* right */}
            <div className="bg-purple w-[50%] h-full">
              <div className="bg-[url('./images/picture4.jpg')] w-200 h-100 bg-cover bg-center  ml-25 mt-20 border-2 border-black">
            </div>
            <div className="flex flex-col items-center text-black">
              <div className="border-4 font-bold border-black w-50 h-10 flex justify-center items-center text-black bg-white mb-5 mt-20">
                <p className="">CUSTOMER SUPPORT</p>
              </div>
              <h2 className="mt-1 text-4xl text-center font-bold">Here to help, <br /> whenever you need it.</h2>
              <p className="text-xl text-center mt-5 ">  Whether you&apos;re an artist in the middle of production, or a fan with <br />questions about your order, our team is here to help.</p>
            </div>
              
            </div>
          </div>
    {/* Section Community */}
    <div className="h-120 w-full text-black flex flex-col items-center ">
          <div className="border-4 font-bold border-black w-50 h-10 flex justify-center items-center text-black bg-white mb-5 mt-20">
                <p className="">COMMUNITY</p>
              </div>
              <h2 className="text-5xl font-bold mb-5">Join a growing community.</h2>
              <p className="text-xl mb-10"> We&apos;re building a home for the next generation of vinyl lovers. <br />Get in front of fans, connect with artists, labels and stores.</p>
              <button className="border-3 rounded-full p-5 font-bold">BROWSE ARISTS</button>
    </div>
    {/* collage */}
    <div className="grid grid-cols-3 grid-rows-2 ">
   
            <div className=" row-span-2 col-span-1 bg-[url('./images/1.jpg')] w-full h-180 bg-cover bg-center border-4 border-black">
            </div>
      
  
            <div className="col-span-1 row-span-1 bg-[url('./images/2.jpg')] w-full h-full bg-cover bg-center border-t-4 border-r-4   border-black">
            </div>
       
        
            <div className="col-span-1 row-span-1   bg-[url('./images/3.jpg')] w-full h-full bg-cover bg-center border-t-4 border-r-4   border-black">
            </div>
    
            <div className=" col-span-1 row-span-1  bg-[url('./images/4.jpg')] w-full h-full bg-cover bg-center border-t-4 border-r-4 border-b-4 border-black">
            </div>
      
         
            <div className="col-span-1 row-span-1 bg-[url('./images/5.jpg')] w-full h-full bg-cover bg-center   border-t-4 border-r-4 border-b-4 border-black">
        </div>
    </div>
    {/* section */}
    <div className="h-70 w-full text-black flex justify-center items-center text-2xl font-bold space-x-20 border-b-4">
          <h3>CHILLED COW IS ON QRATES</h3>
          <h3>SOL IS ON QRATES</h3>
          <h3>VUFLPECK IS ON QRATES</h3>
          <h3>CHILLHOP IS ON QRATES</h3>
    </div>
    {/* Section */}
    <div className="h-250 w-full flex text-black ">
      {/* left */}
      <div className="w-[50%] h-full bg-yellow flex flex-col justify-between">
        <div className="border-4 font-bold border-black w-50 h-10 flex justify-center items-center text-black bg-white mb-5 mt-20  ml-10 ">
                <p className="">ARTIST ON QRATES</p>
              </div>
              <div className="ml-10 ">
                <h2 className="text-4xl"> &quot;The response was overwhelming. It made <br />me wonder why I hadn&apos;t pressed any <br />records on vinyl before now. It felt like <br />something that people had been waiting for <br />for a long time.&quot;</h2>
                <h3 className="text-xl font-bold">-SOL</h3>
              </div>
          <div className="ml-10 text-2xl mb-2">
            <button className="border-1 rounded-full w-10 h-10 ">1</button>
            <button className="border-1 rounded-full w-10 h-10 ml-3">2</button>
          </div>
          
      </div>
      {/* right */}
      <div className="w-[50%]  h-full ">
         <div className="bg-[url('./images/picture5.jpg')] w-full h-full bg-cover bg-center   border-l-3">
        </div>
      </div>
    </div>
    {/* section */}
    <div className="h-300 w-full bg-black p-10 flex flex-col items-center">
      <div className="space-y-10  flex flex-col items-center">
         <div className="border-4 font-bold border-white w-50 h-10 flex justify-center items-center text-white bg-black   ">
                <p className="">ARTIST ON QRATES</p>
              </div>
              <h2 className="text-4xl text-white font-bold text-center">Make it real with <br /> Qrates Vinyl Studio</h2>
              <p className="text-xl text-center">Design the look and feel of your vinyl and use the profit calculator to <br /> immediately see how much your project will cost, and how much you&apos;ll earn.</p>
      </div>
           <div className="bg-[url('./images/vinyl2.png')] w-200 h-100 bg-cover bg-center mt-10  ">
        </div>
        <button className="bg-yellow text-black rounded-full w-60 h-20 mt-15">TRY IT NOW</button>
    </div>
    {/* section footer*/}
    <footer className="bg-black text-white pb-50">
    
      <div className="flex pl-20 pr-20 pb-50 justify-between">
           <div className="">
        <h2 className="text-3xl mb-5">FOR ARTISTS</h2>
        <div className="space-y-2">
        <p>Why Qrates?</p>
        <p>Crowdfunding</p>
        <p> Press & Sell</p>
        <p>Our Services</p>
        <p>Artist Toolkit</p>
        <p> Refferal Program</p>
        </div>

      </div>
      <div>
        <h2 className="text-3xl mb-5">FOR FANS</h2>
        <div className="space-y-2">
        <p>Discover</p>
        <p>Records</p>
        <p>Stories</p>
        <p>Lists</p>
        <p>Artists & Labels</p>
        </div>

      </div>
      <div>
        <h2 className="text-3xl mb-5">OUR COMPANY</h2>
        <div className="space-y-2">
        <p>About Qrates</p>
        <p>Careers</p>
        <p>Partners</p>
        </div>
      
      </div>
      <div>
        <h2 className="text-3xl mb-5">HELP</h2>
        <div className="space-y-2">
        <p>Support Center</p>
        <p>Contact Us</p>
        <p>Returns</p>
        <p>Shipping</p>
        </div>
      </div>
      </div>
     {/* bottom */}
     {/* left */}
    <div></div>
          <div className="flex mt-50 justify-between">
      <div className="flex">
          <div className="bg-[url('./images/q.png')] w-90 h-50 bg-cover bg-center  -ml-10 ">
        </div>
        <div className=" -ml-10 ">
          <h1 className="text-6xl text-bold" >QRATES</h1>
        <h1><OutlinedText2/> </h1>
        </div>
      </div>
            {/* right */}
           <div className="mr-20 mt-25">
          <div className="flex space-y-5 justify-end">
           <div className="bg-[url('./images/instagram.png')] w-10 h-10 bg-cover bg-center  "></div>
           <div className="bg-[url('./images/f.png')] w-10 h-10 bg-cover bg-center  "></div>
           <div className="bg-[url('./images/x.png')] w-10 h-10 bg-cover bg-center  "></div>
          </div >
          <div className="space-x-3 flex justify-end">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Legal Information</p>
          <p>TDMS Inc.</p>
          </div>
        </div>
      
     </div>
      
    
   
     
    </footer>
   </>
  );
}
