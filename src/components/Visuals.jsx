import React, { useEffect, useState, useRef } from "react";

export default function Visuals() {
	const [visible, setVisible] = useState(false);
	const sectionRef = useRef(null);

	// Detect if device is mobile
	const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.unobserve(entry.target);
				}
			},
			{ threshold: 0.1 }
		);
		if (sectionRef.current) observer.observe(sectionRef.current);

		return () => observer.disconnect();
	}, []);

	// Image paths (.jpg — update extension if needed)
	const images = Array.from(
		{ length: 47 },
		(_, i) => `/images/visuals/${i}.jpg`
	);

	return (
		<section
			ref={sectionRef}
			className="bg-white py-12 px-4 sm:px-12 md:px-20 lg:px-32 text-gray-800"
		>
			<h2 className="text-3xl sm:text-5xl font-bold text-green-700 mb-10 text-center">
				छायाचित्रे
			</h2>

			<div className="flex flex-wrap justify-center gap-6">
				{images.map((src, index) => (
					<div
						key={index}
						className={`transition-all duration-700 ${
							visible || isMobile
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-5"
						} sm:flex-[1_1_100%] md:flex-[1_1_20%]`}
					>
						<div className="overflow-hidden rounded-md shadow-sm">
							<img
								src={src}
								className="w-full h-[400px] object-cover rounded-md transition-transform duration-300 hover:scale-105"
								loading="lazy"
							/>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
