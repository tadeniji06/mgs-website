import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { mgs } from "@/assets";

const Footer = () => {
	return (
		<footer className='bg-primary-blue text-white px-6 md:px-20 py-14 rounded-t-3xl'>
			<div className='grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto'>
				{/* BRAND */}
				<div className='space-y-4'>
					<Image src={mgs} alt='MGS Logo' width={120} height={120} />
					<p className='text-sm text-white/80 leading-relaxed'>
						<span className='font-semibold'>
							Management, Growth & Sponsorship
						</span>
						<br />
						Professional representation for athletes worldwide.
					</p>

					{/* Socials */}
					<div className='flex gap-4 text-xl text-white/80'>
						<Icon
							icon='mdi:instagram'
							className='cursor-pointer hover:text-white'
						/>
						<Icon
							icon='mdi:twitter'
							className='cursor-pointer hover:text-white'
						/>
						<Icon
							icon='mdi:linkedin'
							className='cursor-pointer hover:text-white'
						/>
						<Icon
							icon='mdi:facebook'
							className='cursor-pointer hover:text-white'
						/>
					</div>
				</div>

				{/* QUICK LINKS */}
				<div>
					<h4 className='font-semibold mb-4'>Quick Links</h4>
					<ul className='space-y-2 text-sm text-white/75'>
						<li>
							<Link href='/'>Home</Link>
						</li>
						<li>
							<Link href='/about'>About</Link>
						</li>
						<li>
							<Link href='/team'>Our Team</Link>
						</li>
						<li>
							<Link href='/athletes'>Athletes</Link>
						</li>
						<li>
							<Link href='/contact'>Contact Us</Link>
						</li>
					</ul>
				</div>

				{/* SERVICES */}
				<div>
					<h4 className='font-semibold mb-4'>Our Services</h4>
					<ul className='space-y-2 text-sm text-white/75'>
						<li>Athlete Management</li>
						<li>Career Growth Strategy</li>
						<li>Sponsorship Acquisition</li>
						<li>Global Representation</li>
						<li>Brand Building</li>
					</ul>
				</div>

				{/* CONTACT */}
				<div>
					<h4 className='font-semibold mb-4'>Contact Us</h4>

					<div className='space-y-4 text-sm text-white/80'>
						<div className='flex items-center gap-3'>
							<div className='p-2 rounded-full bg-light-blue/20'>
								<Icon icon='mdi:email-outline' />
							</div>
							<span>support@mgssport.ng</span>
						</div>

						<div className='flex items-center gap-3'>
							<div className='p-2 rounded-full bg-light-blue/20'>
								<Icon icon='mdi:phone-outline' />
							</div>
							<span>007 009 78905</span>
						</div>
					</div>
				</div>
			</div>

			{/* FOOTER BASE */}
			<div className='mt-12 text-center text-xs text-white/50'>
				copyright@mgs 2025
			</div>
		</footer>
	);
};

export default Footer;
