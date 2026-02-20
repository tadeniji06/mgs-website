"use client";

import { busuyi, femi, myles, user } from "@/assets";
import Image, { StaticImageData } from "next/image";
import { MoveRight } from "lucide-react";
import Link from "next/link";

interface TeamMember {
	name: string;
	role: string;
	qualifications?: string;
	email?: string;
	image: StaticImageData;
}

const team: TeamMember[] = [
	{
		name: "Myles Grant-Smith",
		role: "Managing Director",
		qualifications: "BSc (Hons) Sport Coaching and Development",
		email: "myles@mgsglobal.co.uk",
		image: myles,
	},
	{
		name: "Busuyi Ogunduyile",
		role: "Head of Athlete Relations",
		qualifications: "Licensed NBBOC manager",
		email: "busuyi@mgsglobal.co.uk",
		image: busuyi,
	},
	{
		name: "Femilee Olawuyi",
		role: "Commercial Executive",
		qualifications: "Licensed NBBOC manager",
		email: "femilee@mgsglobal.co.uk",
		image: femi,
	},
	{
		name: "Alex Bailey",
		role: "Legal Consultant",
		qualifications: "Masters of Law, Oxford University",
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
						<h1 className='text-5xl font-black tracking-tighter text-white md:text-7xl lg:text-8xl'>
							OUR <br /> <span className='text-light-blue'>TEAM</span>
						</h1>

						<Link
							href='/contact'
							className='group mt-4 flex w-fit items-center gap-2 rounded-full bg-light-blue px-8 py-4 text-sm font-bold text-black transition-all hover:bg-white'
						>
							Get in touch with Us
							<MoveRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
						</Link>
					</div>

					{/* RIGHT - Scrollable List */}
					<div className='flex flex-1 flex-col gap-20'>
						{team.map((member, idx) => (
							<div key={idx} className='group flex flex-col gap-6'>
								{/* Image Container */}
								<div className='relative aspect-4/3 w-full overflow-hidden rounded-sm bg-white/5'>
									<Image
										src={member.image}
										alt={member.name}
										// fill
										className='object-cover transition-transform duration-700 group-hover:scale-105'
										sizes='(max-width: 768px) 100vw, 50vw'
									/>
									{/* Overlay Gradient */}
									<div className='absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
								</div>

								{/* Info */}
								<div className='grid grid-cols-[1fr] gap-4 text-sm md:text-base'>
									<div>
										<h3 className='text-2xl font-bold tracking-wide text-white uppercase md:text-3xl'>
											{member.name}
										</h3>
										<p className='text-light-blue font-semibold uppercase tracking-wider mt-1'>
											{member.role}
										</p>
									</div>

									<div className='space-y-1 text-gray-300'>
										{member.qualifications && (
											<p className='font-light italic'>
												{member.qualifications}
											</p>
										)}
										{member.email && (
											<a
												href={`mailto:${member.email}`}
												className='block text-white hover:text-light-blue transition-colors underline decoration-light-blue/50 underline-offset-4'
											>
												{member.email}
											</a>
										)}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default TeamPage;
