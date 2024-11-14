import { Metadata } from "next"
import styles from "./page.module.scss"
import Image from "next/image"
import Link from "next/link"
import { Inter } from "next/font/google"

export const metadata: Metadata = {
	title: "Dukon",
	description: "Generated by create next app",
}

const inter = Inter({ subsets: ["latin"] })

export default function index() {
	return (
		<div className={styles.hero + " " + inter.className}>
			<nav className={styles.nav}>
				<div className={styles.navLeft}>
					<Link href="/">
						<Image
							src="/images/logo.png"
							alt="Logo"
							width={90}
							height={90}
							className={styles.logoImg}
						/>
					</Link>
				</div>
				<div className={styles.navRight}>
					<Link href="https://admin.dukon.in/">Login</Link>
				</div>
			</nav>
			<div className={styles.heroMain}>
				<div className={styles.heroInner}>
					<h1>
						We turn <strong>dreams</strong> into <strong>online stores</strong>
					</h1>
					<p>
						We create online stores for you, without any startup cost.
						<br />
						So you can focus on living the dreams while we take care about the
						technicals. <br />
						Let's create, innovate, and grow together, making your dream store a
						reality.
					</p>
					<div id="hero-cta">
						<Link href="/contact/" className={styles.button}>
							Contact Us
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
