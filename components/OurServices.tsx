"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { atm, cgs, lst, sa } from "@/assets";

const services = [
	{
		title: "Athlete Management",
		image: atm,
		desc: "Full-career support with dedicated account managers who understand your goals and fight for your success.",
	},
	{
		title: "Career Growth Strategy",
		image: cgs,
		desc: "Strategic planning and guidance to maximize your potential and navigate critical career decisions.",
	},
	{
		title: "Sponsorship Acquisition",
		image: sa,
		desc: "Leveraging our global network to secure lucrative sponsorship deals that align with your brand.",
	},
	{
		title: "Local Support Teams",
		image: lst,
		desc: "On-the-ground assistance to handle logistics, training, and personal needs wherever your career takes you.",
	},
];

export default function OurServices() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % services.length);
		}, 7000);

		return () => clearInterval(interval);
	}, []);

	return (
		<section className='relative h-[60vh] md:h-[65vh] w-full overflow-hidden text-white mt-5'>
			{/* Section heading */}
			<div className='absolute left-6 top-6 z-20 md:left-20 md:top-10'>
				<h2 className='text-2xl font-bold tracking-wide md:text-3xl'>
					OUR SERVICES
				</h2>
			</div>

			<AnimatePresence mode='wait'>
				<motion.div
					key={index}
					initial={{ opacity: 0, scale: 1.04 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 1.04 }}
					transition={{ duration: 1.2, ease: "easeInOut" }}
					className='absolute inset-0'
				>
					{/* Background image */}
					<Image
						src={services[index].image}
						alt={services[index].title}
						fill
						className='object-cover'
						priority
					/>

					{/* Dark overlay */}
					<div className='absolute inset-0 bg-black/40' />

					{/* Glass text panel */}
					<div className='absolute right-4 top-1/2 w-[90%] max-w-md -translate-y-1/2 rounded-2xl bg-white/10 p-5 backdrop-blur-xl md:right-20 md:p-10'>
						<h3 className='mb-4 text-xl font-semibold md:text-3xl'>
							{services[index].title}
						</h3>
						<p className='text-sm leading-relaxed text-white/90 md:text-base'>
							{services[index].desc}
						</p>
					</div>
				</motion.div>
			</AnimatePresence>
		</section>
	);
}
