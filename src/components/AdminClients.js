import React, {useCallback, useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {LOCALES} from "../i18n/Locale";
import {useDropzone} from "react-dropzone";
import {Form} from "react-bootstrap";
import {createClient} from "../http/Api";
import TestimonialsTable from "./EditableTable/TestimonialsTable";
import ClientsTable from "./EditableTable/ClientsTable";

const AdminClients = observer(() => {
    const {clients} = useContext(Context)
    const [newClients,setNewClients] = useState({
        date: "",
    })
    const [haveIMG, setHAVE] = useState(false);
    const [url, setURL] = useState('gray');
    const [image, setImage] = useState('')
    const onDrop = useCallback(async acceptedFiles => {
        setHAVE(true);
        setImage(acceptedFiles[0])
        const filereader = new FileReader()
        filereader.onload = file => {
            setURL(file.target.result)
        }
        filereader.readAsDataURL(acceptedFiles[0])
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    const columns = [
        {field: 'id', fieldName: '#'},
        {field: 'image', fieldName: 'Image'},
        {field: "date", fieldName: 'Date'},
    ];
    return (
        <div className={"admin_news"}>
            <div className={"top_panel"}>
                    <div style={{cursor: 'pointer'}} {...getRootProps()}>
                        <input {...getInputProps()} />
                        {
                            haveIMG ? <img src={url} className={'admin_create_news-image'}/> :
                                isDragActive ?
                                    <p>Drop the files here ...</p> :
                                    <p>Drag 'n' drop some files here, or click to select files</p>
                        }
                    </div>
                <input type={"button"} value={"ok"} onClick={async () => {
                    const fd = new FormData();
                    const obj = newClients
                    obj.date = new Date().toLocaleString("ru-RU")
                    fd.append('data', JSON.stringify(obj))
                    fd.append('picture', image)
                    createClient(fd).then((ns) => {
                        const promise = ns.json()
                        promise.then((data)=>{
                            data.id = clients.getClients().length + 1
                            clients.AddClients(data)
                        })

                    })

                }}/>
                {/*<CreatePanel language={lang} />*/}
            </div>
            <div className={"news_panel"}>
                <div>
                    <ClientsTable columns={columns} actions/>
                </div>
            </div>
        </div>
    );
});

export default AdminClients;