const loadExperience = async (url) => {
    const req = await fetch(url+'api/work/experience/',{credentials:'include'})
    return await req.json()
}
export default loadExperience;
