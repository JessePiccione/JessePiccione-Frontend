export const loadHome = async (url) =>{
    const req = await fetch(url+'api/home/',{credentials:'include'})
    return await req.json()
}
export const loadTech = async (url) =>{
    const req = await fetch(url+'api/technology/',{credentials:'include'})
    return await req.json()
}
export default loadHome