import {makeAutoObservable} from "mobx";

export default class ClientsStore{
    constructor() {
        this._clients = []
        makeAutoObservable(this)
    }
    setClients(clients){
        this._clients.splice(0,this._clients.length)
        for (const n of clients) {
            this._clients.push(n)
        }
    }
    AddClients(clients){
        this._clients.push(clients)
    }
    EditClients(edit){
        this._clients[this._clients.map(elem=>{return elem._id}).indexOf(edit._id)] = edit
    }
    getClients(){
        return this._clients;
    }
}

