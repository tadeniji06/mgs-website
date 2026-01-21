import Image from "next/image";
import { about, aan, abt } from "@/assets";
const AboutHero = () => {
	return (
		<div className=' text-white p-8 flex flex-col gap-5'>
			<h2 className='text-center text-4xl font-bold'>ABOUT MGS</h2>
			<div className='flex justify-between p-8 md:px-20 lg:px-32 xl:px-48 2xl:px-64 items-center'>
				<p className='max-w-xl text-start text-2xl'>
					We're not just an agency. We're advocates for athletes who
					deserve more recognition, more opportunities, and more
					support.
				</p>

				<p className='hidden md:flex text-end max-w-xl text-2xl'>
					We created MGS to change that narrative. Our founders
					recognized a gap in the market, a need for an agency that
					truly prioritizes the athlete, champions the underdog, and
					fights relentlessly for opportunities that others might
					overlook.
				</p>
			</div>
			<div className='md:h-190 h-100'>
				<Image
					src={abt}
					alt='About'
					className='w-full h-full object-cover'
				/>
			</div>
		</div>
	);
};
export default AboutHero;
