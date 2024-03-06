'use client'

import { useRouter } from "next/navigation";

import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from 'react-icons/ai';
import { BsFillCheckSquareFill } from "react-icons/bs";
import { BsShieldFillExclamation } from "react-icons/bs";

import { ToastContainer, toast } from 'react-toastify';

import Card from "./card";
import { useState } from "react";
import Loading from "./loading";

export default function DashboardCard({adv , greenText , redText , role}){
    let [confirmLoading , setConfirmLoading] = useState(false)
    let [faildLoading , setFaildLoading] = useState(false)
    let router = useRouter()

    const editHandler = () => {
        setConfirmLoading(true)
        router.push(`/dashboard/myAdv/${adv._id}`)
    }
    const deleteHandler = async () => {
        setFaildLoading(true)
        let progress = await fetch('/api/advertisement' , {
            method : 'DELETE',
            body : JSON.stringify(adv._id),
            headers : {'Content-Type' : 'application/json'}
        })
        
        let Data = await progress.json()
        toast.info('آگهی مدنظر حذف شد')
        setFaildLoading(false)
        router.refresh()
    }
    const confirmHandler = async () => {
        setConfirmLoading(true)
        let progress = await fetch('/api/admin' , {
            method : 'PATCH',
            body : JSON.stringify({_id : adv._id , email : adv.email}),
            headers : {'Content-Type' : 'application/json'}
        })
        
        let Data = await progress.json()
        if(Data.status == 'success') toast.success('آگهی با موفقیت تایید شد')
        setConfirmLoading(false)
        router.refresh()
    }
    const unConfirmHandler = async () => {
        setFaildLoading(true)
        let progress = await fetch('/api/admin' , {
            method : 'DELETE',
            body : JSON.stringify({_id : adv._id , email : adv.email}),
            headers : {'Content-Type' : 'application/json'}
        })
        
        let Data = await progress.json()
        toast.info('آگهی با موفقیت رد شد')
        setFaildLoading(false)
        router.refresh()
    }
    return(
        <div className='dashboard-card-container'>
            <Card {...adv}/>
            <div className='dashboard-card-main'>
            {
                adv.publish ? <span className="if-publish">ثبت شده </span> : <span className="if-notpublish">در انتظار تایید</span>
            }
            <div>
            <button onClick={role ? confirmHandler : editHandler}>
                
                {
                        confirmLoading ? <Loading /> : 
                        <>
                            {greenText}
                            {
                                role ?  <BsFillCheckSquareFill/> : <FiEdit />
                            }
                        </>
                }
                
                    
                    
                </button>
                <button onClick={role ? unConfirmHandler : deleteHandler}>
                {
                        faildLoading ? <Loading /> : 
                        <>
                            {redText}
                            {
                                role ?  <BsShieldFillExclamation/> : <AiFillDelete />
                            }
                        </>
                }
                </button>
            </div>
            </div>
            <ToastContainer />
        </div>
    )
}