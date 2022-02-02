import {makeAutoObservable} from "mobx";

export default class ClientsStore{
    constructor() {
        this._clients = []
        makeAutoObservable(this)
    }
    setClients(clients){
        this._clients = clients;
    }
    getClients(){
        return this._clients;
    }
}

