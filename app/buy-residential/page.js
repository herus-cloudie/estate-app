import BuyResidentialPage from "@/component/template/buyResidentialPage";

export default async function buyResidential(){
    let adv = await fetch('http://localhost:3000/api/advertisement', { cache: 'no-store' })
    let PublishedAdv = await adv.json()
    return <BuyResidentialPage PublishedAdv={JSON.parse(JSON.stringify(PublishedAdv.data))} />
}

