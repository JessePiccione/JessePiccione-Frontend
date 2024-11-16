export const loadProjects = async (url) => {
    const req = await fetch(url+'api/project/',{credentials:'include'})
    return await req.json()
}
export default loadProjects
