import Hero from "@/components/Hero";
import OurApproach from "@/components/OurApproach";
import OurServices from "@/components/OurServices";
import Ready from "@/components/Ready";
import WhoWeAre from "@/components/WhoWeAre";

const page = () => {
	return (
		<div className='min-h-screen'>
			<Hero />
			<WhoWeAre />
			<OurApproach />
			{/* <OurServices /> */}
			<Ready />
		</div>
	);
};
export default page;
