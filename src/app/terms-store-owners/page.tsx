import React from "react"
import styles from "@/styles/terms.module.scss" // Import the SCSS module
import Link from "next/link"

export default function page() {
	return (
		<div className={styles.terms}>
			<div className={styles.header}>
				<Link href="/">
					<img
						className={styles.logo}
						src="/images/logo.png"
						alt="Company Logo"
					/>
				</Link>
				<p className={`${styles.tagline} ${styles.information}`}>
					We turn dreams into online stores
				</p>
			</div>

			<div className={styles["division-container"]} id="tnc">
				<img
					className={styles.cloud}
					src="/images/cloud-decorative.png"
					alt="Cloud"
				/>

				<h1>Terms and Conditions for product providers/store owners</h1>
				<h2>Introduction</h2>
				<p>
					Welcome to Dukon! By using our services, you agree to comply with and
					be bound by the following terms and conditions of use. Please read
					these terms carefully before using our services.
				</p>
				<h2>Definitions</h2>
				<ul>
					<li>
						"We," "us," or "Dukon" refers to the service provider of e-commerce
						website development.
					</li>
					<li>
						"You" refers to the user, client, or customer availing our services.
					</li>
					<li>
						"Services" refers to the e-commerce website development and related
						services provided by Dukon.
					</li>
				</ul>
				<h2>3. Services</h2>
				<p>
					Dukon provides e-commerce website development services to clients. Our
					services include, but are not limited to, website design, development,
					and maintenance.
				</p>

				<h2>4. Client Responsibilities</h2>
				<ul>
					<li>
						Clients are responsible for the content, products, and services
						offered on their e-commerce websites.
					</li>
					<li>
						Clients are required to comply with all applicable laws and
						regulations.
					</li>
					<li>
						Clients are responsible for managing customer transactions and
						addressing customer inquiries, disputes, or issues related to
						products or services.
					</li>
				</ul>

				<h2>5. Limitation of Liability</h2>
				<ul>
					<li>
						Dukon is not responsible for any loss, damage, or legal issues
						arising from the use of the e-commerce website, including but not
						limited to the purchase of products or services.
					</li>
					<li>
						Clients are solely responsible for the products and services they
						offer on their e-commerce websites.
					</li>
					<li>
						Dukon is not liable for any financial transactions or losses
						incurred during the purchase of products or services.
					</li>
				</ul>

				<h2>6. Intellectual Property</h2>
				<ul>
					<li>
						Clients retain ownership of their content, logos, and trademarks.
					</li>
					<li>
						Dukon retains ownership of code, software, and other materials
						developed during the website development process.
					</li>
				</ul>

				<h2>7. Confidentiality</h2>
				<p>
					Dukon agrees to keep confidential all proprietary information and
					trade secrets provided by the client.
				</p>

				<h2>8. Termination</h2>
				<ul>
					<li>Either party may terminate the agreement with written notice.</li>
					<li>
						Upon termination, clients are responsible for data backup and
						transition to another service provider.
					</li>
				</ul>

				<h2>9. Changes to Terms</h2>
				<ul>
					<li>
						Dukon reserves the right to modify these terms and conditions at any
						time.
					</li>
					<li>
						Clients will be notified of changes, and continued use of services
						constitutes acceptance of the modified terms.
					</li>
				</ul>

				<h2>11. Additional Terms</h2>
				<ul>
					<li>
						To access and use the Services, you agree to provide true, accurate
						and complete information to us during and after registration, and
						you shall be responsible for all acts done through the use of your
						registered account.
					</li>
					<li>
						Neither we nor any third parties provide any warranty or guarantee
						as to the accuracy, timeliness, performance, completeness or
						suitability of the information and materials offered on this website
						or through the Services, for any specific purpose. You acknowledge
						that such information and materials may contain inaccuracies or
						errors and we expressly exclude liability for any such inaccuracies
						or errors to the fullest extent permitted by law.
					</li>
					<li>
						Your use of our Services and the website is solely at your own risk
						and discretion. You are required to independently assess and ensure
						that the Services meet your requirements.
					</li>
					<li>
						The contents of the Website and the Services are proprietary to us,
						and you will not have any authority to claim any intellectual
						property rights, title, or interest in its contents.
					</li>
					<li>
						You acknowledge that unauthorized use of the Website or the Services
						may lead to action against you as per these Terms or applicable
						laws.
					</li>
					<li>
						You agree to pay us the charges associated with availing the
						Services.
					</li>
					<li>
						You agree not to use the website and/or Services for any purpose
						that is unlawful, illegal, or forbidden by these Terms, or Indian or
						local laws that might apply to you.
					</li>
					<li>
						You agree and acknowledge that the website and the Services may
						contain links to other third party websites. On accessing these
						links, you will be governed by the terms of use, privacy policy, and
						such other policies of such third party websites.
					</li>
					<li>
						You understand that upon initiating a transaction for availing the
						Services you are entering into a legally binding and enforceable
						contract with us for the Services.
					</li>
					<li>
						You shall be entitled to claim a refund of the payment made by you
						in case we are not able to provide the Service. The timelines for
						such return and refund will be according to the specific Service you
						have availed or within the time period provided in our policies (as
						applicable). In case you do not raise a refund claim within the
						stipulated time, then this would make you ineligible for a refund.
					</li>
					<li>
						Notwithstanding anything contained in these Terms, the parties shall
						not be liable for any failure to perform an obligation under these
						Terms if performance is prevented or delayed by a force majeure
						event.
					</li>
					<li>
						These Terms and any dispute or claim relating to it, or its
						enforceability, shall be governed by and construed in accordance
						with the laws of India.
					</li>
				</ul>

				<p>
					By using our services, you acknowledge that you have read, understood,
					and agree to be bound by these terms and conditions.
				</p>

				<p>
					If you have any questions or concerns, please contact us at [Your
					Contact Information].
				</p>
			</div>
			<div className={styles["division-container"]} id="privacy">
				<img
					className={styles.cloud}
					src="/images/cloud-decorative.png"
					alt="Cloud"
				/>

				<h1>Privacy Policy for Store Owners</h1>

				<h2>Information Sharing</h2>
				<p>
					We may share information with third parties for marketing and
					statistical purposes. This includes but is not limited to aggregated
					and anonymized data. By using our platform, you agree to this sharing
					of information.
				</p>

				<h2>Confidentiality</h2>
				<p>
					Store owners are required to maintain the confidentiality of user
					information provided during the normal course of business. This
					includes customer details, purchase history, and any other information
					obtained through the use of our platform. Store owners should
					implement adequate security measures to protect this information from
					unauthorized access or disclosure.
				</p>

				<h2>Marketing and Communication</h2>
				<p>
					Store owners may use customer information obtained through the
					platform for marketing and communication purposes related to their
					products and services. However, store owners must comply with
					applicable data protection laws and regulations, including obtaining
					necessary consents for marketing activities.
				</p>
			</div>
			<div className={styles["division-container"]} id="refunds-cancellations">
				<img
					className={styles.cloud}
					src="/images/cloud-decorative.png"
					alt="Cloud"
				/>
				<h1>Refunds and Cancellations Policy for Store Owners</h1>

				<h2>Responsibility</h2>
				<p>
					Store owners are solely responsible for processing refunds and
					cancellations that users proceed with. Dukon acts as a facilitator but
					does not handle the refund and cancellation process. It is the store
					owner's responsibility to address and resolve these matters.
				</p>

				<h2>Communication with Customers</h2>
				<p>
					Store owners should maintain open and transparent communication with
					customers regarding the refund and cancellation process. Timely
					responses to customer inquiries and clear communication about the
					status of refund requests are essential to building trust and
					providing a positive customer experience.
				</p>

				<h2>Refund Approval Criteria</h2>
				<p>
					Store owners should establish clear criteria for approving refunds and
					cancellations. This may include specifying conditions under which a
					refund is applicable, the timeframe for processing refunds, and any
					documentation required from customers to support their refund
					requests.
				</p>
			</div>
			<div className={styles["division-container"]} id="shipping">
				<img
					className={styles.cloud}
					src="/images/cloud-decorative.png"
					alt="Cloud"
				/>
				<h1>Shipping and Delivery Policy for Store Owners</h1>

				<h2>Responsibility</h2>
				<p>
					Store owners are responsible for the entire shipping and delivery
					process. This includes selecting appropriate delivery methods,
					providing accurate shipping information, and ensuring timely
					fulfillment of orders. Dukon facilitates communication but does not
					manage the shipping and delivery on behalf of store owners.
				</p>

				<h2>Shipping Information Accuracy</h2>
				<p>
					Store owners should provide accurate and detailed shipping information
					to customers. This includes estimated delivery times, shipping costs,
					and any other relevant details. Accurate information helps set clear
					expectations for customers and reduces the likelihood of
					shipping-related issues.
				</p>

				<h2>International Shipping</h2>
				<p>
					If offering international shipping, store owners should clearly
					communicate the terms and conditions associated with international
					orders. This may include additional shipping costs, customs duties,
					and estimated delivery times for international destinations.
				</p>

				<h2>Communication with Customers</h2>
				<p>
					Effective communication with customers regarding the status of their
					orders, shipment tracking details (if available), and any potential
					delays is crucial. Keeping customers informed enhances their overall
					shopping experience and helps build trust in the store's shipping and
					delivery process.
				</p>
			</div>
		</div>
	)
}
