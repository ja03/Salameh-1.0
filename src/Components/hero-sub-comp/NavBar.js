import React, {useState} from 'react'
import logo from '../../assets/imgs/LOGO.svg'
import burgerIcon from '../../assets/imgs/burger-icon.svg'

// Components
import SideMenu from './SideMenu'


const NavBar = ({links})=>{

    
    const [show, setShow] = useState(false)
    const handelToggle = ()=>{
        setShow((show)=> !show)
    }
    return(
        <div className='container'>
            <div className='flex items-center justify-between  w-full py-1  gap-4 border-b-2 pb-4'>

                <div className='flex-1 '>
                    <img src={logo} alt="salameh logo" className='w-[200px]'/>
                </div>


                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-4 text-5xl'>
                        {links.map((link, index) => (
                                <li key={index} className='font-bold text-base transition-colors hover:text-accent'><a href=""> {link} </a></li>
                        ))}
                        </ul> 
                    </div>    
                    <div className='block md:hidden'>
                        <button className='z-50 m-2 p-1  text-lg ' onClick={handelToggle}>
                            <img src={burgerIcon} alt="burger-icon" />
                        </button>
                        <SideMenu links={links} show={show} onToggle={handelToggle}/>    
                    </div>
                
            </div>
        </div>
    )
}
export default NavBar