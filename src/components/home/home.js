import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import Todo from '../Todo/Todo';
import { useDispatch } from 'react-redux';
import { addData } from '../redux/action/action';

const Home = () => {
    let [data, setData] = useState("");
    // console.log(data);

    const dispatch = useDispatch()

    const Mydata = () => {
        dispatch(addData(data))
        setData('')
    }
    return (
        <div className='container'>
            <div className='mt-3'>
                <Typography variant="h4"> Enter your task </Typography>
                <div className='todo mt-5 col-lg-5 mx-auto d-flex justify-content-between align-item-center'>
                    <input class="form-control" name='task' value={data} onChange={(e) => setData(e.target.value)} />
                    <Button onClick={() => Mydata()} variant="contained ms-2" style={{ background: "#d32f2f", color: "white" }}><AddIcon /></Button>
                </div>
            </div>
            <Todo />
        </div>
    )
}

export default Home