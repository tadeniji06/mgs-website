"use client";

import { useState, ChangeEvent } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

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

	const handleChange = (
		e: ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = () => {
		console.log("Form submitted:", formData);
	};

	return (
		<div className='min-h-screen bg-linear-to-bl from-black via-slate-900 to-teal-900 py-16 text-white'>
			{/* Intro copy */}
			<div className='mx-auto mb-12 max-w-5xl px-6'>
				<p className='text-xl font-medium md:text-2xl'>
					Whether you&apos;re an athlete seeking representation or a
					brand looking to partner, we&apos;re here to listen. Fill
					out the form or reach out directly.
				</p>
			</div>

			{/* Main grid */}
			<div className='mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-[1fr_2fr] lg:gap-14'>
				{/* LEFT COLUMN */}
				<div className='flex flex-col gap-6'>
					{/* Contact Info */}
					<div className='rounded-2xl border border-teal-700/50 bg-linear-to-br from-teal-900/40 to-teal-800/30 p-8 backdrop-blur-sm'>
						<h2 className='mb-6 text-2xl font-bold tracking-tight'>
							Get in Touch
						</h2>

						<div className='space-y-5'>
							{/* Email */}
							<div className='flex gap-4'>
								<div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-600/30'>
									<Mail className='h-5 w-5 text-teal-400' />
								</div>
								<div>
									<h3 className='mb-1 font-semibold'>Email</h3>
									<p className='text-sm text-gray-300'>
										support@jmpssport.ng
									</p>
								</div>
							</div>

							{/* Phone */}
							<div className='flex gap-4'>
								<div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-600/30'>
									<Phone className='h-5 w-5 text-teal-400' />
								</div>
								<div>
									<h3 className='mb-1 font-semibold'>
										Contact Number
									</h3>
									<p className='text-sm text-gray-300'>
										001 001 4805
									</p>
								</div>
							</div>

							{/* Location */}
							<div className='flex gap-4'>
								<div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-600/30'>
									<MapPin className='h-5 w-5 text-teal-400' />
								</div>
								<div>
									<h3 className='mb-1 font-semibold'>Location</h3>
									<p className='text-sm text-gray-300'>
										124, Allen Avenue, Ikeja, Lagos State, Nigeria
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Response Time */}
					<div className='rounded-2xl border border-teal-700/50 bg-linear-to-br from-teal-900/40 to-teal-800/30 p-6 backdrop-blur-sm'>
						<p className='text-sm leading-relaxed text-gray-300'>
							We typically respond to all enquiries within 24–48 hours
							during business days. For urgent matters, please
							indicate this in your message.
						</p>
					</div>
				</div>

				{/* RIGHT COLUMN */}
				<div className='rounded-2xl border border-slate-700/50 bg-linear-to-br from-slate-800/40 to-slate-900/40 p-8 backdrop-blur-sm lg:p-10'>
					<h2 className='mb-2 text-2xl font-bold tracking-tight'>
						Send Us A Message
					</h2>
					<p className='mb-6 text-sm text-gray-400'>
						We’ll get back to you as soon as possible.
					</p>

					<div className='space-y-6'>
						{/* Name */}
						<div>
							<label className='mb-2 block text-sm font-medium'>
								Name
							</label>
							<input
								type='text'
								name='name'
								value={formData.name}
								onChange={handleChange}
								placeholder='Your name'
								className='w-full rounded-lg border border-slate-600/50 bg-slate-800/50 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-teal-500 focus:outline-none'
							/>
						</div>

						{/* Email */}
						<div>
							<label className='mb-2 block text-sm font-medium'>
								Email
							</label>
							<input
								type='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								placeholder='you@example.com'
								className='w-full rounded-lg border border-slate-600/50 bg-slate-800/50 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-teal-500 focus:outline-none'
							/>
						</div>

						{/* Enquiry Type */}
						<div>
							<label className='mb-2 block text-sm font-medium'>
								Enquiry Type
							</label>
							<select
								name='enquiryType'
								value={formData.enquiryType}
								onChange={handleChange}
								className='w-full cursor-pointer appearance-none rounded-lg border border-slate-600/50 bg-slate-800/50 px-4 py-3 text-white transition-colors focus:border-teal-500 focus:outline-none'
							>
								<option>Athlete representation</option>
								<option>Brand partnership</option>
								<option>General inquiry</option>
								<option>Career consultation</option>
							</select>
						</div>

						{/* Message */}
						<div>
							<label className='mb-2 block text-sm font-medium'>
								Message
							</label>
							<textarea
								name='message'
								rows={5}
								value={formData.message}
								onChange={handleChange}
								placeholder='Tell us about your inquiry...'
								className='w-full resize-none rounded-lg border border-slate-600/50 bg-slate-800/50 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-teal-500 focus:outline-none'
							/>
						</div>

						{/* Submit */}
						<button
							onClick={handleSubmit}
							className='w-full rounded-lg bg-cyan-400 py-3 font-semibold text-slate-900 transition hover:bg-cyan-500'
						>
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
