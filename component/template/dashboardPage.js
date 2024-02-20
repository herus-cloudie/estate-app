import LogOut from "../module/logout";

export default function DashboardPage({CreatedAt}){

    return(
        <div className="dashboard-text-group">
            <h3 className="dashboard-title">خوش آمدید 👋</h3>
            <p className="dashboard-text" >آگهی تان را ثبت کنید تا هزاران نفر آن را ببینند!</p>
            <div className="join-date">
                <p className="join-date-string">تاریخ عضویت : </p>
                <p className="join-date-number">{new Date(CreatedAt).toLocaleDateString('fa-IR')}</p>
            </div>
            <LogOut />
        </div>
    )
}