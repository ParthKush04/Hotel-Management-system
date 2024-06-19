import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import Loader from '../components/Loader';
import Error from '../components/Error';
import moment from 'moment'

function Bookingsscreen() {
    const [room, setroom] = useState();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState();
    const  {roomid} = useParams();
    const {fromdate} = useParams();
    const {todate} = useParams();

    var startdate = moment(fromdate,'DD-MM-YYYY')
    var enddate = moment(todate,'DD-MM-YYYY')

    const d1 = new Date(startdate)
    const d2 = new Date(enddate)
    var time_difference = d2.getTime() - d1.getTime();  
    var totaldays = time_difference / (1000 * 60 * 60 * 24)+1;  
    

    const somethings = async () => {
        try {
            setloading(true)
            const data = (await axios.post('/api/rooms/getroombyid', { roomid: roomid })).data
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
                            <b>
                                <p>Name : </p>
                                <p>From Date : {(fromdate)}</p>
                                <p>To Date : {(todate)}</p>
                                <p>MaxCount : {room.maxcount} </p>
                            </b>
                        </div>
                        <div style = {{textAlign: 'right'}}>
                            <b>
                            <h1>Amount</h1>
                           
                            <p>Total Days : {totaldays} </p>
                            <p>Rent per day : {room.rentperday} </p>
                            <p>Total Amount : </p>
                            </b>
                        </div>
                        <div style = {{float : 'right'}}>
                        <button type="button" class="btn btn-success mt-2">Pay now</button>
                        </div>
                    </div>
                </div>
            </div>): <Error/>}
        </div>
    );
}

export default Bookingsscreen
