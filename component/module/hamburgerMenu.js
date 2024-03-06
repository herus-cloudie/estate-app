'use client'

import { useState } from "react"
import { BiMenu } from "react-icons/bi"
import { BsXLg } from "react-icons/bs"

export default function HamburgerMenu({session}){
    let [menuStatus , setMenuStatus] = useState(false)
    return(
        <>
            <div className="menu-img" onClick={() => setMenuStatus(true)}><BiMenu /></div>
            <div className={`menu-close ${menuStatus ? 'menu-open' : null}`}>
                <div onClick={() => setMenuStatus(false)} className='menu-close-img'><BsXLg/></div>
                <div className="option-group">
                    <a href="/" className="option-text">صفحه اصلی</a>
                    <a href="/dashboard/" className="option-text">پنل کاربری</a>
                </div>
                <div style={{flexDirection: 'column', alignItems : 'center'}} className="option-group">
                    <a  href="/buy-residential" className="option-text">آگهی ها</a>
                    
                </div>
                <div className="option-group">
                    <a href="/dashboard/add" className="option-text">ثبت آگهی</a>
                    <a href="/dashboard/myAdv" className="option-text">آگهی های من</a> 
                </div>
                {
                    session == 'ADMIN' ?  <a href="/dashboard/expect" style={{padding:' 40px 0px;'}} onClick={() => setMenuStatus(false)} className="option-text"> آگهی در انتظار تایید</a> : null
                }

                <div className="option-group">
                    <a href="/dashboard/notification" className="option-text">اعلان ها</a> 
                    <a href="/#info" onClick={() => setMenuStatus(false)} className="option-text">ارتباط با ما</a>
                </div>
            </div>
        </>
    )
}