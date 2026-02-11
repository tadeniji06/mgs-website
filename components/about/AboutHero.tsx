"use client";

import { motion } from "framer-motion";

const AboutHero = () => {
	return (
		<section className='relative flex min-h-[70vh] flex-col justify-center overflow-hidden bg-black px-6 py-24 text-white md:px-20 bg-linear-to-b from-primary-blue to-light-blue/20'>
			{/* Background Ambient Glows */}
			<div className='pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/2 rounded-full bg-primary-blue/20 blur-[120px]' />
			<div className='pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/2 translate-y-1/2 rounded-full bg-light-blue/10 blur-[120px]' />

			<div className='relative z-10 mx-auto w-full max-w-7xl'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className='mb-20 flex flex-col items-center text-center'
				>
					<span className='mb-6 inline-block border-b border-light-blue/30 pb-2 text-sm font-bold tracking-[0.3em] text-light-blue uppercase md:text-base'>
						About MGS
					</span>
					<h1 className='text-4xl font-black leading-[1.1] tracking-tighter text-white md:text-6xl lg:text-7xl'>
						MORE THAN <br className='hidden md:block' />{" "}
						<span className='text-transparent bg-clip-text bg-linear-to-b from-white to-gray-400'>
							AN AGENCY.
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
						className='flex flex-col justify-center'
					>
						<p className='text-lg leading-relaxed text-gray-200 md:text-xl'>
							We&apos;re advocates for athletes who deserve{" "}
							<span className='text-white font-medium'>
								more recognition
							</span>
							,{" "}
							<span className='text-white font-medium'>
								more opportunities
							</span>
							, and{" "}
							<span className='text-white font-medium'>
								more support
							</span>
							.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className='flex items-center text-lg leading-relaxed text-gray-200 md:text-xl'
					>
						<p>
							We created MGS to change that narrative. Our founders
							recognised a gap in the market, a need for an agency
							that truly prioritises the athlete, champions the
							underdog, and fights relentlessly for opportunities that
							others might overlook.
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
};
export default AboutHero;
