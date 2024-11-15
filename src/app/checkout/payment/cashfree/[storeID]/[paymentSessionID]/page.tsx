"use client"
import { environment } from "@/library/admin-frontend/admin.config"
import { useParams, useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { load } from "@cashfreepayments/cashfree-js"

function index() {
	const storeID = useParams().storeID
	const paymentSessionID = useParams().paymentSessionID
	if (typeof paymentSessionID !== "string") return <h1>Boom</h1>

	useEffect(() => {
		showCashFreeDrop(paymentSessionID)
	}, [])

	async function showCashFreeDrop(paymentSessionId: string) {
		const cashfree = await load({
			mode: environment === "production" ? "production" : "sandbox",
		})

		const checkoutOptions = {
			redirectTarget: "_self",
			paymentSessionId: paymentSessionId,
		}
		cashfree.checkout(checkoutOptions).then(result => {
			if (result.error) {
				console.log("There is some payment error, Check for Payment Status")
				console.log(result.error)
			}
			if (result.redirect) {
				console.log("Payment will be redirected")
			}
			if (result.paymentDetails) {
				console.log("Payment has been completed, Check for Payment Status")
				console.log(result.paymentDetails.paymentMessage)
			}
		})
		// cashfree.drop(parent, {
		// 	onSuccess: (data: any) => {
		// 		console.log(data)
		// 		toast.success("Payment Successfull")
		// 		// confirmOrder()
		// 		router.push("/account")
		// 	},
		// 	onFailure: (data: any) => {
		// 		toast.error("Payment Failed, Please retry")
		// 		console.log(data.order.errorText)
		// 		router.push("/checkout/pay")
		// 	},
		// 	components: [
		// 		"order-details",
		// 		"card",
		// 		"netbanking",
		// 		"app",
		// 		"upi",
		// 		"paylater",
		// 		"creditcardemi",
		// 	],
		// 	style: {
		// 		backgroundColor: "#fcf2f4",
		// 		color: "#11385b",
		// 		fontFamily: "Lato",
		// 		fontSize: "14px",
		// 		errorColor: "#ff0000",
		// 		theme: "light",
		// 	},
		// })

		// cashfree.redirect()
	}

	return (
		<div>
			<Toaster />
			<h1>Loadinng...</h1>
		</div>
	)
}

export default index
