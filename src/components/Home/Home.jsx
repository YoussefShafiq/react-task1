import React from "react";
import avatar from "../../assets/avatar.svg";
export default function Home() {
    return (
        <>


            <div className='bg-gray-200 min-h-[calc(100vh-270px)] flex justify-center items-center'>
                <div className="container m-auto flex flex-col items-center">
                    <img src={avatar} alt="avatar" className="size-72 mx-auto" />
                    <h1 className="uppercase text-orange-600 font-extrabold text-4xl mb-5 p-5 after relative">
                        START FRAMEWORK
                        <i className="fa-solid fa-star text-[20px] bg-gray-200 px-2 absolute text-orange-600 bottom-0 translate-y-1/4 w-11 text-center left-1/2 translate-x-[-50%]"></i>
                    </h1>
                    <p>Graphic Artist - Web Designer - Illustrator</p>

                </div>

            </div>
        </>
    );
}