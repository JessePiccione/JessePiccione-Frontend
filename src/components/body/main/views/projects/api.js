export const loadProjects = async (url) => {
    const req = await fetch(url+'api/projects/')
    return await req.json()
}
export default loadProjects
