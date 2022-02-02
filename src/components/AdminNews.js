import React, {useCallback, useState} from 'react';
import {useDropzone} from "react-dropzone";
import EditableTable from "./EditableTable";

const AdminNews = () => {
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
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    const columns = [
        { field: 'id', fieldName: '#' },
        { field: 'image', fieldName: 'Image' },
        { field: 'title', fieldName: 'Title' },
        { field: 'text', fieldName: 'Text' },
        { field: "date", fieldName: 'Date' },
    ];

    const data = [
        {id: "1", image: "/", title:"два",text:'text',date:'aboba'}
    ];
    return (
        <div className={"admin_news"}>
            <div className={"top_panel"}>
                <div>
                    <div className={"admin_create_news"}>
                        <div className={"admin_create_news-ta"}>
                            <input type={"text"} className={"text_title_send"}/>
                            <textarea ></textarea>
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
                <input type={"button"} value={"ok"} onClick={async ()=>{
                    // let myFormData = new FormData();
                    // let file = document.querySelector("#file_send")
                    // myFormData.append("picture",file.files[0]);
                    // let fet = await fetch('/api/admin/',
                    //     {method:"POST",
                    //         body:myFormData,
                    //     })

                }}/>
            </div>
        <div className={"news_panel"}>
            <EditableTable rows={data} columns={columns} actions></EditableTable>
            {/*<div>*/}
            {/*<table className={"news_table"}>*/}
            {/*    <thead>*/}
            {/*        <th>Картинка</th>*/}
            {/*        <th>Название</th>*/}
            {/*        <th>Содержание</th>*/}
            {/*        <th>Дата</th>*/}
            {/*    </thead>*/}
            {/*    <tbody>*/}

            {/*    </tbody>*/}
            {/*</table>*/}
            {/*</div>*/}
        </div>
        </div>
    );
};

export default AdminNews;