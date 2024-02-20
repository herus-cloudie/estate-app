

import AsideText from "@/component/module/asideText"
import LogOut from "@/component/module/logout"
import TitleHeader from "@/component/module/titleHeader"
import { UserEstate } from "@/utils/model"

import Session from "@/utils/session"
import { redirect } from "next/navigation"

import { CgProfile } from 'react-icons/cg'

export default async function DashboardLayout({children}){
    let session = await Session()
    if(!session) redirect('/signup')
    let user = await UserEstate.findOne({email : session.user?.email})
    return(
        <div>
            <header className="header">
                <TitleHeader title={'داشبورد'} img={'dashboard'}/>
                <div className="header-option">
                    <div className="option-text-group" >
                        <a href="/" className="option-text">صفحه اصلی</a>
                        <a href="/buy-residential" className="option-text">آگهی ها</a>
                    </div>
                </div>
            </header>
            <aside>
                <div className="profile-dash">
                    <CgProfile />
                    <p>ادمین</p>
                    {user?.role == 'ADMIN' ?
                    <p>{session?.user.email}</p>
                    : null}
                    
                </div>
                <div className="column-dashboard"/>
                {
                    user?.role == 'ADMIN' ? <a style={{color : '#ffeaa3'}} href="/dashboard/expect">اگهی در انتظار تایید</a>
                    : null
                }
                <AsideText />
            </aside>
            <div className="bg-dashboard-color">
                {children}
            </div>
        </div>
    )
}