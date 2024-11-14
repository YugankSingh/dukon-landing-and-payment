import {
	Product,
	ProductID,
	VariantAttributes,
	VariantKey,
	VariantMapList,
	VariantObject,
	VariantType,
	Variants,
	VariantsInnerWrapper,
} from "../types"

export const stringifyVariant = (
	variant: VariantObject,
	productID: ProductID
) => {
	if (typeof variant !== "object") throw new Error("Variant must be an object")
	if (!productID) throw new Error("Product ID must be provided")

	let variantString = productID
	const objectKeys = Object.keys(variant).sort() as VariantAttributes[]

	objectKeys.forEach(key => {
		variantString += "~" + key + "`" + variant[key]
	})
	return variantString
}

export const humanReadableFormat = (
	cartItemVariant: VariantObject,
	variantsOrder: VariantType[]
) => {
	let ans = ""
	const variantTypes = variantsOrder

	variantTypes.forEach(variantType => {
		const variantKey = cartItemVariant[variantType]
		const variantName = variantKey

		ans += variantType + " - " + variantName + " \n"
	})
	return ans
}

export const getVariantMapList = (
	variantObject: VariantObject,
	variants: Variants,
	variantsOrder: VariantType[]
) => {
	// skip over the variantTypes that are empty
	variantsOrder = variantsOrder.filter(variantType => {
		const variantsInnerWrapper = variants[variantType] as VariantsInnerWrapper
		if (
			!variantsInnerWrapper ||
			!variantsInnerWrapper.variantsInnerOrder.length
		)
			return false
		return true
	})

	const variantMapList: VariantMapList = variantsOrder.map(variantType => {
		const variantKey = variantObject[variantType] as VariantKey
		const variant = variants[variantType].variantsInner[variantKey]
		if (!variant) throw new Error(`Invalid Variants and VariantsOrder provided`)
		return {
			variantType: variantType,
			variantKey: variantKey,
			variant: variant,
		}
	})
	return variantMapList
}

export const destringifyVariant = (variantString: string) => {
	const firstBreak = variantString.split("~")
	const productID = firstBreak[0]
	const variantObject = {} as VariantObject
	for (let i = 1; i < firstBreak.length; i++) {
		const secondBreak = firstBreak[i].split("`")
		const variantKey = secondBreak[0]
		const variantName = secondBreak[1]
		variantObject[variantKey] = variantName
	}
	return { productID: productID, variant: variantObject }
}
