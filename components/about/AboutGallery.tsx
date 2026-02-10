"use client";

import Image from "next/image";
import { useState } from "react";
import { ar1, ar2, ar3, ar4, ar5 } from "@/assets";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const AboutGallery = () => {
	const images = [ar1, ar2, ar3, ar4, ar5];
	const [selectedImage, setSelectedImage] = useState<any>(null);

	return (
		<section className='bg-black px-6 py-16 text-white md:px-20'>
			<div className='mx-auto max-w-7xl'>
				<h2 className='mb-12 text-center text-2xl font-medium md:text-3xl'>
					A Glimpse into Our Journey
				</h2>

				<div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
					{images.map((img, idx) => (
						<div
							key={idx}
							onClick={() => setSelectedImage(img)}
							className={`group relative h-80 w-full cursor-pointer overflow-hidden rounded-xl ${
								idx === 0 ? "md:col-span-2" : ""
							}`}
						>
							<Image
								src={img}
								alt={`Gallery image ${idx + 1}`}
								fill
								className='object-cover transition-transform duration-700 group-hover:scale-105'
							/>
							<div className='absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-transparent' />

							{/* Hover Icon Hint */}
							<div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
								<div className='bg-black/50 p-3 rounded-full backdrop-blur-sm'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
										className='lucide lucide-maximize-2'
									>
										<polyline points='15 3 21 3 21 9' />
										<polyline points='9 21 3 21 3 15' />
										<line x1='21' x2='14' y1='3' y2='10' />
										<line x1='3' x2='10' y1='21' y2='14' />
									</svg>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Lightbox Modal */}
			<AnimatePresence>
				{selectedImage && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setSelectedImage(null)}
						className='fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm'
					>
						<button
							onClick={() => setSelectedImage(null)}
							className='absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20'
						>
							<X size={32} />
						</button>

						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							className='relative aspect-auto max-h-[90vh] max-w-[90vw] overflow-hidden rounded-lg'
							onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
						>
							<Image
								src={selectedImage}
								alt='Gallery Preview'
								className='max-h-[90vh] w-auto object-contain'
							/>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default AboutGallery;
