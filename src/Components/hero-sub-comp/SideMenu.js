import React from 'react'
import xIcon from '../../assets/imgs/X-icon.svg'
const SideMenu = ({links, onToggle, show})=>{


    return (
    
        <div className={`w-[30%] bg-cyan-700 h-screen fixed top-0 right-0 z-20 text-white transition-transform ease-in duration-300  
        ${show ? 'translate-x-0' :'translate-x-full'}`}>
            <button 
            className='z-50 m-2  p-1  text-lg'
            onClick={onToggle}
            >
                <img src={xIcon} alt="" />
            </button>
            

            <ul className='flex flex-col items-start gap-4 py-2'>
            {links.map((link, index) => (
                    <li key={index} className='border-b-2 border-b-cayn-500 w-full p-2 text-lg'><a href=""> {link} </a></li>
            ))}
            </ul>
        </div>    
    )
}
export default SideMenu