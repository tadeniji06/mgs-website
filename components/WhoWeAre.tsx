"use client";

import { motion, type Variants } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { fa3 } from "@/assets";

const fadeUp: Variants = {
	hidden: {
		opacity: 0,
		y: 30,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1.1,
			ease: "easeOut",
		},
	},
};

const WhoWeAre = () => {
	return (
		<section className='relative overflow-hidden bg-black px-6 py-20 text-white md:px-20 lg:py-32'>
			{/* Decorative background element */}
			<div className='absolute -left-20 top-20 h-96 w-96 rounded-full bg-light-blue/10 blur-[100px] pointer-events-none' />

			<div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center'>
				{/* LEFT CONTENT */}
				{/* LEFT CONTENT */}
				<motion.div
					variants={fadeUp}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true, margin: "-100px" }}
					className='flex flex-col gap-8'
				>
					<div>
						<h2 className='mb-6 text-3xl font-bold uppercase tracking-wide md:text-4xl lg:text-5xl text-white'>
							An agency for the{" "}
							<span className='text-light-blue'>
								under-appreciated
							</span>
							, the{" "}
							<span className='text-light-blue'>under-utilised</span>{" "}
							and the{" "}
							<span className='text-light-blue'>underdog</span>
						</h2>
						<div className='h-1 w-20 bg-light-blue rounded-full mb-6' />
					</div>

					<div className='space-y-6 text-lg text-gray-300 leading-relaxed'>
						<p>
							Our agency can provide a clear path of progression and
							global opportunities.
						</p>
					</div>

					<motion.div
						whileHover={{ x: 10 }}
						className='mt-4 flex w-fit items-center gap-2 text-light-blue transition-colors hover:text-white'
					>
						<Link
							href={"/about"}
							className='flex items-center gap-2 group'
						>
							<span className='text-sm font-bold tracking-widest uppercase border-b border-transparent group-hover:border-white transition-all'>
								More About Us
							</span>
							<Icon
								className='text-2xl transition-transform group-hover:translate-x-1'
								icon='mdi:arrow-right'
							/>
						</Link>
					</motion.div>
				</motion.div>

				{/* RIGHT IMAGE */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: true }}
					className='relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-white/5'
				>
					<Image
						src={fa3}
						alt='Athlete represenation'
						fill
						className='object-cover transition-transform duration-700 hover:scale-105'
						sizes='(max-width: 768px) 100vw, 50vw'
					/>
					{/* Overlay gradient */}
					<div className='absolute inset-0 bg-linear-to-t from-black/60 to-transparent' />
				</motion.div>
			</div>
		</section>
	);
};

export default WhoWeAre;
