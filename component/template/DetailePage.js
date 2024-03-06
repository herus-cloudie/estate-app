'use client'

import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendarCheck } from "react-icons/bi";

import { categories } from "@/constant/const";
import { icons } from "@/constant/const"; 

import ItemList from "../module/itemList";
import TitleHeader from "../module/titleHeader";
import ShareButton from "../module/shareButton";

import { sp } from "@/utils/changeFormat";

export default function DetailsPage({data}) { 
  let {
        title,
        location,
        description,
        amenities,
        rules,
        realState,
        phone,
        price,
        category,
        constructionDate,
        meterage,
        rent ,
        mortgage,
      } = data;


    function getAdvTime(){
      const now = new Date();
      const created = new Date(data.createdAt);
      
      const minute = Math.floor((now - created) / 1000 / 60);
      if(minute < 60) return minute + ' دقیقه';
      const hour = Math.floor(( now - created) / 1000 / 60 / 60);
      if(hour < 24) return hour + ' ساعت';
      const day = Math.floor(( now - created) / 1000 / 60 / 60 / 24);
      return day + ' روز';
    }

  return ( 
    <div className="detaile-bg"> 
      <header className="header">
            <TitleHeader title={'جزییات آگهی'} img={'dashboard'}/>
      </header> 
      <div className='detaile-container'>
        <div className='detaile-main'>
          <div className="detaile-head">
            <div>
              <h1>{title}</h1>
              <span>
                  <HiOutlineLocationMarker />
                  {location}
              </span>
            </div> 
            
            <div className="bookmard-and-data">
                <h3 className="adv-date" style={{fontSize: '15px' , color: '#333333a8'}}>تاریخ انتشار : {getAdvTime()} پیش</h3>
            </div>

          </div>
            <h3 className='detaile-title'>توضیحات</h3>
          <p>{description}</p>
          <h3 className='detaile-title'>امکانات رفاهی</h3>
          <ItemList data={amenities} />
          <h3 className='detaile-title'>قوانین</h3>
          <ItemList data={rules} />
        </div>
        <div className='detaile-sidebar'>
          <div className='detaile-realState'>
            <SiHomebridge />
            <p>املاک {realState}</p>
            <span>
              <AiOutlinePhone />
              {phone}
            </span>
          </div>
          <ShareButton />
          <div className='detaile-price'>
            <p>
              {icons[category]}
              {categories[category]}
            </p>
            {
              price ? <p>{sp(price)} تومان</p>
              : <>
              <p>رهن : {sp(mortgage)} تومان</p> <p>اجاره : {sp(rent)} تومان</p>
              </>
            }
            <p>{sp(meterage)} متر</p>
            <p>
              <BiCalendarCheck />
              {new Date(constructionDate).toLocaleDateString("fa-IR")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
