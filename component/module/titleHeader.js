export default function TitleHeader({title , img}){
    return(
        <div className="header-brand">
            <a href='/' className="header-name">{title}</a>
            <img className="brand-img" src={`/icon/${img}.png`}/>
        </div>
    )
}