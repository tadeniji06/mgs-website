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
			image: f3,
			title: "Dedicated Management",
			description:
				"Every athlete gets a personal account manager committed to their success",
		},
		{
			image: f1,
			title: "International Network",
			description:
				"Global connections with sponsors, clubs, and brands worldwide",
		},
		{
			image: f2,
			title: "Professional Support",
			description:
				"Expert legal, commercial, and strategic guidance at every step",
		},
	];

	return (
		<section className='text-white mt-8 p-4 md:px-36'>
			{/* HEADER */}
			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, ease: "easeOut" }}
				viewport={{ once: true }}
				className='text-3xl font-bold'
			>
				OUR APPROACH
			</motion.h1>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1.2 }}
				viewport={{ once: true }}
				className='mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between'
			>
				<p className='max-w-md text-sm md:text-lg text-white/80'>
					The advantages that set us apart in athlete representation
				</p>

				<Link
					href='/team'
					className='flex items-center gap-2 text-light-blue transition-all hover:gap-4'
				>
					<Icon className='text-xl md:text-2xl' icon='mdi:world' />
					<span className='text-xs md:text-lg'>JOIN OUR TEAM</span>
					<Icon
						className='text-lg md:text-xl'
						icon='mdi:arrow-right'
					/>
				</Link>
			</motion.div>

			{/* CARDS */}
			<motion.div
				variants={container}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, margin: "-80px" }}
				className='mx-auto mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'
			>
				{approachData.map((item, i) => (
					<motion.div
						key={i}
						variants={card}
						whileHover={{ y: -6 }}
						transition={{
							type: "spring",
							stiffness: 200,
							damping: 20,
						}}
						className='flex flex-col items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 text-center text-black shadow-sm'
					>
						<Image
							src={item.image}
							alt={item.title}
							className='h-24 w-auto object-contain'
						/>

						<h3 className='text-lg font-semibold'>{item.title}</h3>
						<p className='text-sm text-gray-600'>
							{item.description}
						</p>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
};

export default OurApproach;
