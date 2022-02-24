import React, {useCallback, useContext, useEffect, useState} from 'react';
import {LOCALES} from "../i18n/Locale";
import {useDropzone} from "react-dropzone";
import {Context} from "../index";
import {createNews} from "../http/Api";

const CreatePanel = ({language}) => {
    const [newNews, setNewNews] = useState({
        title: {
            [LOCALES.ENGLISH]: "",
            [LOCALES.RUSSIAN]: "",
            [LOCALES.UZBEK]: "",
        },
        text: {
            [LOCALES.ENGLISH]: "",
            [LOCALES.RUSSIAN]: "",
            [LOCALES.UZBEK]: "",
        },
        date: "",
    });
    const {news} = useContext(Context)
    const [haveIMG, setHAVE] = useState(false);
    const [url, setURL] = useState('gray');
    const [image, setImage] = useState('')
    const [titleEdit, setTitleEdit] = useState("")
    const [textEdit, setTextEdit] = useState("")
    const [isChange, setChange] = useState(true)
    const onDrop = useCallback(async acceptedFiles => {
        setHAVE(true);
        setImage(acceptedFiles[0])
        const filereader = new FileReader()
        filereader.onload = file => {
            setURL(file.target.result)
        }
        filereader.readAsDataURL(acceptedFiles[0])
    }, [])
    useEffect(() => {
        setTitleEdit(newNews.title[language])
        setTextEdit(newNews.text[language])
    }, [language, isChange])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    const handleChangeText = (e) => {
        const {name: fieldName, value} = e.target
        let obj = newNews
        obj[fieldName][language] = value
        setNewNews(obj)
        setChange(!isChange)
    }

    return (
        <div>
            <div className={"admin_create_news"}>
                <div className={"admin_create_news-ta"}>
                    <input
                        type={"text"}
                        className={"text_title_send"}
                        value={titleEdit}
                        name={"title"}
                        onChange={(e) => {
                            handleChangeText(e)
                        }}/>
                    <textarea
                        className={"text_area_news"}
                        value={textEdit}
                        defaultValue={textEdit}
                        name={"text"}
                        onChange={(e) => {
                            handleChangeText(e)
                        }}/>
                </div>
                <div style={{cursor: 'pointer'}} {...getRootProps()}>
                    <input {...getInputProps()} />

                    {
                        haveIMG ? <img src={url} className={'admin_create_news-image'}/> :
                            isDragActive ?
                                <p>Drop the files here ...</p> :
                                <p>Drag 'n' drop some files here, or click to select files</p>
                    }
                </div>
            </div>
            <input type={"button"} value={"ok"} onClick={async () => {
                const fd = new FormData();
                const obj = newNews
                obj.date = new Date().toLocaleString("ru-RU")
                fd.append('data', JSON.stringify(obj))
                fd.append('picture', image)
                createNews(fd).then((ns) => {
                    const promise = ns.json()
                    promise.then((data)=>{
                        data.id = news.getNews().length + 1
                        console.log(data.title);
                        news.AddNews(data)
                    })

                })

            }}/>
        </div>
    );
};

export default CreatePanel;