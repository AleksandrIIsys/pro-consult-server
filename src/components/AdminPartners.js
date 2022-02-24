import React, {useCallback, useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useDropzone} from "react-dropzone";
import {createClient, createPartner} from "../http/Api";
import ClientsTable from "./EditableTable/ClientsTable";
import PartnersElement from "../Models/PartnersElement";
import PartnersTable from "./EditableTable/PartnersTable";

const AdminPartners = observer(() => {
    const {partners} = useContext(Context)
    const [newPartners,setNewPartners] = useState({
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
                    const obj = newPartners
                    obj.date = new Date().toLocaleString("ru-RU")
                    fd.append('data', JSON.stringify(obj))
                    fd.append('picture', image)
                    createPartner(fd).then((ns) => {
                        const promise = ns.json()
                        promise.then((data)=>{
                            data.id = partners.getPartners().length + 1
                            partners.AddPartners(data)
                        })
                    })

                }}/>
                {/*<CreatePanel language={lang} />*/}
            </div>
            <div className={"news_panel"}>
                <div>
                    <PartnersTable columns={columns} actions/>
                </div>
            </div>
        </div>
    );
});

export default AdminPartners;