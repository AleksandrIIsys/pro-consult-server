import {makeAutoObservable} from "mobx";
import {LOCALES} from "../i18n/Locale";

export default class LocaleStore{
    constructor() {
        this.locale = LOCALES.ENGLISH
        makeAutoObservable(this)
    }
    setLocale(locale){
        this.locale = locale;
    }
    getLocale(){
        return this.locale;
    }
}

