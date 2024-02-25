'use client'

import { useEffect, useState } from "react";

import SendAdvertisement from "../module/sendAdvertising";

import { VscDiffAdded } from "react-icons/vsc";
import { BsFillMenuButtonFill } from "react-icons/bs";
import { HiMiniNewspaper } from "react-icons/hi2";
import { ImMug } from "react-icons/im";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { BsBuildingUp } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";

import TextInput from "../module/textInput";
import TextList from "../module/textList";
import DatePickerFunc from "../module/datePicker";
import Loading from "../module/loading";
import { radiosInfo } from "@/constant/const";
import BtnTwo from "../module/btnTwo";

export default function AddPage({adv}){
    useEffect(() => {
        if(adv) setAdvertisementData({...adv , transaction : adv.price == null ? "rent" : "sale"})
    }, [])
    const [loading , setLoading] = useState(false)
    const [advertisementData , setAdvertisementData] = useState({
        title: "",
        description: "",
        location: "",
        phone: "",
        meterage: "",
        rent: "",
        mortgage: "",
        price: "",
        realState: "",
        category: "",
        transaction : "",
        amenities: [],
        rules: [],
        constructionDate: new Date(),
        
    });
    const addHandler = (name) => setAdvertisementData({...advertisementData , [name] : [...advertisementData[name] , '']})
    const ChangeDateHandler = (e) => {
        let date = new Date(e)
        setAdvertisementData({...advertisementData , constructionDate : date})
    }
    const inputsInfo = [
        {title : 'عنوان اگهی' , name : 'title'},
        {title : 'متراژ' , name : 'meterage'},
        {title : 'آدرس' , name : 'location'},
        {title : 'شماره تماس' , name : 'phone'},
        {title : 'بنگاه' , name : 'realState'},
      ]
    if(advertisementData.transaction == 'rent'){
        inputsInfo.push(
        {title : 'رهن (تومان)' , name : 'mortgage'},
        {title : 'اجاره (تومان)' , name : 'rent'},
        {title : 'توضیحات' , typeOfInput : 'textarea' , name : 'description'})
    }else if(advertisementData.transaction == 'sale'){
        inputsInfo.push(
        {title : 'قیمت (تومان)' , name : 'price'},
        {title : 'توضیحات' , typeOfInput : 'textarea' , name : 'description'})
    }
      
    return(
        <div className="fix-transaction">
            {
                adv ? <h3 className="dashboard-title add-title-2"><BsFillPencilFill />ویرایش اگهی</h3> 
                : <h3 className="dashboard-title add-title-2"><VscDiffAdded />ثبت آگهی جدید</h3>
            }
            <>
            {
                advertisementData.transaction == "" 
                ? 
                <div className="dashboard-transaction-group">
                    <h2>قصد خرید یا فروش دارید؟</h2>
                    <div className="transaction">
                        <div onClick={() => setAdvertisementData({...advertisementData , transaction : 'rent'})}><BtnTwo text='رهن و اجاره'/></div>
                        <div onClick={() => setAdvertisementData({...advertisementData , transaction : 'sale'})}><BtnTwo text='فروش'/></div>
                    </div>
                </div>
                
                : 
                <div className="text-group">
                <div className="input-group">
                    {
                        inputsInfo.map((info , index) => <TextInput key={index} title={info.title} typeOfInput={info.typeOfInput}
                        name={info.name} value={advertisementData[info.name]} setAdvertisementData={setAdvertisementData} advertisementData={advertisementData}/>)
                    }
                </div>
                

                <div className="category-date"> 
                    <div>
                        <h3 className="dashboard-title-2 add-title"><BsFillMenuButtonFill />دسته بندی</h3>
                        <div className="radios">
                            {
                                radiosInfo.map((info , index) => 
                                    <div key={index}>
                                        <label htmlFor="apartment">{info.title}</label>
                                        <input
                                        type="radio"
                                        name="category"
                                        checked={advertisementData.category === info.name}
                                        onChange={() => setAdvertisementData({...advertisementData , category : info.name})}
                                        />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="datePicker-margin">
                        <h3 className="dashboard-title-2 add-title"><BsBuildingUp />سال ساخت</h3>
                        <DatePickerFunc value={advertisementData.constructionDate} ChangeDateHandler={ChangeDateHandler}/>
                    </div>
                    
                </div>



                <div style={{widows : '270px'}}> 
                    <div>
                        <h3 className="dashboard-title-2 add-title"><ImMug />امکانات رفاهی</h3>
                        <TextList name='amenities' advertisementData={advertisementData} setAdvertisementData={setAdvertisementData}/>
                        <button onClick={() => addHandler('amenities')} className="add-textlist">افزودن <MdOutlineLibraryAdd /></button>
                    </div>
                    <div>
                        <h3 className="dashboard-title-2 add-title"><HiMiniNewspaper />قوانین</h3>
                        <TextList name='rules' advertisementData={advertisementData} setAdvertisementData={setAdvertisementData}/>
                        <button onClick={() => addHandler('rules')} className="add-textlist">افزودن <MdOutlineLibraryAdd /></button>
                    </div>

                </div>


                    {
                        loading ? <div className="addadvertisement-loading"><Loading /></div>
                        : <SendAdvertisement text={adv ? 'ویرایش' : 'ثبت اگهی'} setAdvertisementData={setAdvertisementData} advertisementData={advertisementData} setLoading={setLoading}/>
                    }

            </div>
            }
            </>
        </div>
    )
}