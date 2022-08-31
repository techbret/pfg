import { useState } from 'react'
import { Switch } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24 ">
      <div className="relative mx-auto max-w-xl">
        <svg
          className="absolute left-full translate-x-1/2 transform"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <svg
          className="absolute right-full bottom-0 -translate-x-1/2 transform"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">Get Your</h2>
          <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">Complimentary Financial Plan</h2>          .
         
        </div>
        <div className="">
          <form action="#" method="POST" className="sm:col-span-2">
            <div>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-gray-300 py-2 px-4 shadow-sm bg-zinc-100 focus:border-green-900 focus:ring-green-900"
                  placeholder='First name'
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-gray-300 py-2 px-4 bg-zinc-100 shadow-sm focus:border-green-900 focus:ring-green-900"
                  placeholder='Last Name'
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-gray-300 py-2 px-4 bg-zinc-100 shadow-sm focus:border-green-900 focus:ring-green-900"
                  placeholder='Email'
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-2">              
              <div className="relative mt-2 rounded-md shadow-sm">                
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-md border-gray-300 py-2 px-4 bg-gray-100 focus:border-green-900 focus:ring-green-900"
                  placeholder="Phone Number"
                />
              </div>
              <div className="relative mt-2 rounded-md shadow-sm">                
                <input
                  type="text"
                  name="zip"
                  id="zip"
                  autoComplete="zip"
                  className="block w-full rounded-md border-gray-300 py-2 px-4 bg-gray-100 focus:border-green-900 focus:ring-green-900"
                  placeholder="Zip Code"
                />
              </div>
              
            </div> 
            <div className="sm:col-span-2 mt-4">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-green-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-offset-2"
              >
                Get Started
              </button>
              <p className='text-xs mt-3'> By submitting this form and providing your phone number, you agree that Edelman Financial Engines may call or text you at the number you provided for transactional communications regarding scheduling appointments and appointment reminders. You are also agreeing to our Terms of Use and Privacy Policy. Standard text message rates may apply. You may opt out of receiving text messages at any time.</p>
              <p className='text-xs mt-1'>Limit one complimentary offer per household, per 18 months. Offer ends September 30, 2022, and is only applicable to households with minimum investable assets of $250,000. Must not have an existing Edelman Financial Engines wealth management account to qualify. Offer criteria may be waived at Edelman Financial Engines' discretion.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
