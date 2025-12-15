import Image from "next/image";
import { hero } from "@/assets";

const OurCommitment = () => {
	return (
		<div className='relative h-100 w-full overflow-hidden md:h-175'>
			<Image
				src={hero}
				alt='hero'
				fill
				className='object-cover'
				quality={90}
				style={{ zIndex: -2 }}
			/>

			{/* dark overlay */}
			<div className='absolute inset-0 bg-black/70' />

			{/* content */}
			<div className='relative z-10 flex h-full items-center justify-center p-4 md:my-28 md:gap-36'>
				<div
					className='
						max-w-4xl
						rounded-2xl
						border border-white/20
						bg-white/10
						p-6
						backdrop-blur-xl
						shadow-2xl
						md:p-10
					'
				>
					<h2 className='mb-4 text-center text-3xl font-bold text-white md:text-5xl'>
						Our Commitment
					</h2>

					<p className='text-center text-sm leading-relaxed text-white/90 md:text-base'>
						At MGS Sports Agency, we&apos;re committed to championing
						athletes who have been overlooked, undervalued, or
						underrepresented. We believe in the power of potential and
						the importance of providing every athlete with the tools,
						support, and opportunities they need to succeed. Our
						promise is simple: When you join MGS, you gain more than
						an agency. You gain a team of advocates who will fight for
						your success as passionately as you compete for victory.
					</p>
				</div>
			</div>
		</div>
	);
};

export default OurCommitment;
