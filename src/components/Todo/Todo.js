import React, { useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DeleteData } from '../redux/action/action';
import { UpdateData } from '../redux/action/action';
const Todo = () => {

    const dispatch = useDispatch()
    const { data } = useSelector((state) => state.TodoReducer);
    
    const [showvalue, setShowvalue] = useState('')
    const [showeye, setShoweye] = useState(false);

    const Remove = (id) => {
        dispatch(DeleteData(id))
        console.log(id);
    }


    const [show, setShow] = useState(false)
    const [update, setUpdate] = useState("")
    const [ind, setInd] = useState("")

    const HandleShow = (item) => {
        setShow(true)
        setUpdate(item)
    }
    const handleClose = () => setShow(false);

    const Task_Update = () => {
        dispatch(UpdateData(update, ind))
        handleClose()
    }


    return <>
        <div>
            {
                data.map((item, ind) => {
                    return <>
                        <div className='col-lg-5 text-align-center justify-content-between d-flex mx-auto mt-2 p-1 px-2' key={ind} style={{ background: "#D3D3D3", borderRadius: "5px" }}>
                            <li style={{ listStyleType: "none", color: "black" }}>
                                <h4>{item}</h4>
                            </li>
                            <div className='col-lg-3 d-flex align-item-center jistify-content-between py-2'>
                                <CreateIcon
                                    onClick={() => {
                                        HandleShow(item)
                                        setInd(ind)
                                    }}
                                    style={{ cursor: "pointer", color: "blue", marginRight: "5px" }} />
                                <DeleteRoundedIcon onClick={() => Remove(ind)} style={{ cursor: "pointer", color: "red", marginRight: "5px" }} />
                                <RemoveRedEyeOutlinedIcon
                                    onClick={() => {
                                        setShoweye(true)
                                        setShowvalue(item)
                                    }}
                                    style={{ cursor: "pointer", color: "gray" }} />
                            </div>
                        </div>
                    </>
                })
            }
            {/* Read Modal */}
            <Modal show={showeye}>
                <Modal.Header >
                    <Modal.Title>
                        <h2>{showvalue}</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShoweye(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>


            {/* Update Modal */}
            <Modal show={show} onHide={handleClose}>
                <h3 className='text-center mt-2'>Update your Task</h3>
                <Modal.Header >
                    <Modal.Title>
                        <div >
                            <input class="form-control w-100 mt-2" name='task' value={update}
                                onChange={(e) => setUpdate(e.target.value)} />

                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => Task_Update()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>


    </>
}

export default Todo;