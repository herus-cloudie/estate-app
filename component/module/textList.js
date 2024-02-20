'use client'

import { AiOutlineDelete } from "react-icons/ai";

export default function TextList({ name , advertisementData , setAdvertisementData }) {
  /* ----------------        name props should be either 'amenities' or 'rules'        --------- */
    let List = advertisementData[name]

    const changeHandler = (e , index) => {
        List[index] = e.target.value;
        setAdvertisementData({...advertisementData , [name] : List})
    }

    const deleteHandler = (Index) => {
        let fillter = List.filter((text , index) => index != Index)
        setAdvertisementData({...advertisementData , [name] : fillter})
    }

    return (
    <div>
      {List.map((Text , index) => (
        <div className='card-textlist' key={index}>
          <input type="text"  value={Text} onChange={(e) => changeHandler(e, index)}/>
          <button onClick={() => deleteHandler(index)}>حذف<AiOutlineDelete /></button>
        </div>
      ))
      }
    </div>
  );
}
