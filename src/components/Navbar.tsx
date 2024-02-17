'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import close from "../assets/img/close.svg"
import logo from "../assets/img/logo-saranatekno.png"
import menu from "../assets/img/menu.svg"
import { navLinks } from '@/assets/data'

const NavbarCompt = () => {

  const [isScroll, setIsScroll] = useState<Boolean>(false);
  const [menuMobile, setMenuMobile] = useState<Boolean>(false);
  const [toggle, setToggle] = useState(false)

  const handleClick = (e: any) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");
    const locationTarget = document.querySelector(targetAttr).offsetTop;
    window.scrollTo({
      top: locationTarget - 110,
      left: 0,
    })
  }

  const closeMenuMobile = () => {
    setMenuMobile(menuMobile!)
    setToggle(false)
  }

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsScroll(true)
    } else {
      setIsScroll(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }

  useEffect(() => {
    handleScroll()
  }, [])

  return (
    <nav className={`w-full md:h-[80px] h-[70px] sticky backdrop-blur-md backdrop-brightness-100 bg-white/90 top-0 z-[999] md:leading-[70px] leading-[65px] flex items-center transition-all duration-500 ease-in-out ${isScroll ? "shadow-lg" : ""} `}  >
      <div className="container">
        <div className="flex items-center justify-between">
          <Image src={logo} alt="Sarana Tekno" className='object-contain lg:w-40 w-32' />
          <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            {navLinks?.map((item, index) => (
              <li key={index} className={` cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}>
                <Link onClick={handleClick} href={`${item.path}`} className=" text-smallTextColor font-normal">
                  {item.display}
                </Link>
              </li>
            ))}
            <li><Link onClick={handleClick} href="#hire" className='font-normal text-lg bg-black text-[#fff] px-[27px] py-[14px] rounded-[30px] ml-7'>Hire Us</Link></li>
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <button className='text-[28px] object-contain  duration-400 ease-in' onClick={() => setToggle((prev) => !prev)}>
              {toggle ? <Image src={close} alt='close' className='w-7' /> : <Image src={menu} alt='menu' className='w-7' />}
            </button>
            <div className={`${toggle ? "flex" : "hidden"} p-[14px] bg-[#fff] shadow-2xl text-white absolute top-16 right-0 mx-5 my-[16px] min-w-[160px] bg-fixed rounded-xl sidebar duration-500 ease-in`}>
              <ul className='list-none flex flex-col justify-end items-center flex-1'>
                {navLinks.map((item, index) => (
                  <li key={index} className={`font-normal text-white leading-10 cursor-pointer text-[15px] ${index === navLinks.length - 1 ? "mr-0" : "mb-0"}`} onClick={closeMenuMobile}>
                    <Link key={index} onClick={handleClick} href={`${item.path}`} className="text-white">
                      {item.display}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link onClick={handleClick} href="#hire" className='font-normal lg:text-lg text-[15px] bg-black text-[#fff] px-[22px] py-[10px] rounded-[30px] ml-0'>Hire Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav >
  )
}

export default NavbarCompt