import { AiFillCopyrightCircle } from 'react-icons/ai'
import { MdMail } from 'react-icons/md'
import { AiOutlineWhatsApp } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className="mt-4 mb-10 lg:mb-0">
            <div className="flex h-16 items-center justify-between text-xs font-normal text-gray-500 py-4 px-2 md:px-4 w-full bg-[#20202a]">
                <div className='flex items-center'>
                    <div className="mr-1 text-base">
                        <AiFillCopyrightCircle />
                    </div>
                    <span>2023 All Rights Reserved.</span>
                </div>
                <div className="flex items-center">
                    <a href='https://www.fiverr.com/codeworthy' target="_blank">Made with ❤️ by <span className='font-bold'>Osama</span></a>
                </div>
                <div className="hidden md:flex items-center">
                    <div className="mr-1 text-base">
                        <MdMail />
                    </div>
                    <div>muhammadosamajavaid@gmail.com</div>
                </div>
            </div>
        </div>
    )
}

export default Footer