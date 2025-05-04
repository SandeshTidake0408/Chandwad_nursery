import React, { useEffect, useState, useRef } from "react";

export default function Services() {
	const [visible, setVisible] = useState(false);
	const sectionRef = useRef(null);

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
	}, []);

	const services = [
		{ title: "आंबा", detail: "केशर घफुस, राजापुरी" },
		{ title: "पेरू", detail: "2-49" },
		{ title: "चीकू", detail: "कालिपली" },
		{ title: "डाळिंब", detail: "सु-भगवा" },
		{ title: "लिंबू", detail: "साई सरबती" },
		{ title: "नारळ", detail: "बानावली" },
		{ title: "सीताफळ", detail: "बाळानगर" },
		{
			title: "इतर",
			detail: "वनरोपे (५००), पिकनिहाय बुरोरेप, शोभिवंत फुलझाडे, रामादी दरनेदार कलमे/रोपे",
		},
	];

	return (
		<section
			ref={sectionRef}
			className="bg-white py-12 px-4 sm:px-12 md:px-20 lg:px-32 text-gray-800"
		>
			<h2
				className={`text-3xl sm:text-5xl font-bold text-green-700 mb-10 transition-all duration-1000 ease-out ${
					visible
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-5"
				}`}
			>
				उपलब्ध कलमे / रोपे
			</h2>

			<div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
				{services.map((item, index) => (
					<div
						key={index}
						className={`border border-green-100 rounded-sm p-5 shadow-sm transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-md ${
							visible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-5"
						}`}
						style={{ transitionDelay: `${index * 100}ms` }}
					>
						<h3 className="text-xl font-semibold text-green-600 mb-2">
							{item.title}
						</h3>
						<p className="text-gray-700 text-sm">{item.detail}</p>
					</div>
				))}
			</div>
		</section>
	);
}
