import LanguageSwitcher from '@/components/shared/language-switcher'
import ModeToggle from '@/components/shared/mode-toggle'
import ResumeDownload from '@/components/shared/resume-downloder'
import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <div className='flex justify-between py-5 items-center'>
            <Link href={'/'} className="text-3xl text-black font-poppins font-extrabold hover:text-[#00FF7F]  transition-all duration-300 dark:text-white dark:hover:text-[#00FF7F]">begi.dev</Link>

            <div>
                <ul className='flex gap-3 md:gap-5'>
                    <ModeToggle />
                    <LanguageSwitcher />
                    <ResumeDownload />
                </ul>
            </div>
        </div>
    )
}

export default Navbar
