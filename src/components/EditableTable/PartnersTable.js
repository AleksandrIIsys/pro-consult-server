import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {deleteClient, deletePartner, editClient, editPartner} from "../../http/Api";
import {Table} from "react-bootstrap";
import {PencilFill, Save, Trash, XSquare} from "react-bootstrap-icons";

const PartnersTable = observer(({columns, language, actions}) => {
    const {partners} = useContext(Context);
    const [isEditMode, setIsEditMode] = useState(false);
    const [rowIDToEdit, setRowIDToEdit] = useState(undefined);
    const [rowsState, setRowsState] = useState(partners.getPartners());
    const [editedRow, setEditedRow] = useState();
    const [file, setFile] = useState(null);
    const handleEdit = (rowID) => {
        setIsEditMode(true);
        setFile(null)
        setEditedRow(partners.getPartners().filter(row => row.id === rowID)[0]);
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
        deletePartner(fd).then((res) => {
            if (res.status === 200) {
                partners.setPartners(newData);
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
            editPartner(fd).then((res) => {
                if (res.status === 200) {
                    const promise = res.json()
                    promise.then((data) => {
                        partners.EditPartners(data)
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
                                />
                            </div>
                            : <span><img src={row.image} style={{width: "100px"}} alt={""}/></span>
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

export default PartnersTable;