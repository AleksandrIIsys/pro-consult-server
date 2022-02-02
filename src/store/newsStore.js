import {makeAutoObservable} from "mobx";

export default class NewsStore{
    constructor() {
        this._news = []
        makeAutoObservable(this)
    }
    setNews(news){
        this._news = news;
    }
    getNews(){
        return this._news;
    }
}

