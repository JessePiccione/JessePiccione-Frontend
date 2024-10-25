const loadExperience = async (url) => {
    const req = await fetch(url+'api/work/experience/')
    return await req.json()
}
export default loadExperience;
