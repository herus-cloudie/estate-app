

import AsideText from "@/component/module/asideText"
import DashboardDynamicHead from "@/component/module/dashboardDynamicHead"
import HamburgerMenu from "@/component/module/hamburgerMenu"
import ConnectDataBase from "@/utils/connectDataBase"
import { UserEstate } from "@/utils/model"

import Session from "@/utils/session"
import { redirect } from "next/navigation"

export default async function DashboardLayout({children}){
    await ConnectDataBase()
    let session = await Session()
    if(!session) redirect('/signup')
    let user = await UserEstate.findOne({email : session.user?.email})
    return(
        <div className="bg-dashboard-color">
            <header className="header">
                <DashboardDynamicHead />
                <div className="header-option">
                    <div className="option-text-group" >
                        <a href="/" className="option-text">صفحه اصلی</a>
                        <a href="/buy-residential" className="option-text">آگهی ها</a>
                    </div>
                    <HamburgerMenu session={user.role}/>
                </div>
                
            </header>
            <aside style={user.role != 'ADMIN' ? {height : '460px'} : null}>

                {
                    user.role == 'ADMIN' ? <a style={{color : '#ffeaa3'}} href="/dashboard/expect"> در انتظار تایید</a>
                    : null
                }
                <AsideText />
            </aside>
            <div>
                {children}
            </div>
        </div>
    )
}