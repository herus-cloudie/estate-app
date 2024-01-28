import BtnOne from "../module/btnOne";

export default function HomePage(){
    return(
        <div className="container" dir="rtl">
            <main className="hero">
                <div>
                    <h1 className="hero-h1">خرید , فروش  و اجاره املاک مسلمی</h1>
                    {/* <h6 className="hero-h6">سریع تر از اونی که فکر کنی معامله انجام میشه!</h6> */}
                    <img src="https://s3-alpha-sig.figma.com/img/4b7d/fe9e/d251f29c3c445300aa1ad82a9a394b64?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CrIaX1fBpuTEpNPB9RIxIprbOovzaIdm1dysx60aQs1ftX7Kcwa~vIMlEYr3TiP~udgArRn4NjxzeIRdoaKUxW5BCtya1tYbK8WKJYr0JUxcsSwtOqK8S-kqtRIiakJIcSI7DUcjFGdqib-DFJjmaXefXAbJqaubwzOBWyiAD6L7cwkZJ10HeE7Q4bkSXx2HJ6z04CKDCoYy1iZlcaIUE-Wtareqx7shSTP9vmzEiHdr6Bd23y0~bEv1CrKSnmwqqEiCwn1t9TYkgt3zhePzdZiQ2KgUrtmwJPZJsg9OMtjCnC6vIk9fb~1FSiGNqCrnRWjUJitgbxeA0SPKGbBnJg__" className="hero-little-img"/>
                </div>
                <img src="/image/heroimg.png" className="hero-img" />
                <div className="boble one"><p className="text-one">سریع</p></div>
                <div className="boble two"><p className="text-two">مطمئن</p></div>
            </main>
            <div className="third">
                <div className="right">
                    <h3 className="right-text">دنبال چی میگردی؟</h3>
                    <img className="right-img" src="/image/question.png"/>
                    <div className="circle"/>
                </div>
                <div className="left">
                    <div className="box-right">
                        <BtnOne className='right' text='اجاره خانه'/>
                        <img className="box-right-img" src="/image/homeonhand.png"/>
                    </div>
                    <div className="box-left">
                        <img className="box-left-img" src="/image/key.png"/>
                        <BtnOne className='left' text='خرید خانه'/>
                    </div>
                </div>
            </div>
            <div className="comment">
                <div className="comment-label">
                    <div className="comment-label-text">نظرات کاربران</div>
                    <img src="/icon/comment.png" className="comment-label-img" />
                </div>
                <div>
                    <div className="column"/>

                    <div className="comment-body first-comment">
                        <img src="/image/me1.png" className="comment-body-first" />
                        <div className="head-text">حامد زنگنه</div>
                        <div className="body-text top"><p>عالیه , پشتیبانی حرفه ای و سریع لذت خرید و فروش رو دوچندان میکنه</p></div>
                    </div>
                    
                    <div className="comment-body second-comment">
                        <img src="/image/me2.png" className="comment-body-second" />
                        <div className="head-text">علی بهادر</div>
                        <div className="body-text bottom"> <p>واقعا سرعت عمل و کمسیون پایین جزو مهم ترین ویژگی های این سایت هست و من به شدت از تصمیمم راضی هستم. </p></div>
                    </div>
                </div>
            </div>
            <div className="add-adv">
                <img className="adv-img" src='/image/advertising.png'/>
                <h4 className="adv-text">رایگان اگهی ثبت کن!</h4>
                <div className="adv-column"/>
                <h5 className="adv-left-text">اگهی شما را هزاران نفر خواهند دید </h5>
                <BtnOne className='advbutton' classNameTwo='advbuttonTwo' text={"ثبت اگهی"}/>
            </div>

            <div className="info">
                <div className="right">
                    <div>
                        <h3>ارتباط با ما</h3>
                        <img src="/icon/network.png" className="network" />
                    </div>
                    <div>
                        <div>
                            <p>herus2006crypto@gmail.com</p>
                            <img src="/icon/email.png" className="email" />
                        </div>
                        <a href="https://linkedin.com/in/amirmohammad-moslemi" className="linkedin"><div className="linkedin-text">in</div></a>
                        <a href="https://github.com/herus-cloudie" className="github"><img src="/icon/github.png" className="github-text"/></a>
                        <a href="https://t.me/Herus_soll" className="telegram"><img src="/icon/telegram.png" className="telegram-text"/></a>
                    </div>
                </div>
                <div className="columnn"/>
                <div className="left">
                    <div>
                        <h3>درباره ما</h3>
                        <img src="/icon/info.png" className="info-img" />
                    </div>
                    <div>
                        <p>این شرکت در سال 1397 تاسیس و ثبت شد تیم ما همواره در تلاش هستش تا بتواند بستری برای خرید و فروش و اجاره ملک را با خیالی آسوده با اطمینان بالا فراهم کند.</p>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <div className="footer-text">
                    <p>کلیات حقوق وبسایت متعلق به امیرمحمد مسلمی میباشید</p>
                    <img src="/icon/copyright.png" className="copy-right" />
                </div>
                <div className="year">1403 - 1402</div>
            </footer>
        </div>
    )
}