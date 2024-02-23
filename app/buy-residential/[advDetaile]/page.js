import DetailsPage from "@/component/template/DetailePage";
import { Advertisement } from "@/utils/model";

export default async function AdvDetails({params}){
    let {advDetaile} = params;
    let selectedAdv = await Advertisement.findOne({_id : advDetaile})
    return <DetailsPage data={selectedAdv}/>
}