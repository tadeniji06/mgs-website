import Link from "next/link";

const Ready = () => {
	return (
		<div className='mx-auto my-12 flex max-w-5xl flex-col items-center justify-center gap-4 rounded-xl border-4 border-sage bg-[#121212] p-6 text-white shadow-2xl md:gap-6 md:border-8 md:p-10'>
			<h1 className='text-center text-2xl font-bold tracking-tight md:text-4xl text-sage'>
				Ready to Elevate Your Career?
			</h1>

			<p className='max-w-2xl text-center text-sm leading-relaxed text-gray-300 md:text-base'>
				If you’re an athlete or brand looking to partner with a team
				that truly understands representation, let’s talk.
			</p>

			<Link
				href='/contact'
				className='mt-2 cursor-pointer rounded-2xl bg-sage px-10 py-4 text-sm font-bold tracking-wide text-black transition-transform duration-300 hover:scale-105 hover:bg-white md:px-14 md:py-5 md:text-base'
			>
				GET IN TOUCH
			</Link>
		</div>
	);
};

export default Ready;
