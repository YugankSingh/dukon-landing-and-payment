// pages/contact.js

import styles from "./page.module.scss"
import Image from "next/image"
import Link from "next/link"

export default function Contact() {
	return (
		<div>
			<div className={styles.header}>
				<Link href="/">
					<Image
						className={styles.logo}
						src="/images/logo.png"
						alt="Company Logo"
						width={75}
						height={75}
					/>
				</Link>
				<p className={styles.tagline}>We turn dreams into online stores</p>
			</div>

			<div className={styles.contactContainer}>
				<Image
					className={styles.cloud}
					src="/images/cloud-decorative.png"
					alt="Cloud"
					width={150}
					height={100} // Adjust height based on your image aspect ratio
				/>
				<h1 className={styles.h1}>Contact Us</h1>
				<div className={styles.contactInfo}>
					<p>
						<a
							href="mailto:yuganksingh05@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Email
						</a>
						: yuganksingh05@gmail.com
					</p>
					<p>
						<a
							href="tel:+919760858226"
							target="_blank"
							rel="noopener noreferrer"
						>
							Phone
						</a>
						: +919760858226
					</p>
					<p>
						<a
							href="https://wa.me/+919760858226"
							target="_blank"
							rel="noopener noreferrer"
						>
							WhatsApp:
						</a>{" "}
						<a
							href="https://wa.me/+919760858226"
							target="_blank"
							rel="noopener noreferrer"
						>
							Link 🔗
						</a>
					</p>
				</div>
			</div>
		</div>
	)
}
