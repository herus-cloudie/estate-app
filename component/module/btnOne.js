export default function BtnOne({className , text , classNameTwo}){
    return(
    <button className={`${className} button-adv`}>
        <span className="shadow"></span>
        <span className="edge"></span>
        <span className={`${classNameTwo} front text`}> {text}
        </span>
    </button>
    )
}