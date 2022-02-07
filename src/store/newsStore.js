import {makeAutoObservable, observable, configure, action} from "mobx";
export default class NewsStore{
    _news = []
    constructor() {
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
    EditNews(elem){
        this._news[elem.id-1] = elem
    }
    getNews(){
        return this._news;
    }
}

