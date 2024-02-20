
import ConnectDataBase from '@/utils/connectDataBase'
import { UserEstate } from '@/utils/model'
import { hash } from 'bcryptjs'
import { NextResponse } from 'next/server'

export async function POST(req) {
    let {email , password} = await req.json()
    
    try {
        await ConnectDataBase()
    } catch (err) {
        return  NextResponse.json({status : 'faild' , message : 'problem at connecting to Data-base'} , {status : 500})
    } 

    let userExist = await UserEstate.findOne({email : email})
    if(userExist) return NextResponse.json({status : 'faild' , message : 'user does exist'} , {status : 422 , statusText : 'user does exist'}) 

    let hashedPassword = await hash(password , 12)
    let user = await UserEstate.create({email , password : hashedPassword})

    return NextResponse.json({status : 'success' , message : 'user created' , user} , {status : 200})
}