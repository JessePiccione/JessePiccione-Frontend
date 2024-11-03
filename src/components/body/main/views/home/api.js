export const loadHome = async (url) =>{
    const req = await fetch(url+'api/home/')
    return await req.json()
}
export const loadTech = async (url) =>{
    const req = await fetch(url+'api/technology/')
    return await req.json()
}
export default loadHome