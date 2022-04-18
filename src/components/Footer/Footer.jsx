import React from 'react'

export default function Footer() {
  const date = new Date();
  return (

    <footer className="px-3 py-8 bg-slate-600 text-gray-200 transition-colors duration-200">
      <div className="flex flex-col">

        <div className="flex gap-1 items-center justify-center">
          <span className="">
            &#169; {date.getFullYear()}
          </span>
          <span className="">
            Copyright

          </span>
          <a className=" hover:text-primary-gray-20 font-bold hover:underline underline-offset-1" href="https://www.linkedin.com/in/md-ishaque-29b43612a">
            BetterCallSaul.Inc
          </a>
          <span>All Rights Reserved.</span>


        </div>
      </div>
    </footer>

  )
}
