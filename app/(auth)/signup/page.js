
import SignUpPage from "@/component/template/signupPage"
import { redirect } from "next/navigation"
import Session from "@/utils/session"

export default async function SignUp(){
    if(await Session()) redirect('/')
    return <SignUpPage />
}