import React, { useContext, useState} from 'react';
import {Form, Table} from "react-bootstrap";
import {PencilFill, Save, Trash, XSquare} from 'react-bootstrap-icons';
import './EditableTable.styles.scss';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {deleteNews, editNews} from "../../http/Api";
import {forEach} from "react-bootstrap/ElementChildren";

export const NewsTable = observer(({columns, language, actions}) => {
    const {news} = useContext(Context);
    const [isEditMode, setIsEditMode] = useState(false);
    const [rowIDToEdit, setRowIDToEdit] = useState(undefined);
    const [rowsState, setRowsState] = useState(news.getNews());
    const [editedRow, setEditedRow] = useState();
    const [file, setFile] = useState(null);

    const handleEdit = (rowID) => {
        setIsEditMode(true);
        setFile(null)
        setEditedRow(news.getNews().filter(row => row.id === rowID)[0]);
        setRowIDToEdit(rowID);
    }
    const handleRemoveRow = async (rowID) => {
        const newData = rowsState.filter(row => {
            return row.id !== rowID ? row : null
        });
        const deleteData = rowsState.filter(row => {
            return row.id === rowID ? row : null
        })[0];
        newData.forEach((elem, index) => {
            elem.id = (index + 1)
        })
        const fd = new FormData()
        fd.append("data", JSON.stringify(deleteData));
        deleteNews(fd).then((res) => {
            if (res.status === 200) {
                news.setNews(newData);
            }
        }).catch((e) => {
            console.log(e);
        })
    }
    const handleOnChangeImage = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0])
            const filereader = new FileReader()
            filereader.onload = file => {
                let obj = editedRow
                obj.image = file.target.result
                setEditedRow(obj)
            }
            filereader.readAsDataURL(e.target.files[0])
        }
    }
    const handleOnChangeField = (e) => {
        const {name: fieldName, value} = e.target;
        let obj = editedRow
        obj[fieldName][language] = value
        setEditedRow(obj)
    }

    const handleCancelEditing = () => {
        setIsEditMode(false);
        setEditedRow(undefined);
    }

    const handleSaveRowChanges = () => {
        setTimeout(async () => {
            setIsEditMode(false);
            const fd = new FormData()
            if (file !== null)
                fd.append('image', file);
            fd.append("data", JSON.stringify(editedRow))
            editNews(fd).then((res) => {
                if (res.status === 200) {
                    const promise = res.json()
                    promise.then((data) => {
                        news.EditNews(data)
                    })
                }
            })
            setFile(null)
            setEditedRow(undefined)
        }, 1000)
    }

    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                {columns.map((column) => {
                    return <th key={column.field}>{column.fieldName}</th>
                })}
            </tr>
            </thead>
            <tbody>
            {rowsState.map((row) => {
                return <tr key={row.id}>
                    <td>
                        {row.id}
                    </td>
                    <td>
                        {isEditMode && rowIDToEdit === row.id
                            ?
                            <div style={{overflowX: "hidden", overflowY: "hidden"}}>
                                <label htmlFor={"file-input"} style={{cursor: 'pointer'}}>
                                    <img src={editedRow ? editedRow.image : row.image} style={{width: "100px"}} alt={""}/>
                                </label>
                                <input type={"file"} onChange={(e) => {
                                    handleOnChangeImage(e);
                                }} id="file-input" style={{display: "none", width: "100px"}} autoComplete={"off"}
                                       tabIndex={"-1"}/>
                            </div>
                            : <span><img src={row.image} style={{width: "100px"}} alt={""}/></span>
                        }
                    </td>
                    <td>
                        {isEditMode && rowIDToEdit === row.id
                            ? <Form.Control
                                type='text'
                                defaultValue={editedRow ? editedRow.title[language] : row.title[language]}
                                id={row.id}
                                name='title'
                                onChange={(e) => handleOnChangeField(e, row.id)}
                            />
                            : <span className={"title"}>{row.title[language]}</span>
                        }
                    </td>
                    <td>
                        {isEditMode && rowIDToEdit === row.id
                            ? <Form.Control
                                as='textarea'
                                defaultValue={editedRow ? editedRow.text[language] : row.text[language]}
                                id={row.id}
                                name='text'
                                style={{overflowY: "none", height: "42px"}}
                                onChange={(e) => handleOnChangeField(e, row.id)}
                            />
                            : <span>{row.text[language]}</span>
                        }
                    </td>
                    <td>
                        {
                            row.date
                        }
                    </td>
                    {actions &&
                        <td>
                            {isEditMode && rowIDToEdit === row.id
                                ? <button onClick={() => handleSaveRowChanges()} className='custom-table__action-btn'
                                          disabled={!editedRow}>
                                    <Save/>
                                </button>
                                : <button onClick={() => handleEdit(row.id)} className='custom-table__action-btn'>
                                    <PencilFill/>
                                </button>
                            }

                            {isEditMode && rowIDToEdit === row.id
                                ? <button onClick={() => handleCancelEditing()} className='custom-table__action-btn'>
                                    <XSquare/>
                                </button>
                                : <button onClick={() => handleRemoveRow(row.id)} className='custom-table__action-btn'>
                                    <Trash/>
                                </button>
                            }
                        </td>
                    }
                </tr>
            })}
            </tbody>
        </Table>
    );
});

export default NewsTable;