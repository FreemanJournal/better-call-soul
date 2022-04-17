import React from 'react'

export default function Footer() {
  const date = new Date();
  return (

    <footer class="px-3 py-8 bg-slate-600 text-gray-200 transition-colors duration-200">
      <div class="flex flex-col">
     
        <div class="flex gap-1 items-center justify-center">
          <span class="">
          &#169; {date.getFullYear()}
          </span>
          <span class="">
          Copyright: 
          <a class=" hover:text-primary-gray-20 font-bold hover:underline underline-offset-1" href="https://www.linkedin.com/in/md-ishaque-29b43612a">
              Md Ishaque
            </a>
          </span>
        
          
        </div>
      </div>
    </footer>

  )
}
