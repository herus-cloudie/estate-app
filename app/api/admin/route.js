import ConnectDataBase from "@/utils/connectDataBase"
import { Advertisement, UserEstate } from "@/utils/model"
import Session from "@/utils/session"
import { NextResponse } from "next/server"

        
export async function PATCH(req) {
    /* ------------- this function is used to publishing the adv by admin and send notif to user that adv have published ----------------*/
    try {
        await ConnectDataBase()
    } catch (err) {
        return  NextResponse.json({status : 'faild' , message : 'problem at connecting to Data-base'} , {status : 500})
    }    
    let {_id , email}= await req.json()

    let user = await UserEstate.findOne({email})
    let selectedAdv = await Advertisement.findOne({_id})
    let session = await Session()
    let admin = await UserEstate.findOne({email : session.user.email})

    if(!user) return NextResponse.json({status : 'faild' , message : 'please log in at first'} , {status : 422})
    if(admin.role != 'ADMIN') return NextResponse.json({status : 'faild' , message : 'just admin are available'} , {status : 422})

    selectedAdv.publish = true;
    await selectedAdv.save()

    let date = new Date(selectedAdv.updatedAt)
    user.mailBox.push(`آگهی شما با عنوان ${selectedAdv.title} در تاریخ ${date.toLocaleDateString("fa-IR") + ' | ' + date.toLocaleTimeString("fa-IR")} با موفقیت ثبت گردید `)
    await user.save()

    return NextResponse.json({status : 'success' , message : 'the adv confirmed'} , {status : 200})
}
    
export async function DELETE(req) {
    /* ------------- this function is used to ""prevent"" publishing the adv by admin and send notif to user that adv didn't publish ----------------*/
    try {
        await ConnectDataBase()
    } catch (err) {
        return  NextResponse.json({status : 'faild' , message : 'problem at connecting to Data-base'} , {status : 500})
    } 
    let {_id , email}= await req.json()

    let user = await UserEstate.findOne({email})
    let selectedAdv = await Advertisement.findOne({_id})

    if(!user) return NextResponse.json({status : 'faild' , message : 'please log in at first'} , {status : 422})
    if(user.role != 'ADMIN') return NextResponse.json({status : 'faild' , message : 'just admin are available'} , {status : 422})

    user.mailBox.push(`متاسفانه اگهی شما با عنوان  ${selectedAdv.title } توسط ادمین رد شد`)
    await user.save()

    await Advertisement.deleteOne({_id})

    return NextResponse.json({status : 'success' , message : 'the Advertise unConfirmed'} , {status : 200})
}
