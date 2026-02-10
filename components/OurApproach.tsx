"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion, type Variants } from "framer-motion";
import { f1, f2, f3 } from "@/assets";

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
			title: "Dedicated Management",
			description:
				"Every athlete gets a personal account manager committed to their success. We build a personalised roadmap tailored to your specific career goals, handling everything from contract negotiations to daily logistics so you can focus purely on your game.",
		},
		{
			icon: "mdi:earth",
			title: "International Network",
			description:
				"Global connections with sponsors, clubs, and brands worldwide. Our reach extends across major leagues and emerging markets, ensuring you have access to the best opportunities no matter where they arise.",
		},
		{
			icon: "mdi:handshake",
			title: "Professional Support",
			description:
				"Expert legal, commercial, and strategic guidance at every step. From financial planning and brand development to legal protection and post-career transition, we provide a holistic support system.",
		},
		{
			icon: "mdi:currency-usd",
			title: "Sponsorship Acquisition",
			description:
				"We identify and secure sponsorship opportunities tailored to your career stage and goals. Whether it's a major brand or a smaller, emerging sponsor, we ensure you have the financial support needed to thrive.",
		},
	];

	return (
		<section className='text-white mt-16 p-6 md:px-20 lg:px-32'>
			{/* HEADER */}
			<div className='flex flex-col items-center justify-center text-center'>
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: "easeOut" }}
					viewport={{ once: true }}
					className='text-3xl font-bold md:text-5xl uppercase tracking-wider text-light-blue'
				>
					OUR APPROACH
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

			{/* CARDS */}
			<motion.div
				variants={container}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, margin: "-80px" }}
				className='mx-auto mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'
			>
				{approachData.map((item, i) => (
					<motion.div
						key={i}
						variants={card}
						whileHover={{ y: -8 }}
						className='flex min-h-[350px] flex-col items-center justify-start rounded-xl border border-white/10 bg-white/5 p-6 text-center text-white backdrop-blur-sm transition-all duration-300 hover:border-light-blue/50 hover:bg-white/10 hover:shadow-lg hover:shadow-light-blue/10'
					>
						<div className='mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-light-blue/10 text-light-blue'>
							<Icon icon={item.icon} className='text-4xl' />
						</div>

						<h3 className='mb-4 text-xl font-semibold leading-tight'>
							{item.title}
						</h3>
						<p className='text-sm leading-relaxed text-gray-300'>
							{item.description}
						</p>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
};

export default OurApproach;
