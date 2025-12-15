import Image from "next/image";
import { about } from "@/assets";
const AboutHero = () => {
	return (
		<div className=' text-white p-8 flex flex-col gap-5'>
			<div className='flex justify-between p-8 md:px-20 lg:px-32 xl:px-48 2xl:px-64 items-center'>
				<p className='max-w-sm text-start text-xl font-bold'>
					We're not just an agency. We're advocates for athletes who
					deserve more recognition, more opportunities, and more
					support.
				</p>

				<p className='hidden md:flex text-end max-w-sm text-sm'>
					We created MGS to change that narrative. Our founders
					recognized a gap in the market, a need for an agency that
					truly prioritizes the athlete, champions the underdog, and
					fights relentlessly for opportunities that others might
					overlook.
				</p>
			</div>
			<div className='md:h-190 h-100'>
				<Image
					src={about}
					alt='About'
					className='w-full h-full object-contain'
				/>
			</div>
		</div>
	);
};
export default AboutHero;
