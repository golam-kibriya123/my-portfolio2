
const SectionHeader = ({headerTitle}) => {
    return (
        <div className='w-full flex flex-row justify-center py-10 mt-10 '>
            <h1 className=' text-[#754ef9] text-2xl font-bold relative'>{headerTitle}
                <span className='w-full h-1 bg-[hsl(254,93%,64%)] absolute -bottom-2 left-0'></span>
            </h1>


        </div>
    );
};

export default SectionHeader;