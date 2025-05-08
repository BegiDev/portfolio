import LanguageSwitcher from '@/components/shared/language-switcher'
import ModeToggle from '@/components/shared/mode-toggle'
import ResumeDownload from '@/components/shared/resume-downloder'
import Link from 'next/link'
import React from 'react'
import { PencilLine } from 'lucide-react'

function Navbar() {
    return (
        <div className='flex justify-between py-5'>
            <Link href={'/'} className="text-3xl text-black font-poppins font-extrabold hover:text-[#00FF7F]  transition-all duration-300 dark:text-white dark:hover:text-[#00FF7F]">begi.dev</Link>

            <div>
                <ul className='flex gap-2 md:gap-5'>
                    <ModeToggle />
                    <Link href="/blog" className="w-[38px] h-[38px] md:w-[45px] md:h-[45px] border-2 rounded-full flex items-center justify-center">
                    <PencilLine size={18} />
                    </Link>
                    <LanguageSwitcher />
                    <ResumeDownload />
                </ul>
            </div>
        </div>
    )
}

export default Navbar


