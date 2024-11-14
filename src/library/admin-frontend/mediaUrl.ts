import { Image, ImageKey, MediaTypeNames, mediaTypes } from "../common/types"
import { adminConfig } from "./admin.config"

type MediaURL = (
	key: ImageKey,
	object: Image,
	storeID: string,
	mediaType: MediaTypeNames,
	cdnUrl?: string
) => string

export const mediaURL: MediaURL = (
	imageKey,
	imageObject,
	storeID,
	mediaType,
	cdnUrl = adminConfig.cdnUrl
) => {
	if (!imageKey || !imageObject)
		throw new Error("Invalid Image Key or image object")
	if (!storeID) throw new Error(`Store ID not provided for ${imageKey}`)

	switch (imageObject.source) {
		case "s3":
			return `${cdnUrl}/${storeID}/${mediaTypes[mediaType].folderName}/${imageKey}`
		case "firebaseStorage":
			return `https://firebasestorage.googleapis.com/v0/b/${storeID}.appspot.com/o/uploadedImages%2F${imageKey}?alt=media`

		case "local":
			return URL.createObjectURL(imageObject.file)

		default:
			throw new Error("Invalid image source")
	}
}
