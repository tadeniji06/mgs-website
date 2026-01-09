"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";

interface SuccessModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const SuccessModal = ({ isOpen, onClose }: SuccessModalProps) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* Backdrop */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
						className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm'
					>
						{/* Modal Content */}
						<motion.div
							initial={{ scale: 0.9, opacity: 0, y: 20 }}
							animate={{ scale: 1, opacity: 1, y: 0 }}
							exit={{ scale: 0.9, opacity: 0, y: 20 }}
							onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
							className='relative mx-4 w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] p-8 text-center shadow-2xl shadow-primary-blue/20'
						>
							{/* Close Button */}
							<button
								onClick={onClose}
								className='absolute right-4 top-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white'
							>
								<X size={20} />
							</button>

							{/* Success Icon */}
							<div className='mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-tr from-light-blue to-primary-blue shadow-lg shadow-light-blue/20'>
								<Check
									size={40}
									className='text-white'
									strokeWidth={3}
								/>
							</div>

							<h3 className='mb-2 text-2xl font-bold text-white'>
								Message Sent!
							</h3>
							<p className='mb-8 text-gray-400'>
								Thank you for reaching out to MGS Sports Agency. We've
								received your enquiry and will get back to you within
								24-48 hours.
							</p>

							<button
								onClick={onClose}
								className='w-full rounded-xl bg-white params py-3.5 font-bold text-black transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]'
							>
								Continue
							</button>
						</motion.div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default SuccessModal;
