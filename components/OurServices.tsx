"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { atm, cgs, lst, sa } from "@/assets";

const services = [
	{
		title: "Athlete Management",
		image: atm,
		desc: "We provide comprehensive, full-career support with dedicated account managers who deeply understand your personal and professional goals. From day-to-day operations to long-term planning, we fight for your success every step of the way, ensuring you can focus entirely on your performance.",
	},
	{
		title: "Career Growth Strategy",
		image: cgs,
		desc: "Navigate critical career decisions with confidence through our bespoke strategic planning. We analyze market trends and opportunities to maximize your potential, helping you build a lasting legacy that extends far beyond your playing days.",
	},
	{
		title: "Sponsorship Acquisition",
		image: sa,
		desc: "Leverage our extensive global network to secure lucrative, high-value sponsorship deals that perfectly align with your personal brand. We handle the complex negotiations and partnerships, turning your reputation into a powerful, revenue-generating asset.",
	},
	{
		title: "Local Support Teams",
		image: lst,
		desc: "Wherever your career takes you, our on-the-ground assistance teams are there to handle logistics, housing, training facilities, and personal needs. We ensure a seamless transition and consistent support system, so you feel at home in any city around the world.",
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
		<section className='relative h-[60vh] md:h-[80vh] w-full overflow-hidden text-white mt-5'>
			{/* Section heading */}
			<div className='flex justify-center items-center mt-10'>
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
					className='absolute inset-0 flex items-center justify-center'
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
					<div className='absolute inset-0 bg-black/80' />

					{/* Glass text panel */}
					<div className='relative z-10 w-[90%] max-w-md rounded-2xl bg-white/10 p-5 backdrop-blur-xl md:p-10 text-center'>
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
