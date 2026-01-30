"use client";

import { user } from "@/assets";
import Ready from "@/components/Ready";
import Image, { StaticImageData } from "next/image";
import { MoveRight } from "lucide-react";

interface TeamMember {
	name: string;
	role: string;
	tagline?: string;
	image: StaticImageData;
}

const team: TeamMember[] = [
	{
		name: "Myles Grant-Smith",
		role: "Managing Director",
		tagline: "NIL",
		image: user,
	},
	{
		name: "Femilee Olawuyi",
		role: "Commercial Executive",
		tagline: "NIL",
		image: user,
	},
	{
		name: "Alex Matvienko",
		role: "Non-Executive Director",
		tagline: "NIL",
		image: user,
	},
	{
		name: "Busuyi Ogunduyile",
		role: "Head of West African Athlete Relations",
		tagline: "NIL",
		image: user,
	},
	{
		name: "Alex Bailey",
		role: "Legal Consultant",
		tagline: "Masters of Law, Oxford University",
		image: user,
	},
];

const TeamPage = () => {
	return (
		<div className='relative min-h-screen w-full bg-black text-white'>
			{/* Ambient Background Glows */}
			<div className='pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-primary-blue/30 blur-[120px]' />
			<div className='pointer-events-none fixed right-0 bottom-0 h-[500px] w-[500px] translate-x-1/4 translate-y-1/4 rounded-full bg-dark-blue/20 blur-[100px]' />

			<section className='px-6 py-24 md:px-20'>
				<div className='mx-auto flex max-w-7xl flex-col items-start gap-12 md:flex-row md:gap-24'>
					{/* LEFT - Sticky Content */}
					<div className='flex max-w-sm flex-col gap-6 md:sticky md:top-32'>
						<p className='text-xs font-semibold tracking-widest text-light-blue uppercase'>
							OUR TEAM
						</p>

						<h1 className='text-3xl font-medium leading-tight md:text-4xl lg:text-5xl'>
							Meet the dedicated professionals fighting for athlete
							success worldwide
						</h1>

						<button className='group mt-4 flex w-fit items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all hover:bg-gray-200'>
							Get in touch with Us
							<MoveRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
						</button>
					</div>

					{/* RIGHT - Scrollable List */}
					<div className='flex flex-1 flex-col gap-20'>
						{team.map((member, idx) => (
							<div key={idx} className='group flex flex-col gap-6'>
								{/* Image Container */}
								<div className='relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-white/5'>
									<Image
										src={member.image}
										alt={member.name}
										fill
										className='object-cover transition-transform duration-700 group-hover:scale-105'
										sizes='(max-width: 768px) 100vw, 50vw'
									/>
									{/* Overlay Gradient (optional, for aesthetics) */}
									<div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
								</div>

								{/* Info */}
								<div className='grid grid-cols-[auto_1fr] gap-x-8 gap-y-2 text-sm md:text-base'>
									{/* Name Row */}
									<span className='font-semibold text-gray-400'>
										NAME:
									</span>
									<span className='font-bold tracking-wide text-white uppercase'>
										{member.name}
									</span>

									{/* Role Row */}
									<span className='font-semibold text-gray-400'>
										ROLE:
									</span>
									<span className='font-bold tracking-wide text-white uppercase'>
										{member.role}
									</span>
								</div>
							</div>
						))}

						{/* Bottom CTA Element if needed */}
						<div className='mt-10'>
							<Ready />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default TeamPage;
