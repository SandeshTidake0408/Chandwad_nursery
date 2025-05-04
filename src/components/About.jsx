import React, { useEffect, useRef, useState } from "react";

export default function About() {
	const [visible, setVisible] = useState(false);
	const sectionRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setVisible(true);
						observer.unobserve(entry.target); // Unobserve after triggering once
					}
				});
			},
			{
				threshold: 0.2, // Trigger when 20% of section is visible
			}
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) observer.unobserve(sectionRef.current);
		};
	}, []);

	return (
		<section
			ref={sectionRef}
			className="bg-white py-12 px-4 sm:px-12 md:px-20 lg:px-32 text-gray-800"
		>
			<div className="max-w-5xl mx-auto">
				<h2
					className={`text-3xl sm:text-5xl font-bold text-green-700 mb-6 transition-all duration-1000 ease-out ${
						visible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-5"
					}`}
				>
					आमच्याबद्दल
				</h2>

				{[
					"कृषि चिकित्सालय फळरोपवाटिका चांदवड ता. चांदवड जि. नाशिक ही रोपवाटिका मुंबई आग्रा महामार्गा पासून 1 कि.मी. अंतरावर असून जिल्हा मुख्यालयापासून 65 कि.मी. अंतरावर आहे.",
					"या रोपवाटीकेची स्थापना सन 1983 मध्ये झाली असून या रोपवाटिकेचे एकूण क्षेत्र 11.83 हेक्टर आहे. त्यापैकी 6.74 हेक्टर क्षेत्रावर आंबा, पेरू, डाळिंब, लिंबू, चिकू, सिताफळ, नारळ, जांभूळ, चिंच या फळपिकांचे जातीवंत मातृवृक्ष लागवड करण्यात आलेली आहेत.",
					"उपलब्ध मातृवृक्षांपासून दरवर्षी दर्जेदार कलमे व रोपे तयार करून कृषि विभागाच्या विविध फळबाग लागवड योजनेत व शेतकऱ्यांना शासकीय दरात वाटप केली जातात.",
					"रोपवाटीकेवरील दैनंदिन कामकाजाचे नियोजन व अंमलबजावणी कृषि अधिकारी व कृषि सहायक, कृषि चिकित्सालय फळरोपवाटिका चांदवड हे करत असून त्यावरील सनियंत्रण मा. उपविभागीय कृषि अधिकारी निफाड हे करतात.",
				].map((para, idx) => (
					<p
						key={idx}
						className={`text-lg leading-relaxed mt-4 transition-all duration-1000 ease-out ${
							visible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-5"
						}`}
						style={{ transitionDelay: `${300 + idx * 100}ms` }}
					>
						{para}
					</p>
				))}
			</div>
		</section>
	);
}
