import { BiMenu } from "react-icons/bi";

import Session from "@/utils/session";
import BtnOne from "../module/btnOne";
import NavOption from "../module/navOption";
import TitleHeader from "../module/titleHeader";
import Link from "next/link";

export default async function HomePage(){

    return(
        <div className="container" dir="rtl">

            <header className="header">
                <TitleHeader title={'املاک مسلمی'} img={'home'}/>
                <NavOption session={await Session()}/>
            </header>
            <main className="hero">
                <h1 className="hero-h1">خرید , فروش  و اجاره املاک مسلمی</h1>
                <div className="tree-section">
                    <img src="/image/heroimg.png" className="hero-img" />
                    <div className="boble one"><p className="text-one">سریع</p></div>
                    <div className="boble two"><p className="text-two">مطمئن</p></div>
                </div>
            </main>
            <div className="third">
                <div className="right">
                    <h3 className="right-text">دنبال چی میگردی؟</h3>
                    <img className="right-img" src="/image/question.png"/>
                    <div className="circle"/>
                </div>
                <div className="left">
                    <div className="box-right">
                        <Link href={'/dashboard/add'}> <BtnOne className='right' text='ثبت آگهی'/> </Link>
                        <img className="box-right-img" src="/image/homeonhand.png"/>
                    </div>
                    <div className="box-left">
                        <img className="box-left-img" src="/image/key.png"/>
                        <Link href={'/buy-residential'}> <BtnOne className='left' text='دیدن آگهی'/> </Link>
                    </div>
                </div>
            </div>
            <div className="comment">
                <div className="comment-label">
                    <div className="comment-label-text">نظرات کاربران</div>
                    <img src="/icon/comment.png" className="comment-label-img" />
                </div>
                <div className="comment-group">
                    <div className="column"/>

                    <div className="comment-body first-comment">
                        <img src="/image/me1.png" className="comment-body-first" />
                        <div className="head-text">حامد زنگنه</div>
                        <div className="body-text top"><p>عالیه. پشتیبانی حرفه ای و سریع , لذت خرید و فروش رو دوچندان میکنه</p></div>
                    </div>
                    
                    <div className="comment-body second-comment">
                        <img src="/image/me2.png" className="comment-body-second" />
                        <div className="head-text">علی بهادر</div>
                        <div className="body-text bottom"> <p>واقعا سرعت عمل و کمسیون پایین جزو مهم ترین ویژگی های این سایت هست و من به شدت از تصمیمم راضی هستم. </p></div>
                    </div>
                </div>
            </div>
            <div className="info" id="info">
                <div className="right">
                    <div>
                        <h3>ارتباط با ما</h3>
                        <img src="/icon/network.png" className="network" />
                    </div>
                    <div>
                        <div>
                            <p>herus_cloudie@yahoo.com</p>
                            <img src="/icon/email.png" className="email" />
                        </div>
                        <a href="https://linkedin.com/in/amirmohammad-moslemi" className="linkedin"><div className="linkedin-text">in</div></a>
                        <a href="https://github.com/herus-cloudie" className="github"><img src="/icon/github.png" className="github-text"/></a>
                        <a href="https://t.me/Herus_soll" className="telegram"><img src="/icon/telegram.png" className="telegram-text"/></a>
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