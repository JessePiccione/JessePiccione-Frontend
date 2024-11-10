export const loadEducation = async (url) => {
    const req = await fetch(url+'api/education/')
    return await req.json()
}
export default loadEducation;