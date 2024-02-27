
import DashboardPage from "@/component/template/dashboardPage"
import ConnectDataBase from "@/utils/connectDataBase"
import { UserEstate } from "@/utils/model"
import Session from "@/utils/session"

export default async function Dashboard(){
    await ConnectDataBase()
    let user = await UserEstate.findOne({email : (await Session())?.user.email})
    return <DashboardPage user={user}/>
    
}
