"use client";
import { vv, hh2, hh1, hr1, hr2 } from "@/assets";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
	{ id: 1, image: hr1, alt: "Hero Image 1" },
	{ id: 2, image: hr2, alt: "Hero Image 2" },
];

const Hero = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			nextSlide();
		}, 6000);

		return () => clearInterval(timer);
	}, [currentIndex]);

	const nextSlide = () => {
		setCurrentIndex((prev) =>
			prev === slides.length - 1 ? 0 : prev + 1,
		);
	};

	const prevSlide = () => {
		setCurrentIndex((prev) =>
			prev === 0 ? slides.length - 1 : prev - 1,
		);
	};

	return (
		<div className='relative h-[80vh] w-full overflow-hidden bg-black md:h-screen'>
			<AnimatePresence mode='popLayout'>
				<motion.div
					key={currentIndex}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1.5, ease: "easeInOut" }}
					className='absolute inset-0 h-full w-full'
				>
					<Image
						src={slides[currentIndex].image}
						alt={slides[currentIndex].alt}
						fill
						className='h-full w-full object-cover opacity-60'
						quality={100}
						priority
					/>
					{/* Gradient Overlay for better text readability */}
					<div className='absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent' />
				</motion.div>
			</AnimatePresence>

			{/* Content */}
			<div className='relative z-10 flex h-full w-full items-center px-6 md:px-20'>
				<div className='flex max-w-4xl flex-col gap-8'>
					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className='text-2xl font-bold leading-tight text-white md:text-4xl lg:text-5xl'
					>
						Helping <span className='text-light-blue'>athletes</span>{" "}
						around the world, advocating for those who are skilled but
						not recognised.
					</motion.p>

					{/* Navigation Controls */}
					<div className='flex gap-4'>
						<button
							onClick={prevSlide}
							className='group flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all hover:bg-white hover:text-black hover:scale-110 active:scale-95'
							aria-label='Previous slide'
						>
							<Icon
								icon='mdi:arrow-left'
								className='text-2xl text-white transition-colors group-hover:text-black'
							/>
						</button>
						<button
							onClick={nextSlide}
							className='group flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all hover:bg-white hover:text-black hover:scale-110 active:scale-95'
							aria-label='Next slide'
						>
							<Icon
								icon='mdi:arrow-right'
								className='text-2xl text-white transition-colors group-hover:text-black'
							/>
						</button>
					</div>
				</div>
			</div>

			{/* Slide Indicators */}
			<div className='absolute bottom-10 left-6 flex gap-3 md:left-20'>
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentIndex(index)}
						className={`h-1 transition-all duration-500 ${
							index === currentIndex
								? "w-12 bg-light-blue"
								: "w-6 bg-white/30 hover:bg-white/60"
						}`}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
};

export default Hero;
