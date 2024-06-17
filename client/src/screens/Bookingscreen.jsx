import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import Loader from '../components/Loader';
import Error from '../components/Error';

function Bookingsscreen() {
    const [room, setroom] = useState();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState();
    const { roomid } = useParams();
    const somethings = async () => {
        try {
            setloading(true)
            const data = (await axios.post('/api/rooms/getroombyid', { roomid: String(roomid) })).data
            setroom(data);
            setloading(false);
        } catch (error) {
            setloading(false);
            console.log(error)
            seterror(true);
        }
    }
    useEffect(() => {
        somethings();
    }, [])

    return (
        <div className = 'm-5'>
            {loading ? (<h1><Loader/></h1>) : room ? (<div>
                <div className="row justify-content-center mt-5 bs "  >

                    <div className="col-md-5">
                        <h1>{room.name}</h1>
                        <img src={room.imageurls[0]} className='bigimg' />
                    </div>
                    <div className="col-md-5" >
                        <div style = {{textAlign: 'right'}}>
                            <h1>Booking Details</h1>
                            <hr />
                            <b>
                                <p>Name : </p>
                                <p>From Date :</p>
                                <p>To Date :</p>
                                <p>MaxCount : {room.maxcount}</p>
                            </b>
                        </div>
                        <div style = {{textAlign: 'right'}}>
                            <b>
                            <h1>Amount</h1>
                            <hr />
                            <p>Total Days : </p>
                            <p>Rent per day : {room.rentperday} </p>
                            <p>Total Amount</p>
                            </b>
                        </div>
                        <div style = {{float : 'right'}}>
                        <button type="button" class="btn btn-success">Pay now</button>
                        </div>
                    </div>
                </div>
            </div>): <Error/>}
        </div>
    );
}

export default Bookingsscreen
