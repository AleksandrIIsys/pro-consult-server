import {makeAutoObservable} from "mobx";

export default class PartnersStore{
    constructor() {
        this._partners = []
        makeAutoObservable(this)
    }
    setPartners(partners){
        this._partners = partners;
    }
    getPartners(){
        return this._partners;
    }
}

