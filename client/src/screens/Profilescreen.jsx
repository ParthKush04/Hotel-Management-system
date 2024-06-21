import React, { useEffect,useState } from 'react';
import { Tabs } from 'antd';
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';

const {TabPane} = Tabs;

function Profilescreen(){

    const user = JSON.parse(localStorage.getItem('currentUser'))

    useEffect(()=>{
        if(!user){
            window.location.href = '/login'
        }
    },[])
   return(
    <div className='profilepagecss'>
        <Tabs>
            <TabPane tab = "Profile" key ="1">
                <h1>My Profile</h1>
                <br />
                <h1>Name : {user.name}</h1>
                <h1>email : {user.email}</h1>
                <h1>isAdmin : {user.isAdmin ? 'YES' : 'NO'}</h1>
            </TabPane>
            <TabPane tab = "Bookings" key = "2">
                <MyBookings/>
            </TabPane>
        </Tabs>
    </div>
   );

}
export default Profilescreen;

export function MyBookings () {
    const user = JSON.parse(localStorage.getItem('currentUser'))
    const [bookings,setbookings] = useState([])

    const [loading, setloading] = useState(false);
    const [error, seterror] = useState();

    const dosomething = async()=>{
     try{
        setloading(true);
        const data = await (
        await axios.post('/api/bookings/getbookingsbyuserid',{userid : user._id})).data
        console.log(data);
        setbookings(data);
        setloading(false);
     }catch(error){
        console.log(error)
        setloading(false)
        seterror(error)
     }
    }
    useEffect(()=>{
        dosomething();
    },[])
    return (
        <div>
       <div className="row">
        <div className="col-md-5">
           {loading && (<Loader/>)}
           {bookings && (bookings.map(booking=>{
            return(
           <div className='bs'>
            <h1>{booking.room}</h1>
            <p><b>Booking id</b>  : {booking._id}</p>
            <p><b>Transaction id</b> : 1234</p>
            <p><b>Check-in Date : </b> {booking.fromdate}</p>
            <p><b>Check-out Date :</b> {booking.todate}</p>
            <p><b>Total Amount :</b> {booking.totalamount} </p>
            <p><b>Status :</b> {booking.status === 'booked' ? 'CONFIRMED' : 'CANCELLED'}</p>
            <div class ='cancelbutton'>
            <button type="button" class="btn btn-danger">Cancel</button>

            </div>
           </div>
            )
           }))}
        </div>
       </div>
       </div>
    )
}


