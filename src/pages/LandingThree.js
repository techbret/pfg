/* This example requires Tailwind CSS v2.0+ */
import LandingImage from '../assets/landingImage.png'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import ContactForm from '../components/ContactForm'

/* This example requires Tailwind CSS v2.0+ */
import {
    BoltIcon,
    ChatBubbleBottomCenterTextIcon,
    EnvelopeIcon,
    GlobeAltIcon,
    ScaleIcon,
  } from '@heroicons/react/24/outline'
  
  const transferFeatures = [
    {
      id: 1,
      name: 'Competitive exchange rates',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: GlobeAltIcon,
    },
    {
      id: 2,
      name: 'No hidden fees',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: ScaleIcon,
    },
    {
      id: 3,
      name: 'Transfers are instant',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: BoltIcon,
    },
  ]
  const communicationFeatures = [
    {
      id: 1,
      name: 'Mobile notifications',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: ChatBubbleBottomCenterTextIcon,
    },
    {
      id: 2,
      name: 'Reminder emails',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: EnvelopeIcon,
    },
  ]

const features = [
  {
    name: 'Analytics',
    href: '#',
    description: 'Get a better understanding of where your traffic is coming from.',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    href: '#',
    description: 'Speak directly to your customers in a more meaningful way.',
    icon: CursorArrowRaysIcon,
  },
  { name: 'Security', href: '#', description: "Your customers' data will be safe and secure.", icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    href: '#',
    description: "Connect with third-party tools that you're already using.",
    icon: Squares2X2Icon,
  },
  {
    name: 'Automations',
    href: '#',
    description: 'Build strategic funnels that will drive your customers to convert',
    icon: ArrowPathIcon,
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: LifebuoyIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function LandingThree() {
  return (
    <div className="relative max-w-8xl mx-auto">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-3 lg:items-center lg:gap-8">
          

            <div className="relative -mx-4 mt-10 lg:col-start-1 col-span-2 lg:mt-0">
              <svg
                className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
              </svg>
              <img
                className="relative mx-auto w-full"
                
                src={LandingImage}
                alt=""
              />
            </div>
            <div className='md:mr-36'>
                <ContactForm/>
            </div>
            
         



          </div>
          <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg bg-green-900 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-3xl">
                <span className="block">DON’T SETTLE FOR PIECEMEAL</span>
                <span className="block">INVESTMENT ADVICE.</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-200">
              Our integrated wealth planning process is designed to strategically coordinate aspects of your financial life, including tax planning, estate planning, insurance, mortgages and more – now and into the future.
              </p>
              <p className="mt-4 text-lg leading-6 text-gray-200">
              We are an integrated wealth management firm offering comprehensive strategies designed to elevate your financial potential and help maximize future opportunities. Barron’s has named us the #1 independent financial advisory firm in the nation four years in a row. Awarded each September (2018 -2021) by Barron’s, based on data within a 12-month period. Compensation paid for use and distribution of rating.
              </p>
              <h1 className='text-white text-2xl mt-4'>Call: <span className='font-bold text-yellow-500 text-3xl'>(925) 314-8500</span></h1>
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-2">
            <img
              className="translate-x-6 translate-y-1 transform rounded-md object-cover object-left-top sm:translate-x-6 "
              src="https://www.edelmanfinancialengines.com/wp-content/themes/EFE_Divi_Child_Theme/images/digo/dont-settle.jpg"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
    </div>
    <div className='max-w-7xl mx-auto'>
        <div>
            <h2 className='text-3xl text-green-900 font-extrabold mb-6'>OUR SERVICES</h2>
        </div>
        <div className='grid grid-cols-6 gap-4 text-center'>
            <div>
                <h1 className='text-xl text-yellow-500 font-semibold text-center mb-6'>FINANCIAL PLANNING</h1>
            </div>
            <div>
                <h1 className='text-xl text-yellow-500 font-semibold text-center mb-6'>RETIREMENT PLANNING</h1>
            </div>
            <div>
                <h1 className='text-xl text-yellow-500 font-semibold text-center mb-6'>INVESTMENT MANAGEMENT</h1>
            </div>
            <div>
                <h1 className='text-xl text-yellow-500 font-semibold text-center mb-6'>TAX<br></br> STRATEGY</h1>
            </div>
            <div>
                <h1 className='text-xl text-yellow-500 font-semibold text-center mb-6'>ESTATE<br></br> PLANNING</h1>
            </div>
            <div>
                <h1 className='text-xl text-yellow-500 font-semibold text-center mb-6'>INSURANCE PLANNING</h1>
            </div>
            

        </div>
        <div className="relative mt-2">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-yelloy-700"></div>
            </div>
          </div>

    </div>

    <div className="bg-green-900 mt-12">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted by investors all over the globe
          </h2>
          <p className="mt-3 text-xl text-yellow-500 sm:mt-4">
          They don’t earn commissions for the products and services they recommend. We are a fiduciary. We do what’s right for you – always. We are your financial advocate, and we always put your interests above all others.
          </p>
        </div>
        <dl className="mt-10 text-center sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-yellow-500">Years of Experience</dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-white">40</dd>
          </div>
          <div className="mt-10 flex flex-col sm:mt-0">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-yellow-500">In Client Assets</dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-white">$2B</dd>
          </div>
          <div className="mt-10 flex flex-col sm:mt-0">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-yellow-500">Financial Planners</dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-white">48+</dd>
          </div>
        </dl>
      </div>
    </div>

        </div>
  )
}
