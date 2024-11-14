export function stringOrObjectID(data: string | { _id: string }): string {
	return typeof data === "string" ? data.toString() : data._id.toString()
}
