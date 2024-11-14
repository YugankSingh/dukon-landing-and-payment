// const Products =
// 	{
// 		id: "tshirt1",
// 		mp: 1200,
// 		sp: 800,
// 		name: "Once in a life time opportunity.",
// 		description:
// 			"Tshirt description goes here.",
// 		type: "tshirt",
// 		images: ["tshirt1-White.png", "tshirt2-White.png", "gay-offended.png"],
// 		colors: [
// 			{ name: "White", color: "#fff", imageIndex: 0 },
// 			{ name: "Black", color: "#000", imageIndex: 2 },
// 		],
// 		sizes: ["s", "m", "l", "xl"],

// 		expectedDeliveryDays: 7,
// 	}

// const address = {
// 	line1: String,
// 	line2: String,
// 	city: String,
// 	pincode: Number,
// 	state: String,
// 	country: String || Enum,
// 	phone: String,
// 	name: String,
// }

// const cartItem = {
// 	productID: ID,
// 	variant: [{variantType: String, variantID: String}],
// 	quantity: Number,
// }

// const Users = {
// 	"yuganksingh05@gmail.com": {
// 		defaultAddress: address,
// 		cartItems: [cartItem],
// 		orders: [ID],
// 	},
// }

const orderItem = {
	productVersionedID: ID,
	variant: [{ variantType: String, variantID: String }],
	quantity: Number,
}

const orderItems = {
	...[orderItem],
}

/*
const Order = {
	user: EmailID,
	orderItems: [orderItem],
	address: address, **
	orderID: ID, **
	orderStatus: Enum(
		"Order_Created",
		"Awaiting_Payment",
		"Payment_Failed",
		"Shipping",
		"Shipped",
		"Delivered"
	),
	createdAt: Date, **

	deliveredAt: DateTime, **
	deliveryID: [String], **


	paymentID: ID,  **
	isPaymentCaptured: Boolean, **
	paymentID: ID,
	paymentMethod: Enum("CashFree", "COD", "PaytmPG"),
	amount: Number,
	paymentDetails: {},

	paidOn: DateTime, **
}

payment  = {

}


*/
