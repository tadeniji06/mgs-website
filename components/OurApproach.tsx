"use client";

import { Icon } from "@iconify/react";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.25,
		},
	},
};

const card: Variants = {
	hidden: { opacity: 0, y: 40 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.9, ease: "easeOut" },
	},
};

const OurApproach = () => {
	const approachData = [
		{
			icon: "mdi:account-tie",
			title: "Dedicated Account Management",
			description:
				"Every athlete gets a personal account manager committed to their success.",
			color: "#D9CBBA", // Gold/Beige
		},
		{
			icon: "mdi:earth",
			title: "International Network",
			description:
				"All successful athletes will be given the opportunity to take their success locally to globally. We have access to organisations and sponsorship opportunities all over the world.",
			color: "#D9CBBA", // Light Gray
		},
		{
			icon: "mdi:school",
			title: "Expert Advice",
			description:
				"Each member of our team is an industry expert and leader in their respective fields. Brand development, legal advice, career support. We provide a holistic support system.",
			color: "#D9CBBA", // Dark Gray
		},
		{
			icon: "mdi:hand-coin",
			title: "Sponsorship Support",
			description:
				"Every athlete is assigned a dedicated account manager who actively secures new sponsorship opportunities tailored specifically to them.",
			color: "#D9CBBA", // Gold/Beige
		},
	];

	return (
		<section className='text-white mt-16 relative'>
			{/* COLOR LAYER / HEADER BG */}
			<div className='bg-[#052026] py-24 px-6 md:px-20 lg:px-32 relative overflow-hidden'>
				{/* Ambient Orbs in the layer */}
				<div className='absolute top-0 right-0 w-96 h-96 bg-sage/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none' />

				<div className='flex flex-col items-center justify-center text-center relative z-10 pb-20'>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, ease: "easeOut" }}
						viewport={{ once: true }}
						className='text-3xl font-bold md:text-5xl uppercase tracking-wider text-sage'
					>
						OUR WINNING FORMULA
					</motion.h1>

					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1.2, delay: 0.2 }}
						viewport={{ once: true }}
						className='mt-4 max-w-2xl text-lg text-white/80'
					>
						The advantages that set us apart in athlete representation
					</motion.p>
				</div>
			</div>

			{/* OVERLAPPING GRID */}
			<div className='px-6 md:px-20 lg:px-32 -mt-20 relative z-20 pb-20'>
				<motion.div
					variants={container}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true, margin: "-80px" }}
					className='mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'
				>
					{approachData.map((item, i) => (
						<motion.div
							key={i}
							variants={card}
							whileHover={{ y: -8 }}
							className='flex min-h-[350px] flex-col items-center justify-start rounded-xl border border-white/10 bg-[#121212] p-6 text-center text-white shadow-xl transition-all duration-300 hover:shadow-2xl'
							style={{
								borderTop: `4px solid ${item.color}`,
								boxShadow: `0 10px 30px -10px ${item.color}20`,
							}}
						>
							<div
								className='mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/5 backdrop-blur-md'
								style={{ color: item.color }}
							>
								<Icon icon={item.icon} className='text-4xl' />
							</div>

							<h3
								className='mb-4 text-xl font-semibold leading-tight'
								style={{ color: item.color }}
							>
								{item.title}
							</h3>
							<p className='text-sm leading-relaxed text-gray-400'>
								{item.description}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default OurApproach;
