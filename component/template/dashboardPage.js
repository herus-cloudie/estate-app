import LogOut from "../module/logout";

export default function DashboardPage({user}){

    return(
        <div className="dashboard-text-group">
            <h3 className="dashboard-title">خوش آمدید 👋</h3>
            <p className="dashboard-text" >آگهی تان را ثبت کنید تا هزاران نفر آن را ببینند!</p>
            <p className="dashboard-text" > نوع کاربری : {user.role == 'ADMIN' ? <span>ادمین</span> : <span>عادی</span> }</p>
            <p style={{fontFamily: 'system-ui' , padding: '20px 0px', fontWeight: 700}}>{user.email}</p>
            <div className="join-date">
                <p className="join-date-string">تاریخ عضویت : </p>
                <p className="join-date-number">{new Date(user.createdAt).toLocaleDateString('fa-IR')}</p>
            </div>
            <LogOut />
        </div>
    )
}