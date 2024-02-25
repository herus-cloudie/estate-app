'use client'
import { useEffect, useState } from "react";
import Card from "../module/card";
import FilterSession from "../module/filterSession";
import TitleHeader from "../module/titleHeader";
import { BiMenu } from "react-icons/bi";
import HamburgerMenu from "../module/hamburgerMenu";

export default function BuyResidentialPage({PublishedAdv}){
    let [filter , setFilter] = useState({
        category : "",
        rent : false,
        sale : false
    })
    let [filteredAdv , setFilterAdv] = useState(PublishedAdv)

    useEffect(() => {
        filteringByCategory()
        filteringByCategory()
    }, [filter])
    
    function filteringByCategory(){
        if(filter.category == 'all' || filter.category == '') {
            console.log(filter.category )
            if(!filter.rent && !filter.sale) setFilterAdv(PublishedAdv)
            else if(filter.rent && filter.sale) setFilterAdv(PublishedAdv)
            else if(!filter.rent && filter.sale) setFilterAdv(filteredAdv.filter(item => item.rent == null))
            else if(filter.rent && !filter.sale) setFilterAdv(filteredAdv.filter(item => item.price == null))

        }else {

            let filterCategory = PublishedAdv.filter(item => item.category == filter.category)

            if(!filter.rent && !filter.sale) setFilterAdv(filterCategory) 
            else if(filter.rent && filter.sale) setFilterAdv(filterCategory)
            else if(!filter.rent && filter.sale) setFilterAdv(filterCategory.filter(item => item.rent == null))
            else if(filter.rent && !filter.sale) setFilterAdv(filterCategory.filter(item => item.price == null)) 
    }

    
}
return (
        <div className="bg-adv-color">
            <header className="header">
                <TitleHeader title={"آگهی ها"} img={'home'}/>
                <div className="header-option">
                <div className="option-text-group" >
                    <a href="/" className="option-text">صفحه اصلی</a>
                    <a href="/dashboard" className="option-text">داشبورد</a>
                    <a href="/dashboard/add" className="option-text">ثبت اگهی</a>
                </div>
                <HamburgerMenu />
            </div> 
            </header>
            <FilterSession filter={filter} setFilter={setFilter}/>

            <div className="residential-group">
                {
                    filteredAdv.length == 0 ? 
                    <div className="noadv-text-image">
                        <h2 className="no-adv">متاسفانه آگهی با این دسته بندی وجود ندارد!</h2>
                        <img width={300} src="/image/noadv.png"/>
                    </div>
                    : 
                    filteredAdv?.map(adv => <Card {...adv}/>)
                }
            </div>
        </div>
    )
}