import React, {useCallback, useContext, useEffect, useState} from 'react';
import {useDropzone} from "react-dropzone";
import EditableTable from "./EditableTable";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AdminNews = observer(() => {
    const {news} = useContext(Context)
    const [haveIMG,setHAVE] = useState(false);
    const [url,setURL] = useState('gray');
    const [image,setImage] = useState('')
    const onDrop = useCallback(async acceptedFiles => {
        setHAVE(true);
        setImage(acceptedFiles[0])
        const filereader = new FileReader()
        filereader.onload = file=>{
            setURL(file.target.result)
        }
        filereader.readAsDataURL(acceptedFiles[0])
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    const columns = [
        { field: 'id', fieldName: '#' },
        { field: 'image', fieldName: 'Image' },
        { field: 'title', fieldName: 'Title' },
        { field: 'text', fieldName: 'Text' },
        { field: "date", fieldName: 'Date' },
    ];

    return (
        <div className={"admin_news"}>
            <div className={"top_panel"}>
                <div>
                    <div className={"admin_create_news"}>
                        <div className={"admin_create_news-ta"}>
                            <input type={"text"} className={"text_title_send"}/>
                            <textarea className={"text_area_news"}></textarea>
                        </div>
                        <div style={{cursor:'pointer'}} {...getRootProps()}>
                            <input {...getInputProps()} />

                            {
                                haveIMG ? <img src={url} className={'admin_create_news-image'} style={{}}/> :
                                    isDragActive ?
                                        <p>Drop the files here ...</p> :
                                        <p>Drag 'n' drop some files here, or click to select files</p>
                            }
                        </div>
                    </div>
                </div>
                <input type={"button"} value={"ok"}  onClick={async ()=>{
                    const fd = new FormData();
                    const obj = {id:String(news.getNews().length+1),title:document.querySelector(".text_title_send").value,text:document.querySelector(".text_area_news").value,date:new Date()}
                    fd.append('data',JSON.stringify(obj))
                    fd.append('picture',image)
                    const f = await fetch('/api/news/',
                        {
                                method: "POST",
                                body: fd
                            })
                        f.json().then((ns)=>{
                        console.log(JSON.stringify(ns));
                        news.AddNews(ns)
                    })

                }}/>
            </div>
        <div className={"news_panel"}>
            <div>
                <EditableTable rows={news.getNews()} columns={columns} actions/>
            </div>
        </div>
        </div>
    );
});

export default AdminNews;