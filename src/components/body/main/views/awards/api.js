export const loadAwards = async (url) => {
    const req =  await fetch(url+'api/award/')
    return {awards:await req.json()}
}
export const loadCategories = async (url) => await fetch(url+'api/award/category/').then(res => res.json())

export default loadCategories;