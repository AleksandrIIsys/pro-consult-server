export const fetchNews = async () => {
    const data = await fetch('/api/news/').then((response) => {
        return response.json()
    })
    return data
}

export const fetchPartners = async ()=>{
    const data = await fetch('/api/partners/').
    then((response)=>{
        return response.json()
    })
    return data
}
export const fetchClients = async ()=>{
    const data = await fetch('/api/clients/').
    then((response)=>{
        return response.json()
    })
    return data
}
export const fetchTestimonials = async ()=>{
    let data = await fetch('/api/testimonials/').
    then((response)=>{
        return response.json()
    })
    return data
}
export const createNews = async (data)=>{
    const resualt = await fetch('/api/news/',
        {
            method: "POST",
            body: data
        })
    return resualt
}
export const deleteNews = async (data)=>{
    let resualt = await fetch('/api/news/delete', {
        method:"POST",
        body: data
    })
    return resualt
}
export const editNews = async (data) =>{
    let resualt = await fetch('/api/news/edit/',{
        method:"POST",
        body:data
    })
    return resualt
}