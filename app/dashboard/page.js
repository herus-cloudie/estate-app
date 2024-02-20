
import DashboardPage from "@/component/template/dashboardPage"
import { UserEstate } from "@/utils/model"
import Session from "@/utils/session"

export default async function Dashboard(){
    let user = await UserEstate.findOne({email : (await Session())?.user.email})
    return <DashboardPage CreatedAt={user.createdAt}/>
}
