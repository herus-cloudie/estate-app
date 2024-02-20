
import SignInPage from "@/component/template/signinPage"
import { redirect } from "next/navigation"
import Session from "@/utils/session"

export default async function SignIn(){
    if(await Session()) redirect('/')
    return <SignInPage />
}