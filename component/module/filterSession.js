import { BiAlignLeft, BiStore } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";
import { MdApartment } from "react-icons/md";
import { RiHome3Line } from "react-icons/ri";

export default function FilterSession({setFilter , filter}){
    const clickHandler = (e) => setFilter({...filter , category : e.target.id})

    return(
    <>
        <div className="categorie-radio">
            <div className="radio-inputs">
            <label onClick={clickHandler}>
                <input className="radio-input"  id="villa" type="radio" name="engine"/>
                    <span className="radio-tile">
                        <span className="radio-icon">
                             <RiHome3Line />
                        </span>
                        <span className="radio-label">ویلا</span>
                    </span>
            </label>
            <div  className="filter-group">
                <label onClick={clickHandler}>
                    <input  className="radio-input" type="radio" id="apartment" name="engine"/>
                    <span className="radio-tile">
                        <span className="radio-icon">
                        <MdApartment />
                        </span>
                        <span className="radio-label">آپارتمان</span>
                    </span>
                </label>
                <label onClick={clickHandler}>
                    <input  className="radio-input" type="radio" id="all" name="engine"/>
                    <span className="radio-tile">
                        <span className="radio-icon">
                        <BiAlignLeft />
                        </span>
                        <span className="radio-label">همه</span>
                    </span>
                </label>
                <label onClick={clickHandler}>
                    <input className="radio-input" type="radio" id="store" name="engine"/>
                    <span className="radio-tile">
                        <span className="radio-icon">
                        <BiStore />
                        </span>
                        <span className="radio-label">مغازه</span>
                    </span>
                </label>
            
            </div>
            <label onClick={clickHandler}>
                <input className="radio-input" type="radio" id="office" name="engine"/>
                <span className="radio-tile">
                    <span className="radio-icon">
                        <GiOfficeChair />
                    </span>
                    <span className="radio-label">دفتر</span>
                </span>
            </label>
        </div>
        </div>
        <div className="transaction-group">
                    <div className="customCheckBoxHolder">
                        <input onClick={() => setFilter({...filter , rent : !filter.rent})} type="checkbox" id="1" className="customCheckBoxInput"/>
                        <label htmlFor="1" className="customCheckBoxWrapper">
                            <div className="customCheckBox">
                                <div className="inner">اجاره</div>
                            </div>
                        </label>
                    </div>
                    <div className="customCheckBoxHolder">
                        <input onClick={() => setFilter({...filter , sale : !filter.sale})} type="checkbox" id="2" className="customCheckBoxInput"/>
                        <label htmlFor="2" className="customCheckBoxWrapper">
                            <div className="customCheckBox">
                                <div className="inner">خرید</div>
                            </div>
                        </label>
                    </div>
            </div>
       
         </>
    )
}
