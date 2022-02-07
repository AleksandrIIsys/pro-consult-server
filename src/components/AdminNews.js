import React, {useCallback, useContext, useEffect, useState} from 'react';
import {useDropzone} from "react-dropzone";
import EditableTable from "./EditableTable";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AdminNews = observer(() => {
    const {news} = useContext(Context)
    const [haveIMG,setHAVE] = useState(false);
    const [url,setURL] = useState('gray');
    const onDrop = useCallback(async acceptedFiles => {
        setHAVE(true);
        let myFormData = new FormData();
        myFormData.append("picture", acceptedFiles[0]);
        const f = await fetch('/api/admin/picture_for', {
            method: "POST",
            body: myFormData,
        })
        f.json().then((test) => {
            setURL('/img/' + test.url)
        })
    }, [])
    console.log("!")
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
                    // let myFormData = new FormData();
                    // let file = document.querySelector("#file_send")
                    // myFormData.append("picture",file.files[0]);
                    // let fet = await fetch('/api/admin/',
                    //     {method:"POST",
                    //         body:myFormData,
                    //     })
                    const fd = new FormData();
                    let d = news.getNews()
                    d.push( {id:String(news.getNews().length+1),image:url,title:document.querySelector(".text_title_send").value,text:document.querySelector(".text_area_news").value,date:'aboba'})
                            // fd.append('data',JSON.stringify(d))
                            // await fetch('/api/news/',
                            //     {
                            //         method: "POST",
                            //         body: fd
                            //     })
                    console.log(d);
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