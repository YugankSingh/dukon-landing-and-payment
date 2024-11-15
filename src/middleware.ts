import { environment } from "@/library/admin-frontend/admin.config"
import { NextRequest, NextResponse } from "next/server"

let validOrigins = {
	suprech: "http://localhost:3000",
}
if (environment === "preivew")
	validOrigins = {
		suprech: "https://dev.suprech.co.in",
	}
else if (environment === "production")
	validOrigins = {
		suprech: "https://suprech.co.in",
	}

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl
	const prefix = "/checkout/payment/cashfree/"

	console.log("prefix", prefix)
	console.log("validOrigins", validOrigins)
	console.log("environment", environment)
	if (pathname.startsWith(prefix)) {
		const storeID = pathname.slice(prefix.length).split("/")[0]

		console.log(`Store ID from URL: ${storeID}`)

		const response = NextResponse.next()
		response.headers.set(
			"Content-Security-Policy",
			`frame-ancestors 'self' ${validOrigins[storeID]}`
		)
		response.headers.set(
			"X-Frame-Options",
			`ALLOW-FROM ${validOrigins[storeID]}`
		)

		return response
	}
	return NextResponse.next()
}

export const config = {
	matcher: "/checkout/payment/cashfree/:storeID?",
}

export const validParentOrigins = { ...validOrigins }
