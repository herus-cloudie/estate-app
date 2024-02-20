'use client'

import {FaUserAlt} from 'react-icons/fa'

export default function NavOption({session}){
    return(
        <>
            
            <div className="header-option">
                <div className="option-text-group" >
                    <a href="/buy-residential" className="option-text">آگهی ها</a>
                    <a href="/dashboard/add" className="option-text">ثبت آگهی من</a>
                    <a href="#info" className="option-text">ارتباط با ما</a>
                    
                </div>
             
             {
             !session ?
                <a href="/signin">
                    <button className="login-btn">
                        <span>ورود / ثبت نام</span>
                        <img className="login-img" src="/icon/enter.png"/>
                    </button>
                </a>
                :<a href="/dashboard" className="profile"><FaUserAlt /></a>
            }
             
           </div>
        

        </>
        
    )

        }