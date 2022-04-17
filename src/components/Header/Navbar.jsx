import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { signOut } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { NavLink, useNavigate } from 'react-router-dom'
import auth from '../../utilities/firebase.init'





export default function Navbar() {
    const [user] = useAuthState(auth)
    const [display, setDisplay] = useState(false);
    const navigate = useNavigate()

    useEffect(() => user ? setDisplay(true) : setDisplay(false), [user])

    const navigation = [
        { name: 'Home', href: '/', current: true },
        { name: 'Blogs', href: '/blog', current: true },
        { name: 'About', href: '/about', current: true },
        { name: 'Sign In', href: '/signIn', current: !display },
        { name: 'Sign Up', href: '/signUp', current: !display },
    ]

    return (
        <div className="sticky">
            <Disclosure as="nav" className="bg-white">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-slate-600 hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                {/* Desktop Menu */}
                                <div className=" flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                                    <div className="flex-shrink-0 flex items-center">
                                        <h1 className='text-emerald-400 font-bold cursor-pointer' onClick={() => navigate('/')} >Better Call Soul</h1>
                                    </div>
                                    <div className="hidden sm:block sm:ml-6">
                                        <div className="flex space-x-4 my-5">
                                            {navigation.map((item) => (
                                                <NavLink
                                                    key={item.name}
                                                    to={item.href}
                                                    style={({ isActive }) => isActive ? { color: "black" } : { color: "" }}
                                                    className={`${item.current ? 'block' : "hidden"} bg-transparent  cursor-pointer text-slate-400 hover:bg-gray-200 hover:text-slate-900 px-3 py-2 rounded-md text-base font-medium`}

                                                >
                                                    {item.name}
                                                </NavLink>
                                            ))}
                                            {/* Sign Out */}
                                            {user && <button
                                                className='bg-transparent  cursor-pointer text-slate-400 hover:bg-gray-200 hover:text-slate-900 block px-3 py-2 rounded-md text-base font-medium'
                                                onClick={() => signOut(auth)}
                                            >
                                                SignOut
                                            </button>}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* Dropdown Menu */}
                        <Disclosure.Panel className="">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {navigation.map((item) => {
                                    return (
                                        <Disclosure.Button
                                            key={item.name}
                                            as={NavLink}
                                            to={item.href}

                                            className={`${item.current ? 'block' : "hidden"} bg-transparent border cursor-pointer text-slate-500 hover:bg-gray-200 hover:text-slate-900 px-3 py-2 rounded-md text-base font-medium`}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    )
                                })}
                                {/* Sign Out */}
                                {user && <button
                                    className='w-full bg-transparent border cursor-pointer text-slate-500 hover:bg-gray-200 hover:text-slate-900 px-3 py-2 rounded-md text-base font-medium'
                                    onClick={() => signOut(auth)}
                                >
                                    SignOut
                                </button>}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    )
}
