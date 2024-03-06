'use client'

import { usePathname } from "next/navigation"

export default function AsideText(){
    let path = usePathname()
    return (
        <>
            <a className={path == '/dashboard' ? 'aside-focus' : null}  href="/dashboard/">حساب کاربری</a>
            <a className={path == '/dashboard/myAdv' ? 'aside-focus' : null} href="/dashboard/myAdv">آگهی های من</a>
            <a className={path == '/dashboard/add' ? 'aside-focus' : null}href="/dashboard/add">ثبت آگهی</a>
            <a className={path == '/dashboard/notification' ? 'aside-focus' : null}href="/dashboard/notification">اعلان ها</a>
        </>
    )
}