import {makeAutoObservable} from "mobx";

export default class PartnersStore{
    constructor() {
        this._partners = []
        makeAutoObservable(this)
    }
    setPartners(partners){
        this._partners.splice(0,this._partners.length)
        for (const n of partners) {
            this._partners.push(n)
        }
    }
    AddPartners(partners){
        this._partners.push(partners)
    }

    EditPartners(edit){
        this._partners[this._partners.map(elem=>{return elem._id}).indexOf(edit._id)] = edit
    }
    getPartners(){
        return this._partners;
    }
}

