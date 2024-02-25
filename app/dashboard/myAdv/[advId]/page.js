import AddPage from "@/component/template/addPage";
import { Advertisement } from "@/utils/model";
import mongoose from "mongoose";

export default async function Edit({params}){
    let {advId} = params;
    let adv = await Advertisement.findOne({_id : advId})
    console.log(mongoose.Types.ObjectId.isValid(adv))
    return <AddPage adv={JSON.parse(JSON.stringify(adv))}/>
}