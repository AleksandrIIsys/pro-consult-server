import React, { useContext, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {Form, Modal} from "react-bootstrap";
import {LOCALES} from "../i18n/Locale";
import CreatePanel from "./CreatePanel";
import NewsTable from "./EditableTable/NewsTable";
import ModalWindow from "./ModalWindow";

const AdminNews = observer(() => {
    const {news} = useContext(Context)
    const [lang, setLang] = useState("ru-RU")
    const columns = [
        {field: 'id', fieldName: '#'},
        {field: 'image', fieldName: 'Image'},
        {field: 'title', fieldName: 'Title'},
        {field: 'text', fieldName: 'Text'},
        {field: "date", fieldName: 'Date'},
    ];
    let isChange = false
    const handleChangeLanguage = (e)=>{
        setLang(e.target.value)
    }
    return (
        <div className={"admin_news"}>
            <div className={"top_panel"}>
                <Form>
                    {Object.keys(LOCALES).map(language => {
                        return <Form.Check
                            type={'radio'}
                            name={"group1"}
                            label={language}
                            checked={LOCALES[language] === lang}
                            value={LOCALES[language]}
                            onClick={(e) => {
                                handleChangeLanguage(e)
                                isChange=!isChange
                            }
                            }
                        />
                    })}
                </Form>
                <ModalWindow/>
            </div>
            <div className={"news_panel"}>
                <div>
                    <NewsTable rows={news.getNews()} columns={columns} language={lang} actions/>
                </div>
            </div>
        </div>
    );
});

export default AdminNews;