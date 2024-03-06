
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';

export default function SendAdvertisement({advertisementData , setLoading , text}){
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
    rent,
    transaction } = advertisementData;
    
    let router = useRouter()

    const addAdvertisement = async () => {
        if(!title || !description || !location || !phone || !meterage || !realState || !category) return toast.warn('لظفا مقادیر را کامل وارد کنید')
        else if(transaction == 'sale' && !price) return toast.warn('لظفا قیمت را وارد کنید')
        else if(transaction == 'rent'){ 
            if(!mortgage && !rent) return toast.warn('لظفا قیمت وارد کنید')
        }
        
        setLoading(true)
        let progress = await fetch('/api/advertisement' , {
            method : 'POST',
            body : JSON.stringify(advertisementData),
            headers : {'Content-Type' : 'application/json'}
        })
        setLoading(false)
        
        let data = await progress.json()
            
        
        if(data.status == 'success') { 
            router.push('/dashboard/myAdv')      
            toast.success('آگهی با موفقیت ثبت شد')
        } 
    
    }

    const editAdvertisment = async () => {
        if(!title || !description || !location || !phone || !meterage || !realState || !category) return toast.warn('لظفا مقادیر را کامل وارد کنید')
        else if(transaction == 'sale' && !price) return toast.warn('لظفا قیمت را وارد کنید')
        else if(transaction == 'rent'){
        if(!mortgage && !rent) {
            return toast.warn('لظفا قیمت وارد کنید')
    } 
}
        setLoading(true)
        let progress = await fetch('/api/advertisement' , {
            method : 'PATCH',
            body : JSON.stringify(advertisementData),
            headers : {'Content-Type' : 'application/json'}
        })
        setLoading(false)
        
        let data = await progress.json()
            
        if(data.status == 'success') {
            router.push('/dashboard/myAdv')
        };  
    }

    return(
        <>
            <button className="addadvertisement" onClick={text == 'ثبت آگهی' ? addAdvertisement : editAdvertisment}>{text}</button>
            <ToastContainer />
        </>
    )
}
