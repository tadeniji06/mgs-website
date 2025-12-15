"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { mgs } from "@/assets";
import { headerLinks } from "@/utils/data";

// Explicit typing for header links
interface HeaderLink {
	title: string;
	link: string;
}

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] =
		useState<boolean>(false);
	const headerRef = useRef<HTMLElement | null>(null);

	const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
	const closeMobileMenu = () => setIsMobileMenuOpen(false);

	// Close menu on outside click / escape
	useEffect(() => {
		const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
			if (!headerRef.current) return;
			if (!headerRef.current.contains(e.target as Node)) {
				setIsMobileMenuOpen(false);
			}
		};

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") setIsMobileMenuOpen(false);
		};

		document.addEventListener("mousedown", handleOutsideClick);
		document.addEventListener("touchstart", handleOutsideClick);
		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
			document.removeEventListener("touchstart", handleOutsideClick);
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	// Auto-close mobile menu on desktop resize
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<header
			ref={headerRef}
			className='sticky top-0 z-50 backdrop-blur-xl bg-dark-nav border-b border-white/20'
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<nav className='flex items-center justify-between h-24'>
					{/* Logo */}
					<Link href='/' className='shrink-0'>
						<Image
							src={mgs}
							alt='mgs'
							width={120}
							height={80}
							priority
							// className='h-17.5 w-auto'
						/>
					</Link>

					{/* Desktop nav */}
					<ul className='hidden lg:flex items-center gap-8'>
						{(headerLinks as HeaderLink[]).map((link) => (
							<li key={link.title}>
								<Link
									href={link.link}
									className='text-white/90 hover:text-white transition-colors font-medium text-xl'
								>
									{link.title}
								</Link>
							</li>
						))}
					</ul>

					{/* Desktop actions */}
					<div className='hidden md:flex items-center gap-4'>
						<Link
							href='/'
							target='_blank'
							className='bg-light-blue text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white/90 hover:text-dark-nav transition'
						>
							Get In Touch
						</Link>
					</div>

					{/* Mobile toggle */}
					<button
						type='button'
						aria-label='Toggle menu'
						aria-expanded={isMobileMenuOpen}
						onClick={toggleMobileMenu}
						className='md:hidden p-2 rounded-lg hover:bg-white/10 transition'
					>
						<Icon
							icon={isMobileMenuOpen ? "mdi:close" : "mdi:menu"}
							className='text-white text-2xl'
						/>
					</button>
				</nav>

				{/* Mobile menu */}
				<div
					className={`md:hidden overflow-hidden transition-all duration-300 ${
						isMobileMenuOpen
							? "max-h-100 opacity-100"
							: "max-h-0 opacity-0"
					}`}
				>
					<div className='pb-4 space-y-2'>
						{(headerLinks as HeaderLink[]).map((link) => (
							<Link
								key={link.title}
								href={link.link}
								onClick={closeMobileMenu}
								className='block px-4 py-3 rounded-lg text-white/90 hover:bg-white/10 transition'
							>
								{link.title}
							</Link>
						))}

						<div className='pt-3 border-t border-white/20 flex gap-3 px-4'>
							<button className='flex-1 flex items-center justify-center gap-2 bg-white/10 text-white py-3 rounded-lg'>
								<Icon icon='ic:baseline-search' />
								<span className='text-sm'>Search</span>
							</button>

							<Link
								href='/'
								target='_blank'
								onClick={closeMobileMenu}
								className='flex-1 text-center bg-light-blue text-white py-3 rounded-lg text-sm font-medium'
							>
								Get In Touch
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
