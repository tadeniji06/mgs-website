"use client";

import { motion } from "framer-motion";

const AboutHero = () => {
	return (
		<section className='relative flex min-h-[70vh] flex-col justify-center overflow-hidden bg-black px-6 py-24 text-white md:px-20'>
			{/* Background Ambient Glows - No Blue, more Gold/Neutral */}
			<div className='pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/2 rounded-full bg-sage/10 blur-[120px]' />

			<div className='relative z-10 mx-auto w-full max-w-7xl'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className='mb-20 flex flex-col items-center text-center'
				>
					<span className='mb-6 inline-block border-b border-sage/30 pb-2 text-sm font-bold tracking-[0.3em] text-sage uppercase md:text-base'>
						Our Story
					</span>
					<h1 className='text-4xl font-black leading-[1.1] tracking-tighter text-white md:text-6xl lg:text-7xl'>
						BEHIND THE <br className='hidden md:block' />{" "}
						<span className='text-transparent bg-clip-text bg-linear-to-b from-white to-gray-400'>
							SCENES.
						</span>
					</h1>
				</motion.div>

				<div className='relative grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16'>
					{/* Vertical Divider for Desktop */}
					<div className='absolute bottom-0 left-1/2 top-0 hidden w-px bg-linear-to-b from-transparent via-white/10 to-transparent md:block' />

					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className='flex flex-col justify-center gap-6'
					>
						<h2 className='text-2xl font-bold text-sage md:text-3xl'>
							MGS started by being present.
						</h2>
						<p className='text-lg leading-relaxed text-gray-200 md:text-xl'>
							Our Managing Director, Myles Grant-Smith, spent years
							attending events, competitions, and training
							environments — talking to athletes, not pitching them.
						</p>
						<p className='text-lg leading-relaxed text-gray-200 md:text-xl'>
							And the same conversations kept happening.
							<br />
							Talented athletes were asking for help. Not attention —
							support.
						</p>
						<p className='text-lg leading-relaxed text-gray-200 md:text-xl'>
							They were under-appreciated, stretched financially,
							unsure about contracts, and trying to chase elite
							performance without the right people around them.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className='flex flex-col justify-center gap-6 text-lg leading-relaxed text-gray-200 md:text-xl'
					>
						<p>
							Most weren’t lacking ability.
							<br />
							They were lacking a network.
						</p>
						<p className='font-semibold text-white'>
							MGS exists to fill that gap.
						</p>

						<div className='mt-8 border-l-4 border-sage pl-6 py-4 bg-white/5 rounded-r-2xl'>
							<p className='text-xl italic text-sage md:text-2xl font-medium'>
								&quot;If you’re good enough to pursue your dream,
								you’re good enough to be supported properly.&quot;
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};
export default AboutHero;
