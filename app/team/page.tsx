"use client";

import { user } from "@/assets";
import Ready from "@/components/Ready";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Mail, Twitter } from "lucide-react";

interface TeamMember {
	name: string;
	role: string;
	image: StaticImageData;
	socials?: {
		twitter?: string;
		linkedin?: string;
		email?: string;
	};
}

const team: TeamMember[] = [
	{
		name: "Lisa Igechukwu",
		role: "Managing Director",
		image: user,
	},
	{
		name: "James Parker",
		role: "Chief Technology Officer",
		image: user,
	},
	{
		name: "Miya Chen",
		role: "Welfare Director",
		image: user,
	},
	{
		name: "Armando Garcia",
		role: "Marketing Manager",
		image: user,
	},
	{
		name: "Tina Lopez",
		role: "Product Analyst",
		image: user,
	},
	{
		name: "Rahul Singh",
		role: "Customer Success Lead",
		image: user,
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TeamPage = () => {
	return (
		<div className='relative min-h-screen w-full overflow-hidden bg-black text-white'>
			{/* Ambient Background Glows */}
			<div className='pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-primary-blue/30 blur-3xl filter' />
			<div className='pointer-events-none absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-dark-blue/20 blur-3xl filter' />

			<main className='relative z-10 px-4 py-20 sm:px-6 lg:px-8'>
				<div className='mx-auto max-w-7xl'>
					{/* Header Section */}
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						className='mb-16 text-center'
					>
						<h2 className='text-sm font-semibold tracking-wide text-light-blue uppercase'>
							Our Professionals
						</h2>
						<h1 className='mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl'>
							Meet the Team
						</h1>
						<p className='mx-auto mt-4 max-w-2xl text-lg text-gray-400'>
							The dedicated minds and passionate hearts driving
							athlete success on a global scale.
						</p>
					</motion.div>

					{/* Team Grid */}
					<motion.div
						variants={containerVariants}
						initial='hidden'
						animate='visible'
						className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'
					>
						{team.map((member, idx) => (
							<motion.div
								key={member.name}
								variants={itemVariants}
								className='group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-light-blue/50 hover:shadow-2xl hover:shadow-light-blue/10'
							>
								<div className='flex flex-col items-center text-center'>
									<div className='relative mb-6 h-32 w-32'>
										<div className='absolute inset-0 animate-pulse rounded-full bg-light-blue/20 blur-xl transition-all duration-500 group-hover:bg-light-blue/40' />
										<Image
											src={member.image}
											alt={member.name}
											className='relative h-full w-full rounded-full object-cover shadow-xl ring-2 ring-white/10 transition-all duration-300 group-hover:ring-light-blue'
										/>
									</div>

									<h3 className='text-xl font-bold text-white group-hover:text-light-blue transition-colors'>
										{member.name}
									</h3>
									<p className='mb-4 mt-1 text-sm font-medium text-gray-400'>
										{member.role}
									</p>

									{/* Social Icons Placeholder */}
									<div className='flex gap-4 opacity-70 transition-opacity duration-300 group-hover:opacity-100'>
										<a
											href='#'
											className='rounded-full bg-white/5 p-2 text-gray-400 transition-all hover:bg-light-blue hover:text-black'
										>
											<Linkedin size={18} />
										</a>
										<a
											href='#'
											className='rounded-full bg-white/5 p-2 text-gray-400 transition-all hover:bg-light-blue hover:text-black'
										>
											<Twitter size={18} />
										</a>
										<a
											href='#'
											className='rounded-full bg-white/5 p-2 text-gray-400 transition-all hover:bg-light-blue hover:text-black'
										>
											<Mail size={18} />
										</a>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>

					{/* Call to Action */}
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className='mt-24'
					>
						<Ready />
					</motion.div>
				</div>
			</main>
		</div>
	);
};

export default TeamPage;
