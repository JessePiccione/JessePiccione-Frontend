export const loadAwards = async (url) => {
    const req =  await fetch(url+'api/award/')
    return {awards:await req.json()}
}

export default loadAwards;