import React, {useContext, useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import CreatePanel from "./CreatePanel";
import {LOCALES} from "../i18n/Locale";
import {createNews} from "../http/Api";
import {Context} from "../index";

const ModalWindow = () => {
    const {news} = useContext(Context)
    const [show, setShow] = useState(false);
    const [data, setData] = useState(
         {
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
        }
        )
    const [image,setImage] = useState(null)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch modal
            </Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CreatePanel data={data} setImage={setImage}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => {
                        const fd = new FormData();
                        const obj = data
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
                    }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalWindow;