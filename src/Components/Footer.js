import React from 'react'

//Comps
import BigLogo from './footer-sub-comp/BIgLogo'
import Contact from './footer-sub-comp/Contact'

const Footer = ()=>{
    return(
        <div className='flex flex-col gap-[128px]'>
            <BigLogo />
            <Contact />
        </div>
    )
}
export default Footer