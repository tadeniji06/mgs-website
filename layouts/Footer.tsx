import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { mgs } from "@/assets";

const Footer = () => {
	return (
		<footer className='bg-[#121212] text-white px-6 md:px-20 py-14 rounded-t-3xl border-t border-white/10'>
			<div className='grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto'>
				{/* BRAND */}
				<div className='space-y-4'>
					{/* <Image src={mgs} alt='MGS Logo' width={120} height={120} /> */}
					<h2 className='text-3xl font-black tracking-tighter text-white'>
						MGS
					</h2>
					<p className='text-sm text-gray-400 leading-relaxed'>
						<span className='font-semibold text-sage'>
							Management, Growth & Sponsorship
						</span>
						<br />
						Professional representation for athletes worldwide.
					</p>

					{/* Socials */}
					<div className='flex gap-4 text-xl text-gray-400'>
						<Icon
							icon='mdi:instagram'
							className='cursor-pointer hover:text-sage transition-colors'
						/>
						<Icon
							icon='mdi:twitter'
							className='cursor-pointer hover:text-sage transition-colors'
						/>
						<Icon
							icon='mdi:linkedin'
							className='cursor-pointer hover:text-sage transition-colors'
						/>
						<Icon
							icon='mdi:facebook'
							className='cursor-pointer hover:text-sage transition-colors'
						/>
					</div>
				</div>

				{/* QUICK LINKS */}
				<div>
					<h4 className='font-semibold mb-4 text-sage'>
						Quick Links
					</h4>
					<ul className='space-y-2 text-sm text-gray-400'>
						<li>
							<Link
								href='/'
								className='hover:text-white transition-colors'
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href='/about'
								className='hover:text-white transition-colors'
							>
								Our Story
							</Link>
						</li>
						<li>
							<Link
								href='/team'
								className='hover:text-white transition-colors'
							>
								Our Team
							</Link>
						</li>
						<li>
							<Link
								href='/athletes'
								className='hover:text-white transition-colors'
							>
								Athletes
							</Link>
						</li>
						<li>
							<Link
								href='/contact'
								className='hover:text-white transition-colors'
							>
								Contact Us
							</Link>
						</li>
					</ul>
				</div>

				{/* SERVICES */}
				<div>
					<h4 className='font-semibold mb-4 text-sage'>
						Our Services
					</h4>
					<ul className='space-y-2 text-sm text-gray-400'>
						<li>Athlete Management</li>
						<li>Career Growth Strategy</li>
						<li>Sponsorship Acquisition</li>
						<li>Global Representation</li>
						<li>Brand Building</li>
					</ul>
				</div>

				{/* CONTACT */}
				<div>
					<h4 className='font-semibold mb-4 text-sage'>Contact Us</h4>

					<div className='space-y-6 text-sm text-gray-400'>
						{/* Emails */}
						<div className='flex gap-3'>
							<div className='mt-1 shrink-0 text-sage'>
								<Icon icon='mdi:email-outline' />
							</div>
							<div className='flex flex-col gap-1'>
								<a
									href='mailto:sponsorship@mgsglobal.co.uk'
									className='hover:text-white transition-colors'
								>
									sponsorship@mgsglobal.co.uk
								</a>
								<a
									href='mailto:management@mgsglobal.co.uk'
									className='hover:text-white transition-colors'
								>
									management@mgsglobal.co.uk
								</a>
							</div>
						</div>

						{/* Phones */}
						<div className='flex gap-3'>
							<div className='mt-1 shrink-0 text-sage'>
								<Icon icon='mdi:phone-outline' />
							</div>
							<div className='flex flex-col gap-1'>
								<p>+44 7824 538871 (UK)</p>
								<p>+234 817 676 4864 (NG)</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* FOOTER BASE */}
			<div className='mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-500'>
				&copy; {new Date().getFullYear()} MGS Sports Agency. All
				rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
