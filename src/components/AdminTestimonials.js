import React, {useCallback, useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Form} from "react-bootstrap";
import {LOCALES} from "../i18n/Locale";
import CreatePanel from "./CreatePanel";
import NewsTable from "./EditableTable/NewsTable";
import TestimonialsTable from "./EditableTable/TestimonialsTable";
import {createNews, createTestimonial} from "../http/Api";
import {useDropzone} from "react-dropzone";

const AdminTestimonials = observer(() => {
    const {testimonials} = useContext(Context)
    const [language, setLang] = useState("ru-RU")
    const [newTestimonials,setNewTestimonials] = useState({
        text: {
            [LOCALES.ENGLISH]: "",
            [LOCALES.RUSSIAN]: "",
            [LOCALES.UZBEK]: "",
        },
        name: {
            [LOCALES.ENGLISH]: "",
            [LOCALES.RUSSIAN]: "",
            [LOCALES.UZBEK]: "",
        },
        position: {
            [LOCALES.ENGLISH]: "",
            [LOCALES.RUSSIAN]: "",
            [LOCALES.UZBEK]: "",
        },
        date: "",
    })
    const [haveIMG, setHAVE] = useState(false);
    const [url, setURL] = useState('gray');
    const [image, setImage] = useState('')
    const [nameEdit, setNameEdit] = useState("")
    const [position, setPositionEdit] = useState("")
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
        setNameEdit(newTestimonials.name[language])
        setPositionEdit(newTestimonials.position[language])
        setTextEdit(newTestimonials.text[language])
    }, [language, isChange])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    const handleChangeText = (e) => {
        const {name: fieldName, value} = e.target
        let obj = newTestimonials
        obj[fieldName][language] = value
        setNewTestimonials(obj)
        setChange(!isChange)
    }
    const columns = [
        {field: 'id', fieldName: '#'},
        {field: 'image', fieldName: 'Image'},
        {field: 'text', fieldName: 'Text'},
        {field: 'name', fieldName: 'Name'},
        {field: 'position', fieldName: 'Position'},
        {field: "date", fieldName: 'Date'},
    ];

    const handleChangeLanguage = (e)=>{
        setLang(e.target.value)
    }
    return (
        <div className={"admin_news"}>
            <div className={"top_panel"}>
                <Form>
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
                </Form>
                <div className={"admin_create_news"}>
                    <div className={"admin_create_news-ta"}>
                        <input
                            type={"text"}
                            className={"text_title_send"}
                            value={nameEdit}
                            name={"name"}
                            onChange={(e) => {
                                handleChangeText(e)
                            }}/>
                        <input
                            type={"text"}
                            className={"text_title_send"}
                            value={position}
                            name={"position"}
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
                    const obj = newTestimonials
                    obj.date = new Date().toLocaleString("ru-RU")
                    fd.append('data', JSON.stringify(obj))
                    fd.append('picture', image)
                    createTestimonial(fd).then((ns) => {
                        const promise = ns.json()
                        promise.then((data)=>{
                            data.id = testimonials.getTestimonials().length + 1
                            testimonials.AddTestimonials(data)
                        })

                    })

                }}/>

                {/*<CreatePanel language={lang} />*/}
            </div>
            <div className={"news_panel"}>
                <div>
                    <TestimonialsTable columns={columns} language={language} actions/>
                </div>
            </div>
        </div>
    );
});

export default AdminTestimonials;