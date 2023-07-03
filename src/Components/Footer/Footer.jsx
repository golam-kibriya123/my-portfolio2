import { BsArrowUpSquareFill } from 'react-icons/bs';
import { FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full md:h-[200px] bg-[#000] text-[#aeacac] text-sm flex flex-col justify-center items-center  relative z-10">
            <p className='flex justify-center items-center'> <FaRegCopyright></FaRegCopyright>
                All copyright goes to Golam Kibriya and his company only</p>
            <a className='absolute right-5 top-5  cursor-pointer hover:text-[#754ef9] text-white
             bg-[#754ef9] hover:bg-white rounded-lg text-4xl ' href='#home'>
                <BsArrowUpSquareFill >

                </BsArrowUpSquareFill>
            </a>
        </footer>
    );
};

export default Footer;