
import DashboardCard from "@/component/module/dashboardCard"

export default async function ExpectPage({expectToConfirm}){
    return(
        <div className="dashboard-card-group">
            {
            expectToConfirm.length == 0 ? <h3 className="no-adv">هیچ آگهی برای تایید وجود ندارد</h3> 
            :
            expectToConfirm.map((adv , index) => <DashboardCard key={index} role={'ADMIN'} greenText="تایید" redText="رد کردن" 
             adv={JSON.parse(JSON.stringify(adv))}/> )
        }
        </div>
    )
}