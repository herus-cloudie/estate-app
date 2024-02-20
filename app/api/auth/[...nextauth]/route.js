import ConnectDataBase from "@/utils/connectDataBase";
import { UserEstate } from "@/utils/model";
import { compare } from "bcryptjs";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
    session : {strategy : 'jwt'},
    secret : process.env.NEXTAUTH_SECRET,
    providers : [
        Credentials({
            async authorize(state){
                let {email , password} = state;
                
                try {
                    await ConnectDataBase()
                } catch (err) {
                    console.log(err)
                    throw new Error('problem at connecting to Data-base')
                }

                let user = await UserEstate.findOne({email : email})

                if(!user) throw new Error('user does not exist')
                if(!await compare(password , user.password)) throw new Error('password is incorrect')

                return { email : email }
            }
        })
    ]
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }