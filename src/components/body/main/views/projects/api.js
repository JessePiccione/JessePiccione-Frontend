export const loadProjects = async (url) => {
    const req = await fetch(url+'api/projects/',{credentials:'include'})
    return await req.json()
}
export default loadProjects
