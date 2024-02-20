'use client'
import { signOut } from "next-auth/react";

export default function LogOut(){
    return( 
        <button onClick={() => signOut()} className={`button-adv`}>
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className={`front text`}>خروج از حساب
            </span>
        </button>
    )
}