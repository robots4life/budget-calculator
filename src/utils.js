/*
    UUIDs are a more common format for unique identifiers.
    This is a basic function that is good for testing.
    Here's a reference for the source:
    https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
    */
function uuidv4() {
	return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
		(c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
	)
}

export { uuidv4 }
