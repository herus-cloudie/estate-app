import MyAdvPage from "@/component/template/myAdvPage";
import { Advertisement } from "@/utils/model";
import Session from "@/utils/session";

export default async function MyAdv(){
    let allAdv = await Advertisement.find({})
    let Email = (await Session()).user.email;
    let myAdv = allAdv.filter(item => item.email == Email)
    
    return <MyAdvPage myAdv={JSON.parse(JSON.stringify(myAdv))}/>
}