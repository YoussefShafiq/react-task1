import React from 'react'

export default function About() {
    return <>

        <div className='bg-gray-200 min-h-[calc(100vh-270px)] flex justify-center items-center'>
            <div className="container m-auto flex flex-col items-center">
                <h1 className="uppercase text-orange-600 font-extrabold text-4xl mb-5 p-5 after relative">
                    about section
                    <i className="fa-solid fa-star text-[20px] bg-gray-200 px-2 absolute text-orange-600 bottom-0 translate-y-1/4 w-11 text-center left-1/2 translate-x-[-50%]"></i>
                </h1>
                <div className="flex flex-wrap p-4">
                    <div className="w-full md:w-1/2 text-orange-950">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquam odio quod reprehenderit assumenda beatae dolores obcaecati tempora vero deleniti commodi impedit suscipit, quidem molestias eveniet accusantium distinctio dicta laborum!
                    </div>
                    <div className="w-full md:w-1/2 text-orange-950">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquam odio quod reprehenderit assumenda beatae dolores obcaecati tempora vero deleniti commodi impedit suscipit, quidem molestias eveniet accusantium distinctio dicta laborum!
                    </div>
                </div>
            </div>

        </div>



    </>

}
