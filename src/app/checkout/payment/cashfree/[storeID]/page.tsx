"use client"
import { environment } from "@/library/admin-frontend/admin.config"
import { useParams, useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { load } from "@cashfreepayments/cashfree-js"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

function index() {
	const storeID = useParams().storeID
	const [paymentDetails, setPaymentDetails] = useState<null | any>(null)
	const router = useRouter()

	const sendMessageToParent = (message: string) => {
		console.log("sending message", message)
		window.parent.postMessage(message, "*")
	}

	useEffect(() => {
		sendMessageToParent("loaded")
		window.addEventListener("message", event => {
			if (paymentDetails) return
			// if (event.origin !== "https://parent-origin.com") return
			console.log(event.data)
			try {
				let data
				try {
					data = JSON.parse(event.data)
				} catch {}

				if (!data || !data.pg || !data.paymentSessionId) return
				if (data.pg !== "cashfree") {
					sendMessageToParent("error:Invalid payment gateway provided.")
					return
				}
				setPaymentDetails(data)
				showCashFreeDrop(data.paymentSessionId)
			} catch (error) {
				console.log("error", error)
			}
		})
	}, [])

	async function showCashFreeDrop(paymentSessionId: string) {
		const cashfree = await load({
			mode: environment === "production" ? "production" : "sandbox",
		})

		let parent = document.getElementById("cashfree-drop")

		const checkoutOptions = {
			redirectTarget: parent,
			paymentSessionId: paymentSessionId,
			appearance: {
				width: "100%",
				height: "100%",
			},
		}
		cashfree.checkout(checkoutOptions).then(result => {
			sendMessageToParent("done")
		})
	}

	return (
		<div
			style={{
				height: "100%",
			}}
		>
			<div
				id="cashfree-drop"
				style={{ height: "100%", width: "100%", overflowY: "hidden" }}
			></div>
		</div>
	)
}

export default index
