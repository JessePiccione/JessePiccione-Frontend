export const fetchCategories = async (url) => {
    const request = await fetch(url+'api/skill/category/')
    return await request.json()
}
export const fetchSkills = async (url) => {
    const request = await fetch(url+'api/skill/')
    return await request.json()
}
export default fetchCategories;