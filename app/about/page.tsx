import AboutGallery from "@/components/about/AboutGallery";
import AboutHero from "@/components/about/AboutHero";
import OurCommitment from "@/components/about/OurCommitment";
import OurValues from "@/components/about/OurValues";
import Ready from "@/components/Ready";

const page = () => {
	return (
		<div className=''>
			<AboutHero />
			<AboutGallery />
			<OurValues />
			<OurCommitment />
			<Ready />
		</div>
	);
};
export default page;
