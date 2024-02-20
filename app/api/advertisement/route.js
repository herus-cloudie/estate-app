import ConnectDataBase from "@/utils/connectDataBase"
import { Advertisement } from "@/utils/model"
import Session from "@/utils/session"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        await ConnectDataBase()
    } catch (err) {
        return  NextResponse.json({status : 'faild' , message : 'problem at connecting to Data-base'} , {status : 500})
    }    
    let {title , description , location , phone , price , realState , category , amenities , rules , constructionDate , meterage , rent , mortgage , transaction} = await req.json();
    let session = await Session()

    if(!session) return NextResponse.json({status : 'faild' , message : 'please log in at first'} , {status : 422})
    
    let Advertise = await Advertisement.create({title , description , location , phone , price ,
    realState , category , amenities , rules , constructionDate , meterage , rent , mortgage , transaction , email : session?.user.email})

    return NextResponse.json({status : 'success' , message : 'the Advertise created'} , {status : 200})
}
        
export async function PATCH(req) {
    try {
        await ConnectDataBase()
    } catch (err) {
        return  NextResponse.json({status : 'faild' , message : 'problem at connecting to Data-base'} , {status : 500})
    }    
    let {title , description , location , phone , price , realState , category , meterage 
        , amenities , rules , mortgage , rent , constructionDate , _id} = await req.json();
    let session = await Session()
    if(!session) return NextResponse.json({status : 'faild' , message : 'please log in at first'} , {status : 422})

    let selectedAdv = await Advertisement.findOne({_id})
    
    selectedAdv.title = title;
    selectedAdv.description = description;
    selectedAdv.location = location;
    selectedAdv.phone = phone;
    selectedAdv.price = price;
    selectedAdv.realState = realState;
    selectedAdv.category = category;
    selectedAdv.amenities = amenities;
    selectedAdv.rules = rules;
    selectedAdv.constructionDate = constructionDate;
    selectedAdv.mortgage = mortgage;
    selectedAdv.rent = rent;
    selectedAdv.meterage = meterage;
    selectedAdv.publish = false
    
    await selectedAdv.save()

    return NextResponse.json({status : 'success' , message : selectedAdv} , {status : 200})
}
    
export async function DELETE(req) {
    try {
        await ConnectDataBase()
    } catch (err) {
        return  NextResponse.json({status : 'faild' , message : 'problem at connecting to Data-base'} , {status : 500})
    } 
    let _id = await req.json()
    
    let session = await Session()
    if(!session) return NextResponse.json({status : 'faild' , message : 'please log in at first'} , {status : 422})

    await Advertisement.deleteOne({_id})

    return NextResponse.json({status : 'success' , message : 'the Advertise deleted'} , {status : 200})
}
 