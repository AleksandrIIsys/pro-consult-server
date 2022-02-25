import React, {useCallback, useContext, useEffect, useState} from 'react';
import {LOCALES} from "../i18n/Locale";
import {useDropzone} from "react-dropzone";
import {Context} from "../index";
import {createNews} from "../http/Api";
import {Form} from "react-bootstrap";
import {set} from "mobx";

const CreatePanel = (props) => {
    const [newNews,setNewNews] = useState(props.data)
    useEffect(()=>{setNewNews(props.data)
    },[props.data])
    const [language, setLang] = useState("ru-RU")
    const [haveIMG, setHAVE] = useState(false);
    const [url, setURL] = useState('gray');
    const setImage = props.setImage
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
    const handleChangeLanguage = (e)=>{
        setLang(e.target.value)
    }
    return (
        <div>
            <div className={"admin_create_news"}>
                <div className={"admin_create_news-ta"}>
                    {Object.keys(LOCALES).map(_language => {
                        return <Form.Check
                            type={'radio'}
                            name={"group1"}
                            label={_language}
                            checked={LOCALES[_language] === language}
                            value={LOCALES[_language]}
                            onClick={(e) => {
                                handleChangeLanguage(e)
                                setChange(!isChange)
                            }
                            }
                        />
                    })}
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
        </div>
    );
};

export default CreatePanel;