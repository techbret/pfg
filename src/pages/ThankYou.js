import React, { useEffect } from 'react'

export default function ThankYou() {
    useEffect(() => {
        document.body.classList.add('h-full');

        return () => {
                 
            document.body.classList.remove('h-full');
          };
    }, []);


  return (
    <>
    <div className='h-full'>
    <div className="flex items-center justify-center w-screen h-screen bg-gray-50">
      <div className="mx-auto max-w-max">
        <main className="sm:flex">
          <div className="">
            <div className="">
              <h1 className="text-4xl font-bold tracking-tight text-center text-gray-900 sm:text-5xl">Thank You</h1>
              <p className="mt-1 text-base text-gray-500 text-center">We will get back to you as soon as possible. Enjoy your download</p>
            </div>
            <div className="mt-10 flex space-x-3 ">
              <a
                href="#"
                className="text-center w-80 md:w-full mx-auto items-center rounded-md border border-transparent bg-green-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Schedule Appointment
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
    </div>
  </>
  )
}
