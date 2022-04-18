import React from 'react'
import Footer from '../components/Footer/Footer'

export default function AboutPage() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-8 pb-8 min-h-screen">
        <h2 className="text-4xl  py-5 pl-3 leading-9 font-extrabold tracking-tight bg-emerald-400 text-white  mb-12" style={{ boxShadow: "inset 0 8px 8px -8px rgba(0, 0, 0, 0.3), inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3)" }}>
          <span className='drop-shadow-md'> Md Ishaq</span>
        </h2>
        <ul className="flex items-start gap-8 flex-wrap">
          <li className="w-full">
            <p className="text-lg font-medium leading-6 text-gray-900">
              What is my goal and  how I will work hard to achieve my goal?
            </p>
            <p className="mt-2">
              <p className="text-base leading-6 text-gray-500">
                My goal is to become a person who will look at back after 5 years and can say whatever I did ,I did with my whole heart.Currently I am doing web developing.I give my 110 percent effort into this. There are people who are better at this game than me.But it does not bother me at all.Because I know that only thing is matter to me is that if I give my best to the work or not.
              </p>
            </p>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  )
}
