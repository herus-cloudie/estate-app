'use client'

import { usePathname } from "next/navigation"
import TitleHeader from "./titleHeader"

export default function DashboardDynamicHead(){
    let pathName = usePathname()
        return(
        <TitleHeader title={
        pathName == '/dashboard' ? 'پنل کاربری'
        : pathName == '/dashboard/add' ? 'افزودن آگهی'
        : pathName == '/dashboard/myAdv' ? 'آگهی های من'
        : pathName == '/dashboard/notification' ?  'اعلان ها'
        : pathName == '/dashboard/expect' ?  'پنل ادمین'
        : null} img={
            pathName == '/dashboard' ? 'dashboard'
            : pathName == '/dashboard/add' ? 'free'
            : pathName == '/dashboard/myAdv' ? 'megaphone'
            : pathName == '/dashboard/notification' ?  'notification'
            : pathName == '/dashboard/expect' ?  'admin'
            : null}/>
    )
}