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

			<div className={styles["division-container"]}>
				<img
					className={styles.cloud}
					src="/images/cloud-decorative.png"
					alt="Cloud"
				/>

				<h2>All terms and conditions for Store Owners and Product Providers</h2>

				<p>
					If you are the owner of a store you have to comply and accept all the
					terms and conditions provided on the page{" "}
					<Link href="/terms-store-owners">
						Terms and Conditions for Store Owners
					</Link>
					<br />
					By using the platform you accept all the terms and conditions provided
					here and on the{" "}
					<Link href="/terms-store-owners">
						Terms and Conditions for Store Owners
					</Link>
				</p>
			</div>

			<div className={styles["division-container"]} id="tnc">
				<img
					className={styles.cloud}
					src="/images/cloud-decorative.png"
					alt="Cloud"
				/>

				<h1>Terms and Conditions for Customers of Stores</h1>

				<p>
					Welcome to Dukon! This page outlines the terms and conditions for
					customers using the e-commerce platform provided by Dukon. By using
					our services, you agree to comply with and be bound by the following
					terms and conditions of use. Please read these terms carefully before
					making any purchases or using our services.
				</p>

				<h3>1. Products and Services</h3>
				<p>
					Customers acknowledge that Dukon is a platform that allows store
					owners to showcase and sell their products and services. Dukon is not
					responsible for the quality, accuracy, or legality of products and
					services offered by store owners.
				</p>

				<h3>2. Store Owner Responsibility</h3>
				<p>
					Store owners are solely responsible for the products and services they
					offer on their e-commerce websites. Customers agree that any issues
					related to the purchase of products or services, including but not
					limited to quality, delivery, and refunds, should be addressed
					directly with the respective store owner.
				</p>

				<h3>3. Ordering and Payment</h3>
				<p>
					Customers agree to provide accurate and complete information when
					placing orders through the Dukon platform. Payments for products or
					services will be processed securely by Dukon. Customers should review
					and comply with Dukon's payment terms and conditions.
				</p>

				<h3>4. User Accounts</h3>
				<p>
					Customers may be required to create user accounts to make purchases.
					It is the customer's responsibility to maintain the confidentiality of
					account information, including usernames and passwords. Customers are
					solely responsible for all activities that occur under their account.
				</p>

				<h3>5. Limitation of Liability</h3>
				<p>
					Customers acknowledge that any disputes or issues related to products
					or services should be resolved with the store owner. Dukon is not
					liable for any losses, damages, or legal issues arising from the use
					of the e-commerce platform, including the purchase of products or
					services.
				</p>

				<h3>6. Intellectual Property</h3>
				<p>
					The contents of the Dukon website and platform are proprietary, and
					customers will not have any authority to claim any intellectual
					property rights, title, or interest in its contents.
				</p>

				<h3>7. Links to Third-Party Websites</h3>
				<p>
					Customers understand that the Dukon platform may contain links to
					third-party websites. On accessing these links, customers will be
					governed by the terms of use, privacy policy, and other policies of
					such third-party websites.
				</p>

				<h3>8. Refunds and Returns</h3>
				<p>
					Customers are entitled to claim a refund of the payment made in case
					the store owner is unable to provide the service or deliver the
					product. The timelines for return and refund will be according to the
					specific policies of the store owner or within the time period
					provided in Dukon's policies (as applicable).
				</p>
			</div>
			<div className={styles["division-container"]} id="privacy">
				<img
					className={styles.cloud}
					src="/images/cloud-decorative.png"
					alt="Cloud"
				/>

				<h1>Privacy Policy for Customers of Stores</h1>

				<p>
					This Privacy Policy governs the manner in which Dukon collects, uses,
					maintains, and discloses information collected from users (each, a
					"User") of the Dukon website ("Site"). This privacy policy applies to
					the Site and all products and services offered by Dukon.
				</p>

				<h3>Personal Identification Information</h3>
				<p>
					We may collect personal identification information from Users in a
					variety of ways, including, but not limited to, when Users visit our
					site, register on the site, place an order, subscribe to the
					newsletter, and in connection with other activities, services,
					features, or resources we make available on our Site.
				</p>
				<p>
					Users may be asked for, as appropriate, name, email address, mailing
					address, phone number, and credit card information. We will collect
					personal identification information from Users only if they
					voluntarily submit such information to us. Users can always refuse to
					supply personally identification information, except that it may
					prevent them from engaging in certain Site-related activities.
				</p>

				<h3>Non-personal Identification Information</h3>
				<p>
					We may collect non-personal identification information about Users
					whenever they interact with our Site. Non-personal identification
					information may include the browser name, the type of computer, and
					technical information about Users' means of connection to our Site,
					such as the operating system and the Internet service providers
					utilized and other similar information.
				</p>

				<h3>Web Browser Cookies</h3>
				<p>
					Our Site may use "cookies" to enhance User experience. Users' web
					browsers place cookies on their hard drive for record-keeping purposes
					and sometimes to track information about them. Users may choose to set
					their web browser to refuse cookies or to alert you when cookies are
					being sent. If they do so, note that some parts of the Site may not
					function properly.
				</p>

				<h3>How We Use Collected Information</h3>
				<p>
					Dukon may collect and use Users' personal information for the
					following purposes:
				</p>
				<ul>
					<li>
						To improve customer service: Information you provide helps us
						respond to your customer service requests and support needs more
						efficiently.
					</li>
					<li>
						To personalize user experience: We may use information in the
						aggregate to understand how our Users as a group use the services
						and resources provided on our Site.
					</li>
					<li>
						To process payments: We may use the information Users provide about
						themselves when placing an order only to provide service to that
						order. We do not share this information with outside parties except
						to the extent necessary to provide the service.
					</li>
					<li>
						To run a promotion, contest, survey, or other Site feature: To send
						Users information they agreed to receive about topics we think will
						be of interest to them.
					</li>
					<li>
						To send periodic emails: We may use the email address to send User
						information and updates pertaining to their order. It may also be
						used to respond to their inquiries, questions, and/or other
						requests.
					</li>
				</ul>

				<h3>How We Protect Your Information</h3>
				<p>
					We adopt appropriate data collection, storage, and processing
					practices and security measures to protect against unauthorized
					access, alteration, disclosure, or destruction of your personal
					information, username, password, transaction information, and data
					stored on our Site.
				</p>

				<h3>Sharing Your Personal Information</h3>
				<p>
					We may share information with third parties for marketing or other
					purposes.
				</p>
				<p>
					We may share your information with the store owner, or the store from
					where you purchased the store
				</p>

				<h3>Changes to This Privacy Policy</h3>
				<p>
					Dukon has the discretion to update this privacy policy at any time.
					When we do, we will revise the updated date at the bottom of this
					page. We encourage Users to frequently check this page for any changes
					to stay informed about how we are helping to protect the personal
					information we collect. You acknowledge and agree that it is your
					responsibility to review this privacy policy periodically and become
					aware of modifications.
				</p>

				<h3>Your Acceptance of These Terms</h3>
				<p>
					By using this Site, you signify your acceptance of this policy and
					terms of service. If you do not agree to this policy, please do not
					use our Site. Your continued use of the Site following the posting of
					changes to this
				</p>
			</div>

			<div className={styles["division-container"]} id="refunds-cancellations">
				<img
					className={styles.cloud}
					src="/images/cloud-decorative.png"
					alt="Cloud"
				/>

				<h1>Refunds and Cancellations Policy for Customers of Stores</h1>

				<p>
					Thank you for using Dukon. This page outlines our policy regarding
					refunds and cancellations. By using our services, you agree to comply
					with and be bound by the following terms and conditions. Please read
					these terms carefully before making any purchases or using our
					services.
				</p>

				<h3>1. Refunds</h3>
				<p>
					Refunds for products or services purchased on the Dukon platform are
					the responsibility of the respective store owner. Dukon will
					facilitate the refund process on behalf of the store owner, but the
					store owner holds the responsibility for approving and processing
					refunds.
				</p>

				<h3>2. Cancellations</h3>
				<p>
					Cancellation of orders or services is at the discretion of the store
					owner. Customers should contact the store owner directly to request
					cancellations. Dukon will assist in facilitating the communication
					between customers and store owners but does not have the authority to
					approve cancellations.
				</p>

				<h3>3. Communication with Store Owners</h3>
				<p>
					Customers are encouraged to communicate directly with the respective
					store owner for any issues related to refunds or cancellations.
					Contact information for store owners is typically available on the
					Dukon platform, and customers should reach out to them for timely
					resolution.
				</p>

				<h3>4. Dukon's Role</h3>
				<p>
					Dukon acts as a platform for facilitating e-commerce transactions, and
					while we will assist in the communication process, we are not
					responsible for refund approvals, processing, or cancellations. The
					terms and conditions for refunds and cancellations are determined by
					each individual store owner.
				</p>

				<h3>5. Disputes</h3>
				<p>
					If a dispute arises between a customer and a store owner regarding
					refunds or cancellations, Dukon may provide assistance in facilitating
					communication and reaching a resolution. However, the final decision
					rests with the store owner, and Dukon is not liable for any disputes
					arising from these matters.
				</p>
				<p>
					If you have any questions or concerns, please{" "}
					<Link href="/contact">Contact Us</Link>.
				</p>
			</div>
			<div className={styles["division-container"]} id="shipping">
				<img
					className={styles.cloud}
					src="/images/cloud-decorative.png"
					alt="Cloud"
				/>

				<h1>Shipping & Delivery for Customers of Stores</h1>
				<p>
					Shipping times and costs may vary depending on the store owner from
					whom you are purchasing products. Each store owner on Dukon is
					responsible for providing accurate shipping information, including
					estimated delivery times and any associated costs.
				</p>

				<h3>2. Delivery Methods</h3>
				<p>
					Store owners on Dukon may offer various delivery methods, including
					standard shipping, express shipping, or other specialized delivery
					services. Customers can choose the delivery method that best suits
					their needs during the checkout process.
				</p>

				<h3>3. Tracking Information</h3>
				<p>
					Some store owners may provide tracking information for shipped orders.
					Customers are encouraged to check their order confirmation emails or
					the Dukon platform for any available tracking details. If tracking
					information is not provided, customers can contact the store owner for
					updates.
				</p>

				<h3>4. Delays or Issues</h3>
				<p>
					Dukon is not responsible for any delays or issues related to shipping
					and delivery. Each store owner is responsible for fulfilling orders in
					a timely manner and addressing any shipping-related concerns.
					Customers should contact the store owner directly for assistance.
				</p>

				<h3>5. Delivery Address</h3>
				<p>
					Customers are responsible for providing accurate and complete delivery
					addresses during the checkout process. Dukon and store owners will not
					be held responsible for any issues arising from incorrect delivery
					information provided by the customer.
				</p>

				<h3>6. International Shipping</h3>
				<p>
					Some store owners may offer international shipping. Customers should
					review and comply with the store owner's international shipping
					policies, including any additional costs, customs duties, or taxes
					associated with international deliveries.
				</p>

				<h3>7. Communication with Store Owners</h3>
				<p>
					If customers have questions or concerns regarding shipping and
					delivery, they should communicate directly with the respective store
					owner. Contact information for store owners is typically available on
					the Dukon platform.
				</p>

				<h3>8. Dukon's Role</h3>
				<p>
					Dukon acts as a platform for facilitating e-commerce transactions.
					While we will assist in the communication process, we are not
					responsible for shipping, delivery, or any issues related to the
					fulfillment of orders. Each store owner is solely responsible for
					these matters.
				</p>
				<p>
					If you have any questions or concerns, please{" "}
					<Link href="/contact">Contact Us</Link>.
				</p>
			</div>
		</div>
	)
}
