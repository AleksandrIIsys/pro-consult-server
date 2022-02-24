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
export const createTestimonial = async (data)=>{
    const resualt = await fetch('/api/testimonials/',
        {
            method: "POST",
            body: data
        })
    return resualt;
}
export const deleteTestimonial = async (data)=>{
    let resualt = await fetch('/api/testimonials/delete', {
        method:"POST",
        body: data
    })
    return resualt
}
export const editTestimonial = async (data) =>{
    let resualt = await fetch('/api/testimonials/edit/',{
        method:"POST",
        body:data
    })
    return resualt
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
export const createClient = async (data)=>{
    const resualt = await fetch('/api/clients/',
        {
            method: "POST",
            body: data
        })
    return resualt;
}
export const deleteClient  = async (data)=>{
    let resualt = await fetch('/api/clients/delete', {
        method:"POST",
        body: data
    })
    return resualt
}
export const editClient = async (data) =>{
    let resualt = await fetch('/api/clients/edit/',{
        method:"POST",
        body:data
    })
    return resualt
}
export const createPartner = async (data)=>{
    const resualt = await fetch('/api/partners/',
        {
            method: "POST",
            body: data
        })
    return resualt;
}
export const deletePartner = async (data)=>{
    let resualt = await fetch('/api/partners/delete', {
        method:"POST",
        body: data
    })
    return resualt
}
export const editPartner = async (data) =>{
    let resualt = await fetch('/api/partners/edit/',{
        method:"POST",
        body:data
    })
    return resualt
}