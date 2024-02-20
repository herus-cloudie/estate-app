
export default function NotificationPage({notification}){
    return (
        <div className="notif-group">
        {
            notification.length == 0 ? 
            <div className="noadv-text-image">
                <h2 className="no-adv">هنوز پیامی برای شما ارسال نشده</h2>
                <img width={300} src="/image/noadv.png"/>
            </div>
            : notification.map((text , index) => <h2 className={text.includes('موفقیت') ? 'success-notif notif' : 'faild-notif notif' }>{index+1} - {text} </h2>)
        }
        </div>
    )
}