
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';

export default function SendAdvertisement({advertisementData , setAdvertisementData , setLoading , text}){
    let {
    title,
    description,
    location,
    phone,
    meterage,
    mortgage,
    price,
    realState,
    category,
    transaction } = advertisementData;
    
    let router = useRouter()

    const addAdvertisement = async () => {
        if(!title || !description || !location || !phone || !meterage || !realState || !category) return toast.warn('لظفا مقادیر را کامل وارد کنید')
        else if(transaction == 'price' && !price)toast.warn('لظفا قیمت را وارد کنید')
        else if(transaction == 'rent' && !mortgage) toast.warn('لظفا قیمت وارد کنید')
        else{
            setLoading(true)
        let progress = await fetch('/api/advertisement' , {
            method : 'POST',
            body : JSON.stringify(advertisementData),
            headers : {'Content-Type' : 'application/json'}
        })
        setLoading(false)
        
        let data = await progress.json()
        console.log(data)
            
        
        if(data.status == 'success') { 
            router.push('/dashboard/myAdv')      
            toast.success('اگهی با موفقیت ثبت شد')
        } 
    } 
}
        function checkDataValidation(){
            if(!title || !description || !location || !phone || !meterage || !realState || !category) return toast.warn('لظفا مقادیر را کامل وارد کنید')
            else if(transaction == 'price' && !price) return toast.warn('لظفا قیمت را وارد کنید')
            else if(transaction == 'rent' && !mortgage) return toast.warn('لظفا قیمت وارد کنید')
        }
    const editAdvertisment = async () => {
        if(!title || !description || !location || !phone || !meterage || !realState || !category) return toast.warn('لظفا مقادیر را کامل وارد کنید')
        else if(transaction == 'price' && !price) return toast.warn('لظفا قیمت را وارد کنید')
        else if(transaction == 'rent' && !mortgage) return toast.warn('لظفا قیمت وارد کنید')
    else{
        setLoading(true)
        let progress = await fetch('/api/advertisement' , {
            method : 'PATCH',
            body : JSON.stringify(advertisementData),
            headers : {'Content-Type' : 'application/json'}
        })
        setLoading(false)
        
        let data = await progress.json()
        console.log(data)
            
        if(data.status == 'success') {
            router.push('/dashboard/myAdv')
        };  
    }

    
    }

    return(
        <>
            <button className="addadvertisement" onClick={text == 'ثبت اگهی' ? addAdvertisement : editAdvertisment}>{text}</button>
            <ToastContainer />
        </>
    )
}