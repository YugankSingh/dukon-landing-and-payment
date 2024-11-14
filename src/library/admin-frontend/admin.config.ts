export const environment = process.env.NEXT_PUBLIC_VERCEL_ENV || "development"

// redeploy to check env
console.log("environment", environment)
console.log("environment", JSON.stringify(environment))

// the default development environment
let backendOrigin = "http://localhost:5001"
let backendUrl = "http://127.0.0.1:5001/dukon-stores-dev/us-central1"
let paymentsPageOrigin = "http://localhost:3031"
let firebaseConfig = {
	apiKey: "AIzaSyAvxCxrSvuf4_TKJSPbTQfe7BQ5cKdSZss",
	authDomain: "dukon-stores-dev.firebaseapp.com",
	projectId: "dukon-stores-dev",
	storageBucket: "dukon-stores-dev.appspot.com",
	messagingSenderId: "1828384783",
	appId: "1:1828384783:web:9b57155dde762f0d98737a",
}
const cdnUrl = "https://d3bee4db9ogff8.cloudfront.net"

// the variables for staging
if (environment === "preview") {
	backendOrigin = "https://us-central1-dukon-stores-dev.cloudfunctions.net"
	backendUrl = "https://us-central1-dukon-stores-dev.cloudfunctions.net"
	paymentsPageOrigin = "https://dev.dukon.in"
}

// variables for production
if (environment === "production") {
	backendOrigin = "https://us-central1-dukon-stores.cloudfunctions.net"
	backendUrl = "https://us-central1-dukon-stores.cloudfunctions.net"
	paymentsPageOrigin = "https://dukon.in"

	firebaseConfig = {
		apiKey: "AIzaSyCZVF2ju8MMTdv3vWJFkI427KnegWX0ljU",
		authDomain: "dukon-stores.firebaseapp.com",
		projectId: "dukon-stores",
		storageBucket: "dukon-stores.appspot.com",
		messagingSenderId: "642186210990",
		appId: "1:642186210990:web:92310c92554fbd5c75073f",
	}
}

let adminConfig = {
	backendOrigin,
	backendUrl,
	firebaseConfig,
	environment: environment,
	cdnUrl,
	paymentsPageOrigin,
}
const functionsUrl = `${adminConfig.backendUrl}/api`

export { adminConfig, firebaseConfig, functionsUrl }
