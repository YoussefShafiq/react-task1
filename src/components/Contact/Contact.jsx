import React from 'react'

export default function () {


    return <>

        <div className='bg-gray-200 min-h-[calc(100vh-270px)] p-3'>
            <div className="container m-auto flex flex-col items-center">
                <h1 className="uppercase text-orange-600 font-extrabold text-4xl mb-5 p-5 after relative">
                    about section
                    <i className="fa-solid fa-star text-[20px] bg-gray-200 px-2 absolute text-orange-600 bottom-0 translate-y-1/4 w-11 text-center left-1/2 translate-x-[-50%]"></i>
                </h1>

                <div className='md:w-2/3 w-full flex flex-col'>
                    <h3 className='ContactLabel'>userName</h3>
                    <input type="text" className='contactInput ' placeholder='userName' />
                    <h3 className='ContactLabel'>userAge</h3>
                    <input type="number" className='contactInput ' placeholder='userAge' />
                    <h3 className='ContactLabel'>userEmail</h3>
                    <input type="text" className='contactInput ' placeholder='userEmail' />
                    <h3 className='ContactLabel'>userPassword</h3>
                    <input type="password" className='contactInput ' placeholder='userPassword' />
                    <button id='btn' className='bg-orange-400 w-fit m-auto p-2  rounded-md text-orange-50 hover:bg-orange-500 transition-all'>submit</button>
                </div>
            </div>
        </div>

    </>
}
