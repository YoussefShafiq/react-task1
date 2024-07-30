import React from 'react'

export default function Footer() {
    return <>
        <div className='bg-sky-900 text-sky-50 flex flex-wrap py-9 md:py-14 p-5'>
            <div className='container  m-auto flex flex-wrap'>
                <div className='w-full md:w-1/3 text-center flex flex-col text-xl'>
                    <h2 className='font-bold uppercase text-3xl'>location</h2>
                    <p>cairo, Egypt</p>
                    <p>remote</p>
                </div>
                <div className='w-full md:w-1/3 text-center'>
                    <h2 className='font-bold uppercase text-3xl'>AROUND THE WEB</h2>
                    <div className='flex justify-center gap-3 py-3'>
                        <div className="gird">
                            <i className="fa-brands fa-facebook m-auto p-2 border hover:bg-sky-100 hover:text-sky-950 cursor-pointer transition-all rounded-full aspect-square"></i>
                        </div>
                        <div className="gird">
                            <i className="fa-brands fa-linkedin m-auto p-2 border hover:bg-sky-100 hover:text-sky-950 cursor-pointer transition-all rounded-full aspect-square"></i>
                        </div>
                        <div className="gird">
                            <i className="fa-brands fa-twitter m-auto p-2 border hover:bg-sky-100 hover:text-sky-950 cursor-pointer transition-all rounded-full aspect-square"></i>
                        </div>
                        <div className="gird">
                            <i className="fa-solid fa-globe m-auto p-2 border hover:bg-sky-100 hover:text-sky-950 cursor-pointer transition-all rounded-full aspect-square"></i>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/3 text-center'>
                    <h2 className='font-bold uppercase text-3xl'>ABOUT FREELANCER</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, animi.</p>
                </div>
            </div>
        </div>
        <div className='bg-sky-950 text-center text-sky-50 p-5'>
            <p>Copyright © Your Website 2021</p>
        </div>
    </>
}
