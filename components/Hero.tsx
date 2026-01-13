import { vv } from "@/assets";
// import { Icon } from "@iconify/react";
import Image from "next/image";

const Hero = () => {
	return (
		<div className='md:h-175 h-100 w-full relative overflow-hidden'>
			<Image
				src={vv}
				alt='hero'
				fill
				className='w-full h-full object-contain md:object-cover'
				quality={90}
				style={{ zIndex: -2 }}
			/>

			{/* dark overlay */}
			<div className='absolute inset-0 bg-black/30' />

			{/* content */}
			<div className='relative z-10 p-4 flex md:gap-36 items-center justify-center h-full md:my-28 my-10'>
				<div className='text-white flex flex-col gap-5 max-w-3xl'>
					<p className='md:max-w-2xl font-bold text-3xl md:text-5xl'>
						Helping <span className='text-light-blue'>athletes</span>{" "}
						around the world, advocating for those who are skilled but
						not recognized.{" "}
					</p>

					{/* <div className='flex gap-8'>
						<button className='bg-white px-8 py-3 rounded-2xl cursor-pointer'>
							<Icon
								icon={"mdi:arrow-left"}
								className='text-gray-600 text-2xl'
							/>
						</button>
						<button className='bg-white px-8 py-3 rounded-2xl cursor-pointer'>
							<Icon
								icon={"mdi:arrow-right"}
								className='text-gray-600 text-2xl'
							/>
						</button>
					</div> */}
				</div>

				{/* <div className='hidden max-w-sm md:flex'>
					<p className='text-white font-light text-end'>
						We provide them with world-class management, personalized
						career growth strategies, and opportunities that match
						their true potential.
					</p>
				</div> */}
			</div>
		</div>
	);
};
export default Hero;
