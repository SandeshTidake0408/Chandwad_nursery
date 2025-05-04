import React from "react";

export default function Footer() {
	return (
		<footer className="bg-green-700 text-white py-10 px-4 sm:px-12 md:px-20 lg:px-32">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{/* About Section */}
				<div>
					<h3 className="text-xl font-semibold mb-3">
						कृषी विभाग, चांदवड
					</h3>
					<p className="text-sm">
						फळरोपवाटिका, चांदवड मनमाड रोड,
						<br />
						ता. चांदवड, जि. नाशिक - 423101
					</p>
					<p className="mt-2 text-sm">
						ईमेल: ao.chandwad100@gmail.com
					</p>
				</div>

				{/* Quick Links */}
				<div>
					<h3 className="text-xl font-semibold mb-3">
						उपयुक्त लिंक्स
					</h3>
					<ul className="space-y-2 text-sm">
						<li>
							<a
								href="#services"
								className="hover:underline hover:text-green-200"
							>
								सेवा
							</a>
						</li>
						<li>
							<a
								href="#visuals"
								className="hover:underline hover:text-green-200"
							>
								छायाचित्रे
							</a>
						</li>
						<li>
							<a
								href="#contact"
								className="hover:underline hover:text-green-200"
							>
								संपर्क
							</a>
						</li>
					</ul>
				</div>

				{/* Developer Credit */}
				<div>
					<h3 className="text-xl font-semibold mb-3">
						वेबसाईट डेव्हलपर
					</h3>
					<p className="text-sm">Sandesh Tidake</p>
					<p className="text-sm">
						फोन:{" "}
						<a href="tel:9130427953" className="hover:underline">
							9130427953
						</a>
					</p>
					<p className="text-sm">
						© {new Date().getFullYear()} सर्व हक्क राखीव.
					</p>
				</div>
			</div>

			{/* Bottom line */}
			<div className="mt-10 text-center text-sm text-green-200">
				ही वेबसाईट कृषी विभाग, चांदवड यांच्यासाठी तयार केली आहे.
			</div>
		</footer>
	);
}
