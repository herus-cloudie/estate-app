'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"

import Loading from "@/component/module/loading"

import { ToastContainer, toast } from 'react-toastify';

import TitleHeader from "../module/titleHeader";
export default function SignUpPage(){
    let router = useRouter()

    let [state , setState] = useState({
        email : '',
        password : '',
        rePassword : ''
    })
    let [loading , setLoading] = useState(false)

    const changeHandler = (e) => setState({...state , [e.target.name] : e.target.value})

    const signupHandler = async () => {
        if(!state.email || !state.password || !state.rePassword){
            return toast.warn('لطفا تمامی فیلد هارا پر کنید')
        }else if(!state.email.includes('@') || state.email.length < 12){
            return toast.warn('ایمیل نامعتبر است')
        }else if(state.password.length < 6){
            return toast.warn('حداقل طول پسورد بایستی بیشتر از 6 باشد')
        }else if(state.password != state.rePassword){
            return toast.warn('رمز های عبور همخوانی ندارند')
        }else{
            setLoading(true)
            let progress = await fetch('api/auth/signup' , {
                method : 'POST',
                body : JSON.stringify({email : state.email , password : state.password}),
                headers : {'Content-Type' : 'application/json'}
            })
            let data = await progress.json()
            setLoading(false)
            
            if(data.status == 'faild'){
                toast.error('حساب کاربری از قبل ایجاد شده است')
            }else{
                toast.success('حساب کاربری از قبل ایجاد شده است')
                router.push('/signin')
                setState({
                    email : '',
                    password : '',
                    rePassword : ''
                })
            }
        }
    }

    return(
        <div className="bg-color">
            <header className="header">
                <TitleHeader title={'ساخت اکانت'} img={'add-user'}/>
                <div className="header-option">
                    <div className="option-text-group">
                        <a></a>
                        <a href="/" className="option-text">صفحه اصلی</a>
                        <a></a>
                        <a href="/signin" className="option-text">ورود به حساب</a>
                        <a></a>
                    </div>
                </div>
            </header>
            <div className="login-box">
                <h2>ایجاد حساب کاربری</h2>
                <div>
                    <div className="user-box">
                        <input onChange={changeHandler} value={state.email} type="text" name="email"/>
                        <label>ایمیل</label>
                    </div>
                    <div className="user-box">
                        <input onChange={changeHandler} value={state.password}  type="text" name="password"/>
                        <label>رمزعبور</label>
                    </div>
                    <div className="user-box">
                        <input onChange={changeHandler} value={state.rePassword} type="text" name="rePassword"/>
                        <label>تکرار رمزعبور</label>
                    </div>
                    <div><a className="have-account" href="signin">حساب کاربری دارید؟</a></div>
                    <center>

                        {
                            loading ? <Loading /> 
                            : 
                            <a onClick={signupHandler} className="a" href="#">
                                ثبت نام
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