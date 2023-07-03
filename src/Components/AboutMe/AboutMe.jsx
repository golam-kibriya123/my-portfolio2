import aboutImg from '../../assets/about-img.jpeg'
import SectionHeader from '../SectionHeader/SectionHeader';
const AboutMe = () => {
    return (
        <div className="h-[80vh] w-full  mt-32 
        -z-50 "
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-offset="200">
        <SectionHeader
        headerTitle={'About Myself'}
        ></SectionHeader>
            <div className='flex h-full w-full '

            >
                <div className="w-1/2 bg-[#754ef9] h-full relative">
                    <div className=" h-1/2 w-[60%]  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] absolute right-5  top-[25%] border-4 border-[#754ef9] overflow-hidden flex flex-col justify-center items-center">
                        <img src={aboutImg} alt="" />

                    </div>
                </div>


                <div className="w-1/2  h-full relative">
                    <div className=" h-[70%] w-full shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] absolute left-0-0  top-[15%]   p-5 bg-[#754ef9] text-white">
                        <h1 className='font-bold text-2xl'>I am Golam Kibriya</h1>
                        <h1 className='text-xl font-semibold my-3'>I am junior react js front-end web developer</h1>
                        <p>I am learning web development form 2021, on this 2 year of journey I am complete some project.
                            As a react developer, I use bootstrap and tailwind CSS for style website layout use react JS and
                            some of react component library to make easy my work, on back-end I am using express JS and
                            for database mongoDB, use firebase for authentication. On some project I am continuously work
                            10 to 12 days just for finish it on time.</p>
                    </div>
                </div>
            </div>






        </div>
    );
};

export default AboutMe;