'use client'

export default function TextInput({title , value , name , typeOfInput , advertisementData , setAdvertisementData}){
    let changeHandler = (e) => {
        let {value} = e.target
        if(name == 'mortgage' || name == 'rent' || name == 'price' || name == 'meterage' || name == 'phone'){

            if(isNaN(value)) return
        }
        setAdvertisementData({...advertisementData , [name] : value})
    }

    return(
        <div>
            <p className="title-textInput">{title}</p>
            {
                typeOfInput == 'textarea' ?
                 <textarea value={value}  className="textarea-textInput" onChange={changeHandler}/>
                 : <input  value={value} className="input-wrapper" onChange={changeHandler}/>
            }
        </div>
    )
}
