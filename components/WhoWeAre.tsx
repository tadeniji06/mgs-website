"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { who } from "@/assets";
import { Icon } from "@iconify/react";
import Link from "next/link";

// Explicit typing fixes TS "string is not assignable" variant errors
const fadeUp: Variants = {
	hidden: {
		opacity: 0,
		y: 30,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1.1, // slower so it’s actually perceived
			ease: "easeOut",
		},
	},
};

const WhoWeAre = () => {
	return (
		<section className='text-white p-5 bg-linear-to-r from-black via-light-blue/15 to-primary-blue px-2 md:px-20 md:min-h-screen overflow-hidden'>
			<div className='flex flex-col md:flex-row justify-between gap-8'>
				{/* LEFT CONTENT */}
				<motion.div
					variants={fadeUp}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true, margin: "-100px" }}
					className='p-6'
				>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>
						Who We Are
					</h2>

					<p className='mb-4 max-w-lg text-white/80 text-sm md:text-base'>
						At MGS Sports Agency, we believe that talent deserves
						recognition. Too many athletes with exceptional potential
						remain overlooked and underrepresented.
					</p>

					<motion.div
						whileHover={{ x: 8 }}
						transition={{
							type: "spring",
							stiffness: 120,
							damping: 14,
						}}
						className='mt-2 flex items-center gap-1 cursor-pointer text-light-blue'
					>
						<Icon className='text-2xl' icon='mdi:world' />
						<Link href={"/about"}>
							<p className='tracking-wide'>MORE ABOUT US</p>
						</Link>
						<Icon className='text-xl' icon='mdi:arrow-right' />
					</motion.div>
				</motion.div>

				{/* RIGHT TEXT */}
				<motion.div
					variants={fadeUp}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true, margin: "-100px" }}
					className='hidden md:flex p-6'
				>
					<p className='md:max-w-[320px] text-white/70'>
						We offer comprehensive support that goes beyond contracts.
						We build brands, secure sponsorships, and create lasting
						partnerships that elevate careers.
					</p>
				</motion.div>
			</div>

			{/* IMAGE */}
			<motion.div
				initial={{ opacity: 0, scale: 0.96 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1.3, ease: "easeOut" }}
				viewport={{ once: true, margin: "-120px" }}
				className='mt-6'
			>
				<Image
					src={who}
					alt='who'
					width={1920}
					height={1080}
					className='w-full h-full object-cover rounded-xl'
				/>
			</motion.div>
		</section>
	);
};

export default WhoWeAre;
