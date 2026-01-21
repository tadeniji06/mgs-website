const OurValues = () => {
	const values = [
		{
			title: "Professionalism",
			desc: "We maintain the highest standards in every interaction, contract, and partnership we facilitate.",
		},
		{
			title: "Loyalty",
			desc: "Your success is our success. We stand by our athletes through every challenge and triumph.",
		},
		{
			title: "Growth",
			desc: "We’re committed to continuous improvement — for our athletes and for ourselves.",
		},
		{
			title: "Global Reach",
			desc: "Our international network ensures opportunities aren’t limited by geography.",
		},
		{
			title: "Integrity",
			desc: "Transparency and honesty form the foundation of every relationship we build.",
		},
		{
			title: "Athlete-First",
			desc: "Every decision we make starts with one question: What’s best for the athlete?",
		},
	];

	return (
		<section className='bg-linear-to-r from-black via-light-blue/15 to-primary-blue px-6 py-16 text-white md:px-20'>
			<div className='mx-auto flex max-w-7xl flex-col items-start gap-12 md:flex-row md:gap-20'>
				{/* LEFT */}
				<div className='flex max-w-xl flex-col gap-6 sticky top-32'>
					<p className='text-xs tracking-widest text-white/70'>
						OUR VALUES
					</p>

					<h2 className='text-2xl font-medium leading-snug md:text-3xl'>
						The principles that guide everything we do. We don’t just
						manage athletes; we elevate them.
					</h2>

					<button className='mt-2 w-fit rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90'>
						Get in touch with us →
					</button>
				</div>

				{/* RIGHT */}
				<div className='flex flex-1 flex-col'>
					{values.map((item, i) => (
						<div
							key={i}
							className='border-b border-white/20 py-6 first:pt-0'
						>
							<h3 className='mb-2 text-sm font-semibold md:text-base'>
								{item.title}
							</h3>
							<p className='max-w-lg text-xs leading-relaxed text-white/75 md:text-sm'>
								{item.desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurValues;
