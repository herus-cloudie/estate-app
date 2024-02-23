import NotificationPage from "@/component/template/notificationPage";
import ConnectDataBase from "@/utils/connectDataBase";
import { UserEstate } from "@/utils/model";
import Session from "@/utils/session";

export default async function Notification(){
    await ConnectDataBase()
    let user = await UserEstate.findOne({email : (await Session()).user.email})

    return <NotificationPage notification={user.mailBox}/>
}