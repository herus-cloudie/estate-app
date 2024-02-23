import DashboardCard from "@/component/module/dashboardCard"
import ExpectPage from "@/component/template/expextPage"
import ConnectDataBase from "@/utils/connectDataBase"
import { Advertisement, UserEstate } from "@/utils/model"
import Session from "@/utils/session"
import { redirect } from "next/navigation"


export default async function Expect(){
    await ConnectDataBase()
    let user = await UserEstate.findOne({email : (await Session()).user?.email})
    if(user.role != "ADMIN") redirect('/')
    console.log(user.role)
    let expectToConfirm = await Advertisement.find({publish : false})

    return <ExpectPage expectToConfirm={expectToConfirm}/>
}