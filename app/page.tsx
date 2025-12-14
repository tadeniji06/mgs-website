import Hero from "@/components/Hero";
import OurApproach from "@/components/OurApproach";
import WhoWeAre from "@/components/WhoWeAre";

const page = () => {
	return (
		<div className='min-h-screen'>
			<Hero />
			<WhoWeAre />
			<OurApproach />
		</div>
	);
};
export default page;
