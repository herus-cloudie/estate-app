
import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLeftArrowAlt } from "react-icons/bi";
import { sp } from "@/utils/changeFormat";
import { icons } from "@/constant/const";

export default function Card(adv) {
  if(adv._doc){
     let {_doc} = adv;
     adv = _doc
  }
  let { _id, category, title, location, price ,  meterage , rent , mortgage} = adv;
    
  return (
    <div className='card-container'>
      <div className='card-icon'>
        <div>{icons[category]}</div>
        <p className='card-title'>{title}</p>
      </div>
      <div className="card-header">
        <div>
          <p className='card-location'>
            <HiOutlineLocationMarker />
            {location}
          </p>
        </div>
        <span className="meterage">{sp(meterage)} متر</span>
      </div>
      {
        price ?
        <>
          <span >قیمت کل : {sp(price)} تومان</span>
          <span >هر متر : {sp(Math.round(price / meterage))} تومان</span>
        </>
        :
        <>
          <span>رهن : {sp(mortgage)} تومان</span> 
          <span>اجاره : {sp(rent)} تومان</span>
        </>
      }
      <Link style={{paddingTop : '14px'}} href={`/buy-residential/${_id}`}>
        مشاهده آگهی
        <BiLeftArrowAlt />
      </Link>
    </div>
  );
}
