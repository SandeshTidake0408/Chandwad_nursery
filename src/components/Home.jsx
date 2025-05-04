import React from "react";
import bgimg1 from "../assets/img1.png";
export default function Home() {
	return (
		<div
			className="relative h-screen bg-cover bg-center bg-no-repeat"
			style={{
				backgroundImage: `url(${bgimg1})`, // Add your image path here
			}}
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-black opacity-50"></div>

			{/* Text on top of the image */}
			<div className="absolute inset-0 flex items-center justify-center text-white text-center p-4">
				{/* Text with animation */}
            <div className="animate-fadeInUp flex flex-col space-y-10">
					<p className="text-5xl font-bold sm:text-8xl text-green-500">
						{/* First line stands out with a blur effect */}
						शासकीय फळ रोपवाटिका
					</p>
					<p className="mt-4 text-xl font-medium sm:text-2xl  flex flex-col space-y-2">
						<span>महाराष्ट्र शासन - कृषी विभाग</span>
						<span>उपविभागीय कृषी अधिकारी निफाड</span>
						<span>
							एन.एच.बी. 2 स्टार मानांकन प्राप्त रोपवाटिका कृषी
							चिकित्सालय
						</span>
						<span>फळ रोपवाटिका चांदवड ता.चांदवड जि.नाशिक</span>
					</p>
				</div>
			</div>
		</div>
	);
}
