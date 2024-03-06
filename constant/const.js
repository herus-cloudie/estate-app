import { RiHome3Line } from "react-icons/ri";
import { MdApartment } from "react-icons/md";
import { BiStore } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";

const icons = {
  villa: <RiHome3Line />,
  apartment: <MdApartment />,
  store: <BiStore />,
  office: <GiOfficeChair />,
};


const categories = {
  apartment: "آپارتمان",
  villa: "ویلا",
  store: "مغازه",
  office: "دفتر",
};

const inputsInfo = [
  {title : 'عنوان آگهی' , name : 'title'},
  {title : 'متراژ' , name : 'meterage'},
  {title : 'آدرس' , name : 'location'},
  {title : 'شماره تماس' , name : 'phone'},
  {title : 'بنگاه' , name : 'realState'},
]
const radiosInfo = [
  {title : 'ویلا' , name : 'villa'},
  {title : 'اپارتمان' , name : 'apartment'},
  {title : 'مغازه' , name : 'store'},
  {title : 'دفتر' , name : 'office'},
] 

export { icons , categories, radiosInfo};