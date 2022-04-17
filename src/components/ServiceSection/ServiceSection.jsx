import { useNavigate } from "react-router-dom"
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
const services = [
    {
        id: 1,
        name: 'Family Law',
        href: '#',
        imageSrc: '/images/family.jpg',
        imageAlt: "Family Law",
        price: "$40/hour",
        des: 'Family Lawyers in Bangladesh are the most needful among any other developing countries due to its over-growing family dispute. I understand how difficult and emotionally distressing legal issues can get, for which I facilitates to resolve disputes with discretion and empathy.',
    },
    {
        id: 2,
        name: 'Business Law',
        href: '#',
        imageSrc: '/images/business.jfif',
        imageAlt: "Business Law",
        price: "$80/hour",
        des: 'I am a recognized Business lawyer in Bangladesh and an enrolled practicing advocate, who has several years of experience in Legal Consultancy that comprises of legal auditing, due diligence, legal drafting and vetting, litigation practices and he is a Senior Associate at FM Associates.',
    },
    {
        id: 3,
        name: 'Trust & Estates',
        href: '#',
        imageSrc: '/images/trust.jpg',
        imageAlt: "Trust & Estates",
        price: "$60/hour",
        des: 'I am experienced in representing clients through all phases of the probate court process including routine trust and estate administration, mediation, depositions, court hearings and multi-day trials. The legal questions and issues that can arise in the wake of a loved one’s death or incapacity often take an emotional, physical and financial toll on clients.',
    }


]

export default function ServiceSection() {
    const navigate = useNavigate();
    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-4xl font-extrabold tracking-tight text-emerald-400">Services</h2>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {services.map((product) => (
                        <div key={product.id} className="group relative" onClick={() => navigate('/checkout')}>
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div className="w-full">
                                    <h3 className="text-slate-600 md:text-2xl my-3 tracking-wider select-none">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className=" text-slate-400 text-sm md:text-base my-2 tracking-wider select-none line-clamp-3">{product.des}</p>
                                </div>
                                <p className=" text-slate-400 text-sm md:text-base my-2 tracking-wider select-none">{product.price}</p>

                            </div>
                            <button
                               
                                className="w-32 mt-5 flex justify-around items-center gap-1 py-2 px-4  text-sm font-medium rounded-md text-white  bg-emerald-500"
                                onClick={() => navigate('/checkout')}
                            >
                              <span>Details</span> <BsFillArrowRightCircleFill className="animate-bounce"/>
                            </button>
                            {/* <button
                                type="button"
                                className="w-32 mt-5 group flex justify-around items-center gap-1 py-2 px-4 border hover:border-transparent text-sm font-medium rounded-md text-white  bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                                onClick={() => navigate('/checkout')}
                            >
                              <span>Details</span> <BsFillArrowRightCircleFill className="animate-bounce"/>
                            </button> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
