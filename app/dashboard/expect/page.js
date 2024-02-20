import DashboardCard from "@/component/module/dashboardCard"
import ExpectPage from "@/component/template/expextPage"
import { Advertisement, UserEstate } from "@/utils/model"
import Session from "@/utils/session"
import { redirect } from "next/navigation"


export default async function Expect(){
    let user = await UserEstate.findOne({email : (await Session()).user?.email})
    if(user.role != "ADMIN") redirect('/')
    let expectToConfirm = await Advertisement.find({publish : false})

    return <ExpectPage expectToConfirm={expectToConfirm}/>
}