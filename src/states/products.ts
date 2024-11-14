// import { create } from "zustand"
// import { callFunction } from "../firebase"
// import { Product } from "../../common/types"

// export type ProductWithLoadingState =
// 	| {
// 			product: Product
// 			isLoaded: true
// 			isLoading: false
// 	  }
// 	| {
// 			product: undefined
// 			isLoaded: false
// 			isLoading: true
// 	  }

// export interface ProductsState {
// 	fetchedProducts: {
// 		[productID: string]: ProductWithLoadingState
// 	}
// 	addProduct: (productID: string, value: ProductWithLoadingState) => void
// 	removeProduct: (productID: string) => void
// 	fetchProduct: (productID: string) => Promise<void>
// 	refreshProduct: (productID: string) => Promise<void>
// 	refreshProducts: (productIDs: string[]) => Promise<void>
// }

// export const useProductsState = create<ProductsState>((set, get) => ({
// 	fetchedProducts: {},
// 	addProduct: (productID, value) => {
// 		const fetchedProducts = get().fetchedProducts
// 		set({
// 			fetchedProducts: {
// 				...fetchedProducts,
// 				[productID]: value,
// 			},
// 		})
// 	},

// 	removeProduct: (productID: string) => {
// 		const fetchedProducts = { ...get().fetchedProducts }
// 		delete fetchedProducts[productID]
// 		set({
// 			fetchedProducts: fetchedProducts,
// 		})
// 	},

// 	refreshProduct: async productID => {
// 		get().removeProduct(productID)
// 		get().fetchProduct(productID)
// 	},

// 	refreshProducts: async productIDs => {
// 		const promises: Promise<void>[] = []
// 		productIDs.forEach(productID => {
// 			promises.push(get().refreshProduct(productID))
// 		})
// 		await Promise.all(promises)
// 	},

// 	fetchProduct: async (productID: string) => {
// 		if (!productID) {
// 			console.error("Invalid product ID")
// 			return
// 		}
// 		const { addProduct, fetchedProducts } = get()
// 		const currProduct = fetchedProducts[productID]
// 		if (!!currProduct && (currProduct.isLoading || currProduct.isLoaded)) return
// 		addProduct(productID, {
// 			isLoading: true,
// 			isLoaded: false,
// 			product: undefined,
// 		})

// 		console.log("fetching", productID)
// 		const res = await callFunction("fetchProductDetailsCostumer", {
// 			productID: productID,
// 		})

// 		if (!res.success) {
// 			console.error("Error while fetching product :", res.message)
// 		}
// 		if (!res.data || !res.data.product) {
// 			console.error(
// 				"Error while fetching product : The product object was not found"
// 			)
// 			return
// 		}

// 		// if (!productSnap.exists()) {
// 		// 	await callFunction("deleteAllCartItemWithProductID", {
// 		// 		productID: productID,
// 		// 	})
// 		// 	return toast.error("Seems like the prouct has been removed from store")
// 		// }

// 		const product = res.data.product

// 		addProduct(productID, {
// 			product: { ...product },
// 			isLoading: false,
// 			isLoaded: true,
// 		})
// 	},
// }))
