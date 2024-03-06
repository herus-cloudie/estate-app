
 
import ConnectDataBase from "@/utils/connectDataBase"
import { UserEstate } from "@/utils/model"
import Session from "@/utils/session"
import { NextResponse } from "next/server"

export async function PATCH(req) {
    try {
        await ConnectDataBase()
    } catch (err) {
        return  NextResponse.json({status : 'faild' , message : 'problem at connecting to Data-base'} , {status : 500})
    } 
    let adv = await req.json()
    let session = await Session()
    let user = await UserEstate.findOne({email : session.user.email})
    let {savedAdv} = user;
    
    let checkAdv = savedAdv.find(item => item._id == adv._id)
    if(checkAdv) {
        savedAdv.pop(adv)
        await user.save()
        return NextResponse.json({data : false} , {status : 200})
        
    }
    else {
        savedAdv.push(adv)
        await user.save()
        return NextResponse.json({data : true} , {status : 200})
    }

    
}
export async function GET(req) {
    try {
        await ConnectDataBase()
    } catch (err) {
        return  NextResponse.json({status : 'faild' , message : 'problem at connecting to Data-base'} , {status : 500})
    }
    let session = await Session()
    let user = await UserEstate.findOne({email : session.user.email})
    let {savedAdv} = user;

    return NextResponse.json({data : savedAdv} , {status : 200})
}

 
 