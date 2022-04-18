import React from 'react'
import Footer from '../components/Footer/Footer'

export default function BlogPage() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-8 pb-8">
        <h2 className="text-4xl  py-5 pl-3 leading-9 font-extrabold tracking-tight bg-emerald-400 text-white  mb-12" style={{boxShadow: "inset 0 8px 8px -8px rgba(0, 0, 0, 0.3), inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3)"}}>
         <span className='drop-shadow-md'> FAQs</span>
        </h2>
        <ul className="flex items-start gap-8 flex-wrap">
          <li className="w-full">
            <p className="text-lg font-medium leading-6 text-gray-900">
              Difference between authorization and authentication?
            </p>
            <p className="mt-2">
              <p className="text-base leading-6 text-gray-500">
                Authentication means verifying user's credential . Authorization is the process of determining what files and data a user can and cannot access. As an example,students of a specific online course are required to authenticate themselves before accessing resources. This is called authentication.Once their level of access is authorized, the system that  determines exactly what data and files the students are authorized to access is called authorization.

              </p>
            </p>
          </li>
          <li className="w-full">
            <p className="text-lg font-medium leading-6 text-gray-900">
              Why are you using firebase? What other options do you have to implement authentication?
            </p>
            <p className="mt-2">
              <p className="text-base leading-6 text-gray-500">
                Currently,I am using firebase for authentication purpose. <br />
                There are also several other options like Auth0,Amazon Cognito,Mongodb,Heroku etc. available for authentication. <br />
                1.Auth0 : it is a set of unified APIs and tools that instantly enables Single Sign On.We can integrate Auth0 with react. <br />
                2.Amazon Cognito : I can create unique identities for my users through a number of public login providers (Amazon, Facebook, and Google) and also support unauthenticated guests.
              </p>
            </p>
          </li>
          <li className="w-full">
            <p className="text-lg font-medium leading-6 text-gray-900">
              What other services does firebase provide other than authentication ?
            </p>
            <p className="mt-2">
              <p className="text-base leading-6 text-gray-500">
                Other than authentication firebase also offers database service,hosting service ,files storage facility,serverless mobile backend service , machine learning service etc.Most of them are free up to certain level. <br />

                1.Database : It offers Realtime updates, powerful queries, automatic scaling with store and sync data in real time. <br />
                2.Hosting : User can deploy web and mobile web apps in seconds using a secure global content delivery network in firebase. <br />
                3.Storage : we can also store and retrieve user-generated files like images, audio, and video in firebase.

              </p>
            </p>
          </li>

        </ul>
      </div>
      <Footer />
    </>
  )
}
