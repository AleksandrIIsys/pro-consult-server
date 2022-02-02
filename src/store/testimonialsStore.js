import {makeAutoObservable} from "mobx";

export default class TestimonialsStore{
    constructor() {
        this._testimonials = []
        makeAutoObservable(this)
    }
    setTestimonials(testimonials){
        console.log(testimonials)
        this._testimonials = testimonials;
    }
    getTestimonials(){
        return this._testimonials;
    }
}

