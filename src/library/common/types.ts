export type DocumentID = string

export interface WebsiteConfig {
	name: string
	storeID: string
	frontendOrigin: string
}

export type MediaTypeNames = "productImages" | "assets"

// never change this, only add mediaTypes
export const mediaTypes = {
	productImages: { folderName: "productImages" },
	assets: { folderName: "assets" },
}

export interface VersionedProduct {
	_id: DocumentID
	product: Product
	updatedBy: Manager
	updatedAt: Manager
}

export type UserID = string
export interface UserAuthDetails {
	uid: UserID
	email?: string
	displayName?: string
}

export type Email = string
export interface Address {
	_id: DocumentID
	customer: Customer
	name: string
	contactNumber: string
	line1: string
	line2: string
	city: string
	pincode: string
	country: string
	state: string
}

export const addressDTOFields = [
	"name",
	"contactNumber",
	"line1",
	"line2",
	"city",
	"pincode",
	"country",
	"state",
]

export interface AddressDTO {
	name: string
	contactNumber: string
	line1: string
	line2: string
	city: string
	pincode: string
	country: string
	state: string
}
export interface AddressErrors {
	name: string
	contactNumber: string
	line1: string
	line2: string
	city: string
	pincode: string
	country: string
	state: string
}

export interface CartItem {
	product: ProductID | CartItemProduct
	variantListKey: VariantListKey
	quantity: number
}

export interface OrderItem {
	productVersioned: VersionedProduct | string
	variantListKey: VariantKey
	quantity: number
}

export type PaymentID = string
export type PaymentBase = {
	status: "Awaiting_Payment" | "Payment_Failed" | "Payment_Captured"
	amount: number
	currency: "INR"
} & ({ isPaymentCaptured: true; paidOn: Date } | { isPaymentCaptured: false })

export type PaymentCashFreeDTO = PaymentBase & {
	paymentMethod: "CashFree"
	paymentDetails: {
		payment_completion_id?: string
		cf_order_id: string
		order_id: string
		payment_session_id: string
	}
}

// paymentMethod: "CashFree" | "COD" | "PaytmPG"

export type PaymentDTO = PaymentCashFreeDTO
export type Payment = PaymentDTO & { _id: string }

export interface Delivery {
	order: String
	deliveryStatus: "Awaiting_Pickup" | "In_Transit" | "Delivered"
	manager: "Custom" | "Delhivery" | "Porter"
	type: "Delivery" | "Return" | "Replacement"
	expectedDeliveryDate: Date
	deliveredAt: Date
	cost: number
}

export type OrderDTO = {
	customer: string | Customer
	orderItems: OrderItem[]
	orderStatus:
		| "Pending_For_Payment"
		| "Failed"
		| "Pending_For_Shipping"
		| "Shipped"
		| "Completed"
	createdAt: Date
	address: Address
	payment: PaymentDTO
	delivery: Delivery
}

export type Order = OrderDTO & {
	_id: string
}

export interface Customer {
	_id: string
	email?: string
	defaultAddress: null | Address
	addresses: Address[]
	cartItems: CartItem[]
	orders: Order[]
}

export type VariantAttributes = "text" | "imageIndex" | "color"
export interface Variant {
	text: string
	imageKey?: ImageKey
	color?: string
}

export type APIResponse = {
	success: boolean
	message: string
	data?: any
}

export type ProductUpdationDetail = [ProductAttributes, any]

export interface VariantObject {
	[variantType: VariantType]: VariantKey
}
export interface VariantMap {
	variantType: VariantType
	variantKey: VariantKey
	variant: Variant
}
export type VariantMapList = VariantMap[]

export type VariantListKey = string
export type VariantListObject = {
	inStock: number | undefined
	mp: number
	sp: number
}
export interface VariantsList {
	[VariantListKey: string]: VariantListObject
}

export type VariantType = string
export type VariantKey = string

export type VariantsInnerOrder = VariantKey[]
export type VariantsInner = { [variantKey: VariantKey]: Variant }

export interface VariantsInnerWrapper {
	variantsInnerOrder: VariantsInnerOrder
	variantsInner: VariantsInner
	isImaged: boolean
}

export interface Variants {
	[variantType: VariantType]: VariantsInnerWrapper
}

export type Image =
	| {
			source: "s3" | "firebaseStorage"
			mimeType: string
			uploadedAt: number
	  }
	| {
			source: "local"
			mimeType: string
			file: File
			base64Blob: string
	  }

export type ImageKey = string

export type ImagesList = { [key: ImageKey]: Image }

export interface Images {
	order: ImageKey[]
	list: ImagesList
}

export type ProductID = string | "xxxxxx"

export type ProductAttributes =
	| "_id"
	| "name"
	| "description"
	| "categories"
	| "primaryVariantType"
	| "variantsOrder"
	| "variants"
	| "images"
	| "expectedDeliveryDays"
	| "variantsList"
	| "versionedID"

export interface Category {
	_id: string
	name: string
	updatedBy: string | Manager
}

export interface Product {
	_id: DocumentID
	name: string
	description: string
	categories: (Category | string)[]
	primaryVariantType: VariantType
	variantsOrder: VariantType[]
	variants: Variants
	images: Images
	expectedDeliveryDays: number
	variantsList: VariantsList
	versionedID: DocumentID
}

export type SelectedVariants = { [variantType: VariantType]: VariantKey }

export interface CartItemProduct {
	_id: DocumentID
	name: string
	versionedID: DocumentID
}

export type Permission =
	| "read"
	| "editProductAndStock"
	| "createProduct"
	| "deleteProduct"
	| "editStock"
	| "editPermissions"
	| "editCategories"

export type RoleName = "Admin" | "Stock_Manager" | "Product_Manager" | "Viewer"

export type Role = {
	_id: DocumentID
	manager: Manager
	store: Store
	roleName: RoleName
}
export interface Store {
	_id: DocumentID
	origins: string[]
	name: string
}

export type URL = string
export interface FirebaseConfig {
	apiKey: string
	authDomain: string
	projectId: string
	storageBucket: string
	messagingSenderId: string
	appId: string
}

export type Manager = {
	_id: string
	email: string
	roles: Role[]
	name?: string
}
