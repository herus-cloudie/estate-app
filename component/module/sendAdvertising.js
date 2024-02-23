
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';

export default function SendAdvertisement({advertisementData , setAdvertisementData , setLoading , text}){
    let router = useRouter()
    
    const addAdvertisement = async () => {
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
            setAdvertisementData({
                title: "",
                description: "",
                location: "",
                phone: "",
                meterage: "",
                rent: "",
                mortgage: "",
                price: "",
                realState: "",
                category: "",
                transaction : "",
                amenities: [],
                rules: [],
                constructionDate: new Date(),
            });
                        

            toast.success('اگهی با موفقیت ثبت شد')
            
        } 
    } 
    const editAdvertisment = async () => {
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

    return(
        <>
            <button className="addadvertisement" onClick={text == 'ثبت اگهی' ? addAdvertisement : editAdvertisment}>{text}</button>
            <ToastContainer />
        </>
    )
}