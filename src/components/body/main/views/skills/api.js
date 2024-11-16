export const fetchCategories = async (url) => {
    const request = await fetch(url+'api/skill/category/',{credentials:'include'})
    return await request.json()
}
export const fetchSkills = async (url) => {
    const request = await fetch(url+'api/skill/', {credentials:'include'})
    return await request.json()
}
export default fetchCategories;