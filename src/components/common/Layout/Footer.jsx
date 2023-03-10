import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const fullYear = new Date().getFullYear();

    return (
        <>
            <div className=" bg-gray-900">
                <div className="max-w-2xl mx-auto text-white py-10">
                    <div className="text-center">
                        <h3 className="text-3xl mb-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-orange-500"> DIGITEX </h3>
                        <p>  لذت ببر | خرید کن </p>
                        <div className="flex justify-center my-10">
                            <div className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2">
                                <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8" />
                                <div className="text-left ml-3">
                                    <p className='text-xs text-gray-200'>Launching Soon on </p>
                                    <p className="text-sm md:text-base"> </p>
                                </div>
                            </div>
                            <div className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2">
                                <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8" />
                                <div className="text-left ml-3">
                                    <p className='text-xs text-gray-200'>Launching Soon on </p>
                                    <p className="text-sm md:text-base"> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-xs lg:text-sm text-gray-400">
                        <div className="order-1 md:order-2">
                            <Link href={"/about"} passHref={true}>
                                <span className="px-2 border-l">دریاره ما</span>
                            </Link>
                            <Link href={"/contact"} passHref={true}>
                                <span className="px-2 border-l">ارتباط با ما</span>
                            </Link>
                            <Link href={"/privacy"} passHref={true}>
                                <span className="px-2 border-l"> حریم خصوصی</span>
                            </Link>
                            <Link href={"/terms"} passHref={true}>
                                <span className="px-2 border-l">قوانین</span>
                            </Link>
                        </div>

                        <p className="order-2 md:order-1 mt-8 md:mt-0 mb-12 md:mb-0">
                            {fullYear} &copy; 
                            <Link 
                                href={"/"} 
                                passHref={true}
                                className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-orange-500"
                            >
                                {' '}DIGITEX.
                            </Link>
                            {' '}Designed by{' '}
                            <Link 
                                href="https://www.wordpressstudio.ir" 
                                target={"_blank"}
                                className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500"
                                passHref={true}
                            >
                                RahiWebDeveloper
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer