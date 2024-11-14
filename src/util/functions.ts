import { APIResponse, DocumentID } from "@/library/common/types"

export const callFunction = (
	name: string,
	storeID: DocumentID,
	data: object,
): Promise<APIResponse> => {
	return new Promise(async (resolve, reject) => {
		try {
			const requestData = { endpoint: name, data: data, storeID }


			const authToken = !!auth ? await auth.getIdToken() : ""
			const res = await fetch(functionsUrl, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": adminConfig.backendOrigin,
					"Access-Control-Allow-Methods":
						"GET, POST, OPTIONS, PUT, PATCH, DELETE",
					"Access-Control-Allow-Headers":
						"X-Requested-With, Content-Type, Authorization",
					Authorization: "Bearer " + authToken,
				},
				body: JSON.stringify(requestData),
			})
			try {
				const resObject = await res.json()
				console.log(resObject)
				return resolve(resObject)
			} catch (error) {
				console.log(error)
				return resolve({ success: false, message: "Hello hello" })
			}
		} catch (error) {
			console.error(error)
			resolve({ success: false, message: "Internal Server Error" })
		}
	})
}
