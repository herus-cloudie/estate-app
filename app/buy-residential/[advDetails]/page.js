import DetailsPage from "@/component/template/DetailePage";
import { Advertisement } from "@/utils/model";

export default async function AdvDetails({params}){
    let {advDetails} = params;
    let selectedAdv = await Advertisement.findOne({_id : advDetails})
    return <DetailsPage data={selectedAdv}/>
}