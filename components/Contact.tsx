"use client";

import { useState, ChangeEvent } from "react";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import SuccessModal from "./SuccessModal";
import { motion } from "framer-motion";

interface FormData {
	name: string;
	email: string;
	enquiryType: string;
	message: string;
}

const Contact = () => {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		enquiryType: "Athlete representation",
		message: "",
	});

	const [errors, setErrors] = useState<Partial<FormData>>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [showSuccessModal, setShowSuccessModal] = useState(false);

	const handleChange = (
		e: ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
		// Clear error when user types
		if (errors[e.target.name as keyof FormData]) {
			setErrors({
				...errors,
				[e.target.name]: undefined,
			});
		}
	};

	const validate = () => {
		const newErrors: Partial<FormData> = {};
		if (!formData.name.trim()) newErrors.name = "Name is required";
		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
			newErrors.email = "Invalid email formatting";
		}
		if (!formData.message.trim())
			newErrors.message = "Message is required";

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async () => {
		if (!validate()) return;

		setIsSubmitting(true);

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1500));

		setIsSubmitting(false);
		setShowSuccessModal(true);
		setFormData({
			name: "",
			email: "",
			enquiryType: "Athlete representation",
			message: "",
		});
	};

	return (
		<div className='min-h-screen bg-black py-20 text-white selection:bg-light-blue selection:text-black'>
			<SuccessModal
				isOpen={showSuccessModal}
				onClose={() => setShowSuccessModal(false)}
			/>

			{/* Background Effects */}
			<div className='pointer-events-none fixed left-0 top-0 h-full w-full overflow-hidden'>
				<div className='absolute -left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-primary-blue/20 blur-[120px]' />
				<div className='absolute -right-[10%] bottom-[10%] h-[500px] w-[500px] rounded-full bg-light-blue/10 blur-[120px]' />
			</div>

			<div className='relative z-10'>
				{/* Intro copy */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className='mx-auto mb-16 max-w-4xl px-6 text-center'
				>
					<h1 className='text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6'>
						<span className='text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400'>
							Let's Start a Conversation
						</span>
					</h1>
					<p className='text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto'>
						Whether you&apos;re an athlete seeking representation or a
						brand looking to partner, we&apos;re here to listen.
					</p>
				</motion.div>

				{/* Main grid */}
				<div className='mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 lg:grid-cols-[1fr_1.5fr] lg:gap-12'>
					{/* LEFT COLUMN */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className='flex flex-col gap-6'
					>
						{/* Contact Info Card */}
						<div className='group overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-colors hover:border-light-blue/30'>
							<h2 className='mb-8 text-2xl font-bold tracking-tight text-white'>
								Contact Information
							</h2>

							<div className='space-y-8'>
								{/* Email */}
								<div className='flex items-start gap-4'>
									<div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-light-blue/20 to-primary-blue/20 text-light-blue ring-1 ring-white/10'>
										<Mail className='h-5 w-5' />
									</div>
									<div className='pt-1'>
										<h3 className='mb-1 font-semibold text-white'>
											Email
										</h3>
										<p className='text-gray-400 font-light hover:text-light-blue transition-colors'>
											support@jmpssport.ng
										</p>
									</div>
								</div>

								{/* Phone */}
								<div className='flex items-start gap-4'>
									<div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-light-blue/20 to-primary-blue/20 text-light-blue ring-1 ring-white/10'>
										<Phone className='h-5 w-5' />
									</div>
									<div className='pt-1'>
										<h3 className='mb-1 font-semibold text-white'>
											Phone
										</h3>
										<p className='text-gray-400 font-light'>
											001 001 4805
										</p>
									</div>
								</div>

								{/* Location */}
								<div className='flex items-start gap-4'>
									<div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-light-blue/20 to-primary-blue/20 text-light-blue ring-1 ring-white/10'>
										<MapPin className='h-5 w-5' />
									</div>
									<div className='pt-1'>
										<h3 className='mb-1 font-semibold text-white'>
											Office
										</h3>
										<p className='text-gray-400 font-light leading-relaxed'>
											124, Allen Avenue, Ikeja,
											<br />
											Lagos State, Nigeria
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Response Time Card */}
						<div className='rounded-3xl border border-dashed border-white/10 bg-white/5 p-6 backdrop-blur-sm'>
							<div className='flex gap-3 items-center mb-2'>
								<div className='h-2 w-2 rounded-full bg-green-500 animate-pulse' />
								<span className='text-xs font-medium text-green-400 tracking-wider uppercase'>
									Response Status
								</span>
							</div>
							<p className='text-sm leading-relaxed text-gray-400'>
								We typically respond to new enquiries within{" "}
								<strong>24–48 hours</strong>. Urgent partnership
								requests are prioritized.
							</p>
						</div>
					</motion.div>

					{/* RIGHT COLUMN - FORM */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className='rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 lg:p-10 shadow-2xl relative overflow-hidden'
					>
						<div className='absolute top-0 right-0 p-12 bg-light-blue/5 rounded-bl-[100px] pointer-events-none' />

						<h2 className='mb-2 text-2xl font-bold tracking-tight text-white relative z-10'>
							Send a Message
						</h2>
						<p className='mb-8 text-sm text-gray-400'>
							Tell us more about your goals. We're ready to help.
						</p>

						<div className='space-y-6 relative z-10'>
							{/* Name */}
							<div>
								<label className='mb-2 block text-sm font-medium text-gray-300'>
									Full Name
								</label>
								<input
									type='text'
									name='name'
									value={formData.name}
									onChange={handleChange}
									placeholder='John Doe'
									className={`w-full rounded-xl border bg-white/5 px-4 py-3.5 text-white placeholder-gray-600 transition-all focus:border-light-blue focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-light-blue/50 ${
										errors.name ? "border-red-500" : "border-white/10"
									}`}
								/>
								{errors.name && (
									<p className='mt-1 text-xs text-red-500'>
										{errors.name}
									</p>
								)}
							</div>

							{/* Email */}
							<div>
								<label className='mb-2 block text-sm font-medium text-gray-300'>
									Email Address
								</label>
								<input
									type='email'
									name='email'
									value={formData.email}
									onChange={handleChange}
									placeholder='john@example.com'
									className={`w-full rounded-xl border bg-white/5 px-4 py-3.5 text-white placeholder-gray-600 transition-all focus:border-light-blue focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-light-blue/50 ${
										errors.email
											? "border-red-500"
											: "border-white/10"
									}`}
								/>
								{errors.email && (
									<p className='mt-1 text-xs text-red-500'>
										{errors.email}
									</p>
								)}
							</div>

							{/* Enquiry Type */}
							<div>
								<label className='mb-2 block text-sm font-medium text-gray-300'>
									I'm interested in...
								</label>
								<div className='relative'>
									<select
										name='enquiryType'
										value={formData.enquiryType}
										onChange={handleChange}
										className='w-full cursor-pointer appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white transition-all focus:border-light-blue focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-light-blue/50'
									>
										<option>Athlete Representation</option>
										<option>Brand Partnership</option>
										<option>General Inquiry</option>
										<option>Career Consultation</option>
									</select>
									<div className='absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none'>
										<svg
											className='w-4 h-4 text-gray-400'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M19 9l-7 7-7-7'
											/>
										</svg>
									</div>
								</div>
							</div>

							{/* Message */}
							<div>
								<label className='mb-2 block text-sm font-medium text-gray-300'>
									Your Message
								</label>
								<textarea
									name='message'
									rows={5}
									value={formData.message}
									onChange={handleChange}
									placeholder='How can we assist you today?'
									className={`w-full resize-none rounded-xl border bg-white/5 px-4 py-3.5 text-white placeholder-gray-600 transition-all focus:border-light-blue focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-light-blue/50 ${
										errors.message
											? "border-red-500"
											: "border-white/10"
									}`}
								/>
								{errors.message && (
									<p className='mt-1 text-xs text-red-500'>
										{errors.message}
									</p>
								)}
							</div>

							{/* Submit */}
							<button
								onClick={handleSubmit}
								disabled={isSubmitting}
								className='group flex w-full items-center justify-center gap-2 rounded-xl bg-white py-4 font-bold text-black transition-all hover:bg-gray-200 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed'
							>
								{isSubmitting ? (
									<>
										<Loader2 className='animate-spin' size={18} />
										Sending...
									</>
								) : (
									"Send Message"
								)}
							</button>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
