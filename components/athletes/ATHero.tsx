import Image from "next/image";
import { ath, frame } from "@/assets";

const ATHero = () => {
	return (
		<div className='relative h-100 w-full overflow-hidden md:min-h-screen'>
			<Image
				src={ath}
				alt='Athletes hero'
				fill
				className='object-cover'
				quality={90}
				style={{ zIndex: -2 }}
			/>

			{/* dark overlay */}
			<div className='absolute inset-0 bg-black/60' />

			{/* content */}
			<div className='relative z-10 flex h-full flex-col items-center justify-center gap-4 px-4 text-center text-white md:gap-6'>
				<Image src={frame} alt='' className='mb-2 w-20 md:w-28' />

				<h1 className='text-3xl font-bold tracking-tight md:text-5xl'>
					Our Athletes
				</h1>

				<p className='max-w-xl text-sm leading-relaxed text-white/85 md:text-base'>
					Our athlete roster is currently being finalised. New talent
					announcements coming soon.
				</p>

				<button className='mt-2 cursor-pointer rounded-full bg-light-blue px-8 py-3 text-sm font-semibold tracking-wide text-white transition hover:scale-105 md:px-12 md:py-4 md:text-base'>
					Join Our Athletes
				</button>
			</div>
		</div>
	);
};

export default ATHero;
