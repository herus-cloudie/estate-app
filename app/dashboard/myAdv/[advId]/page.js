import AddPage from "@/component/template/addPage";
import { Advertisement } from "@/utils/model";

export default async function Edit({params}){
    let {advId} = params;
    let adv = await Advertisement.findOne({_id : advId})

    return <AddPage adv={JSON.parse(JSON.stringify(adv))}/>
}