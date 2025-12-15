import AboutHero from "@/components/about/AboutHero";
import OurCommitment from "@/components/about/OurCommitment";
import OurValues from "@/components/about/OurValues";
import Ready from "@/components/Ready";

const page = () => {
	return (
		<div className=''>
			<AboutHero />
			<OurValues />
			<OurCommitment />
			<Ready />
		</div>
	);
};
export default page;
