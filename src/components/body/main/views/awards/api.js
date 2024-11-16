export const loadAwards = async (url) => {
    const req =  await fetch(url+'api/award/',{credentials:'inlcude'})
    return {awards:await req.json()}
}
export const loadCategories = async (url) => await fetch(url+'api/award/category/',{credentials:"include"}).then(res => res.json())

export default loadCategories;