function getContrastColor(bgColor: string) {
	const lightColor = "#ffffff"
	const darkColor = "#000000"
	var color = bgColor.charAt(0) === "#" ? bgColor.substring(1, 7) : bgColor
	var r = parseInt(color.substring(0, 2), 16) // hexToR
	var g = parseInt(color.substring(2, 4), 16) // hexToG
	var b = parseInt(color.substring(4, 6), 16) // hexToB
	return r * 0.299 + g * 0.697 + b * 0.114 > 186 ? darkColor : lightColor
}

export default function invertColor(hex: string) {
	if (hex.indexOf("#") === 0) {
		hex = hex.slice(1)
	}
	// convert 3-digit hex to 6-digits.
	if (hex.length === 3) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
	}
	if (hex.length !== 6) {
		throw new Error("Invalid HEX color.")
	}

	return getContrastColor("#" + hex)
}

function padZero(str: string, len: number) {
	len = len || 2
	var zeros = new Array(len).join("0")
	return (zeros + str).slice(-len)
}
