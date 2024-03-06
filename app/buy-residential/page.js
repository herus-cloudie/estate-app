import BuyResidentialPage from "@/component/template/buyResidentialPage";

export default async function buyResidential(){
    let adv = await fetch('https://moslemi-realstate.vercel.app/api/advertisement', { cache: 'no-store' })

    let PublishedAdv = await adv.json()
    return <BuyResidentialPage PublishedAdv={JSON.parse(JSON.stringify(PublishedAdv.data))} />
}

