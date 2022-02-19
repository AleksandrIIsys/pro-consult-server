import {makeAutoObservable, observable, action} from "mobx";
export default class NewsStore{
    constructor() {
        this._news = []
        makeAutoObservable(this,{
            _news:observable,
            EditNews:action.bound
        })
    }
    setNews(news){
        this._news.splice(0,this._news.length)
        for (const n of news) {
            this._news.push(n)
        }
    }
    AddNews(news){
        this._news.push(news)
    }
    EditNews(edit){
        this._news[this._news.map(elem=>{return elem._id}).indexOf(edit._id)] = edit
    }
    getNews(){
        return this._news;
    }
}

