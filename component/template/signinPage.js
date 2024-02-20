'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"

import { signIn } from "next-auth/react"

import Loading from "@/component/module/loading"

import { ToastContainer, toast } from 'react-toastify';

import TitleHeader from "../module/titleHeader"
export default function SignInPage(){
    let router = useRouter()

    let [state , setState] = useState({
        email : '',
        password : ''
    })
    let [loading , setLoading] = useState(false)

    const changeHandler = (e) => setState({...state , [e.target.name] : e.target.value})

    const signupHandler = async () => {
        if(!state.email || !state.password){
            return toast.warn('لطفا تمامی فیلد هارا پر کنید')
        }else if(!state.email.includes('@') || state.email.length < 12){
            return toast.warn('ایمیل نامعتبر است')
        }else if(state.password.length < 6){
            return toast.warn('حداقل طول پسورد بایستی بیشتر از 6 باشد')
        }else{
            setLoading(true)
            let progress = await signIn('credentials' , {
                email : state.email,
                password : state.password,
                redirect : false
            })
            setLoading(false)
            if(!progress.ok){
                if(progress.error = 'password is incorrect') return toast.error(' پسورد نادرست است')
                else if(progress.error = 'user does not exist') return toast.error('اکانتی با این شناسه وجود ندارد')
                
            }else{
                router.push('/')
                setState({
                    email : '',
                    password : ''
                })
            }
            
        }
    }
    
    return(
        <div className="bg-color">
            <header className="header">
                <TitleHeader title={'ورود به اکانت'} img={'log-in'}/>
                <div className="header-option">
                        <div className="option-text-group" >
                            <a></a>
                            <a href="/" className="option-text">صفحه اصلی</a>
                            <a></a>
                            <a href="/signup" className="option-text">ساخت اکانت جدید</a>
                            <a></a>
                        </div>
                    </div>
            </header>
            <div className="login-box">
                <div>
                    <h3>ورود به حساب کاربری</h3>
                    <div className="user-box">
                        <input onChange={changeHandler} value={state.email} type="text" name="email"/>
                        <label>ایمیل</label>
                    </div>
                    <div className="user-box">
                        <input onChange={changeHandler} value={state.password}  type="text" name="password"/>
                        <label>رمزعبور</label>
                    </div>

                    <div><a className="have-account" href="signup">حساب کاربری ندارید؟</a></div>
                    <center>
                        {
                            loading ? <Loading /> 
                            : <a onClick={signupHandler} className="a" href="#">
                                ورود
                            <span></span>
                            </a>
                        }
                    </center>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}