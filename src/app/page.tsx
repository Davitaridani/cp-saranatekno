import { socialProv, data } from '../assets/data/index'
import Image from 'next/image'
import imageHero from '../assets/img/Group 15.png'
import heroBannner from '../assets/img/Group 17.png'
import doubleTick from '../assets/img/Double Tick.png'
import Card from '@/components/Card'
import ImageService from "../assets/img/ServiceSection Image.png"
import logoCompany_1 from "../assets/img/logo_jasuindo.png"
import logoCompany_2 from "../assets/img/logo_datindo.png"
import logoCompany_3 from "../assets/img/logo_tmc.png"
import logoCompany_4 from "../assets/img/logo_csl.png"
import logoCompany_5 from "../assets/img/Frame 138.png"
import Link from 'next/link'

export default function Home() {
  return (
    <main>

      <section className='lg:pb-24 lg:pt-14 pt-16 pb-16' id='home'>
        <div className="container">
          <div className="flex flex-col-reverse lg:flex-row justify-between mb-10 lg:mb-16">
            <h1 className="lg:text-[66px] text-[33px] gray md:leading-[1.1] leading-[1.2] text-black">Craft Advanced Product <span className="lg:block text-gray">Banking & Industries</span></h1>
            <Image src={imageHero} alt='image banner' className='obect-contain lg:mb-0 mb-5' />
          </div>
          <div className="relative ">
            <ul className='absolute lg:bottom-7 lg:left-7 bottom-4 left-3 list-none flex flex-wrap lg:gap-3 gap-2 lg:w-[40%] w-auto'>
              {socialProv?.map((item, index) => (
                <li key={index} className='backdrop-blur-sm bg-white/50 cursor-pointer rounded-full lg:py-3 lg:px-[23px] py-1 px-3 hover:bg-[#fff] transition-all duration-700 ease-in-out lg:border-2 border border-[#fff] font-semibold md:text-sm text-[11px] text-[#fff] hover:text-black'>{item}</li>
              ))}
            </ul>
            <Image src={heroBannner} alt='hero image' className='lg:object-contain w-auto h-40 lg:h-auto' />
          </div>
        </div>
      </section>

      <section className='pb-16 lg:pb-24' id='product'>
        <div className="container">
          <div className="lg:flex flex-row gap-5 mb-10 md:mb-0">
            <div className="basis-1/2 mb-6 lg:mb-16">
              <h1 className='lg:title-text title-text-sm'>We developed <span className='lg:block'> Product for Banking</span> and Orther Industries</h1>
            </div>
            <div className="basis-1/2 items-center flex">
              <p className='text-paragraf'>Products that we have developed and used in several work areas in banking and other industries in accordance with the needs of each business are the work of our RnD. The following are products that we have produced and used several places.</p>
            </div>
          </div>
          <div className="md:grid grid-cols-2 gap-5 lg:space-y-0 space-y-4">
            {data && data.map((item: any, index: number) => (
              <Card data={item} key={index} />
            ))}
          </div>
        </div>
      </section>

      <section className='pb-16 lg:pb-24' id='service'>
        <div className="container">
          <div className="lg:flex flex-row items-center mb-10 lg:mb-16">
            <div className="basis-1/2">
              <h1 className='lg:title-text title-text-sm mb-6 lg:mb-0'>We are Managing and Developing</h1>
            </div>
            <div className="basis-1/2">
              <p className='text-paragraf text-paragraf-sm'>Through the services business model, PT Saranatekno has two service models, namely Manage Service and InHouse Services which we are still managing and developing until now.</p>
            </div>
          </div>
          <div className="lg:flex flex-row md:space-y-7 space-y-16">
            <div className="basis-1/2 pr-0 lg:pr-28">
              <div className="lg:mb-11 mb-7">
                <h3 className='text-xl font-semibold md:mb-3 mb-2'>Manage Service</h3>
                <p className='text-paragraf-sm lg:text-paragraf mb-2'>Along with the increasing need for real time reports and information, this has prompted us to develop IoT devices, to fulfill these needs.</p>
                <ul className='space-y-1'>
                  <li className='flex items-center gap-1 lg:text-paragraf text-paragraf-sm '><Image src={doubleTick} alt='icon' /> VMS</li>
                  <li className='flex items-center gap-1 lg:text-paragraf text-paragraf-sm '><Image src={doubleTick} alt='icon' /> GPS tracking system.</li>
                  <li className='flex items-center gap-1 lg:text-paragraf text-paragraf-sm '><Image src={doubleTick} alt='icon' /> Industial control and monitoring.</li>
                </ul>
              </div>
              <div className="">
                <h3 className='text-xl font-semibold md:mb-3 mb-2'>Inhouse Development</h3>
                <p className='lg:text-paragraf text-paragraf-sm mb-2'>As a local company, we have RnD that is able to create and create special applications according to customer needs.</p>
                <ul className='space-y-1'>
                  <li className='flex items-center gap-1 lg:text-paragraf text-paragraf-sm '><Image src={doubleTick} alt='icon' /> NSICCS Applet.</li>
                  <li className='flex items-center gap-1 lg:text-paragraf text-paragraf-sm '><Image src={doubleTick} alt='icon' /> Taspen e-karip.</li>
                  <li className='flex items-center gap-1 lg:text-paragraf text-paragraf-sm '><Image src={doubleTick} alt='icon' /> Edapem Platform.</li>
                </ul>
              </div>
            </div>
            <div className="basis-1/2">
              <Image src={ImageService} alt='service' />
            </div>
          </div>
        </div>
      </section>

      <section className='pb-14 lg:pb-[90px]'>
        <div className="container">
          <h1 className='text-center lg:title-text title-text-sm mb-7'>Our Partners</h1>
          <div className="flex md:flex-row flex-col md:justify-around justify-center items-center space-y-4 md:space-y-0">
            <Image src={logoCompany_1} alt='Jasuindo' className='object-contain' />
            <Image src={logoCompany_2} alt='Datindo' className='object-contain' />
            <Image src={logoCompany_3} alt='TMC' className='object-contain' />
            <Image src={logoCompany_4} alt='Cipta' className='object-contain' />
            <Image src={logoCompany_5} alt='PT.Mecosuprin Grafia' className='object-contain' />
          </div>
        </div>
      </section>

      <section className='pb-14 lg:pb-[90px]' id='contact'>
        <div className="container">
          <h1 className='text-center lg:title-text title-text-sm lg:mb-11 mb-8'>Contact</h1>
          <div className="md:flex flex-row gap-8">
            <div className="basis-[100%]">
              <div className="lg:mb-0 mb-8">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3966.185461666829!2d106.63649287895656!3d-6.239270338187993!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbf3ea426fcb%3A0x3269e231ce8a850e!2sBLOK.%20D%2C%20Jl.%20Ki%20Hajar%20Dewantara%20Blok%20D%2C%20Pakulonan%20Bar.%2C%20Kec.%20Klp.%20Dua%2C%20Kabupaten%20Tangerang%2C%20Banten%2015810!5e0!3m2!1sen!2sid!4v1704265263091!5m2!1sen!2sid" width="100%" height="300" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            <div className="space-y-2 basis-auto">
              <div className="">
                <h3 className='font-semibold mb-1 lg:text-xl text-lg'>Location</h3>
                <Link href={"https://maps.app.goo.gl/KhPzosmeSkWQ55Fi8"} className='hover:underline md:text-paragraf text-paragraf-sm' target='_blank'>Ruko Golden 8 Gading Serpong Blok D No. 20 Pakulon Barat, Kelapa Dua, Tanggerang, Banten</Link>
              </div>
              <div>
                <h3 className='font-semibold mb-1 lg:text-xl text-lg'>Email</h3>
                <Link href={"#"} className='hover:underline'>info@saranatekno.com</Link>
              </div>
              <div>
                <h3 className='font-semibold mb-1 lg:text-xl text-lg'>Call</h3>
                <Link href={"#"} className='hover:underline'>+62 21 29834105</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pb-14' id='hire'>
        <div className="container">
          <div className="text-center lg:mb-11 mb-9">
            <h1 className='md:title-text title-text-sm mb-2'>Hire Us</h1>
            <p className='text-lg text-[#000]'>Send us message and tell us about your project!</p>
          </div>
          <form>
            <div className="flex gap-4">
              <label className="block w-full">
                <input className="input-form w-full placeholder-slate-400  contrast-more:placeholder-slate-500" placeholder='Name' />
              </label>
              <label className="block w-full">
                <input className="input-form w-full placeholder-slate-400  contrast-more:placeholder-slate-500" placeholder='Email' />
              </label>
            </div>
            <label className="block w-full">
              <input className="input-form w-full placeholder-slate-400  contrast-more:placeholder-slate-500" placeholder='Subject' />
            </label>
            <label className="block w-full">
              <textarea className="input-form w-full placeholder-slate-400  contrast-more:placeholder-slate-500" placeholder='Message' />
            </label>
            <button className='bg-slate-700 text-slate-50 rounded-[20px] mx-auto flex justify-center bg-[#303030] text-[#fff]  py-3 px-6 mt-8'>Send Message</button>
          </form>
        </div>
      </section>

    </main>
  )
}
