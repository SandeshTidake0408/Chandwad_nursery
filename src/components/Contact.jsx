import React, { useEffect, useRef, useState } from "react";

export default function Contact() {
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

	return (
		<section
			ref={sectionRef}
			className={` bg-white py-12 px-4 sm:px-12 md:px-20 lg:px-32 transition-all duration-1000 ease-out ${
				visible
					? "opacity-100 translate-y-0"
					: "opacity-0 translate-y-5"
			}`}
		>
			<h2 className="text-3xl sm:text-5xl font-bold text-green-700 mb-8 text-center">
				संपर्क
			</h2>

			<div className="space-y-6 text-gray-800 text-lg">
				<div className=" rounded-xl shadow-sm p-6 bg-green-50 ">
					<h3 className="text-xl font-semibold text-green-600 mb-2">
						अधिकारी:
					</h3>
					<ul className="list-disc pl-5 space-y-1 ">
						<li>
							<strong>
								श्री. बाबासाहेब सिधुबाई महादेव बटुळे
							</strong>{" "}
							- कृषी अधिकारी (
							<a
								href="tel:9423102994"
								className="text-blue-600 underline"
							>
								9423102994
							</a>
							)
						</li>
						<li>
							<strong>श्री. धनेश शांताबाई विजय मेचकुल</strong> -
							कृषी सहाय्यक (
							<a
								href="tel:9423527283"
								className="text-blue-600 underline"
							>
								9423527283
							</a>
							)
						</li>
					</ul>
				</div>

				<div className="rounded-xl shadow-sm p-6  bg-green-50">
					<h3 className="text-xl font-semibold text-green-600 mb-2">
						ई-मेल:
					</h3>
					<p>
						<a
							href="mailto:90.chandwad100@gmail.com"
							className="text-blue-600 underline"
						>
							ao.chandwad100@gmail.com
						</a>
					</p>
				</div>

				<div className=" rounded-xl shadow-sm p-6  bg-green-50">
					<h3 className="text-xl font-semibold text-green-600 mb-2">
						कार्यालयाचा पत्ता:
					</h3>
					<p>
						कृषी चिकित्सालय, फळरोपवाटिका, <br />
						चांदवड मनमाड रोड, चांदवड, ता. चांदवड, जि. नाशिक
					</p>
				</div>
			</div>
		</section>
	);
}
