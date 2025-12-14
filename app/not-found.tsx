"use client";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Icon } from "@iconify/react";

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 24 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 1.1, ease: "easeOut" },
	},
};

const slowFade: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { duration: 1.6, ease: "easeOut" },
	},
};

const Page404 = () => {
	return (
		<section className='relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-r from-black via-light-blue/15 to-primary-blue px-4 text-white'>
			{/* ambient glow */}
			<motion.div
				variants={slowFade}
				initial='hidden'
				animate='show'
				className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(56,189,248,0.12),transparent_65%)]'
			/>

			<motion.div
				variants={fadeUp}
				initial='hidden'
				animate='show'
				className='relative z-10 mx-auto flex max-w-xl flex-col items-center text-center'
			>
				{/* 404 */}
				<h1 className='text-[7rem] leading-none font-extrabold tracking-tight md:text-[10rem]'>
					404
				</h1>

				<p className='mt-2 max-w-md text-sm text-white/75 md:text-base'>
					You’ve wandered off the pitch. The page you’re looking for
					doesn’t exist — or never did.
				</p>

				{/* actions */}
				<div className='mt-8 flex flex-col gap-4 sm:flex-row'>
					<Link
						href='/'
						className='inline-flex items-center justify-center gap-2 rounded-full border border-light-blue/50 px-6 py-3 text-sm text-light-blue transition-all hover:bg-light-blue/10'
					>
						<Icon icon='mdi:home' className='text-lg' />
						Back to Home
					</Link>

					<Link
						href='/about'
						className='inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm text-white/80 transition-all hover:text-white'
					>
						Learn About Us
						<Icon icon='mdi:arrow-right' className='text-lg' />
					</Link>
				</div>

				{/* subtle hint */}
				<motion.p
					variants={slowFade}
					initial='hidden'
					animate='show'
					className='mt-10 text-xs uppercase tracking-widest text-white/40'
				>
					MGS Sports Agency — Talent deserves visibility
				</motion.p>
			</motion.div>
		</section>
	);
};

export default Page404;
