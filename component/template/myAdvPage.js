
import DashboardCard from "../module/dashboardCard"

export default function MyAdvPage({myAdv}){
    
    return (
        <div className="dashboard-card-group">
        {
            myAdv.length == 0 ? <h3 className="no-adv">هنوز هیچ اگهی ثبت نکرده اید!</h3> 
            :
            myAdv.map(adv => (
                <DashboardCard greenText="ویرایش" redText="حذف اگهی" key={adv._id} adv={JSON.parse(JSON.stringify(adv))}/>
            ))
        }
        </div>
        
    )
}