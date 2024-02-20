import BuyResidentialPage from "@/component/template/buyResidentialPage";
import { Advertisement } from "@/utils/model";

export default async function buyResidential(){
    let allAdv = await Advertisement.find({})
    let PublishedAdv = allAdv.filter(adv => adv.publish == true)
    return <BuyResidentialPage PublishedAdv={JSON.parse(JSON.stringify(PublishedAdv))} />
}