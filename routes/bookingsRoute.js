const express = require('express')
const router = express.Router();
const Booking = require("../models/booking")
const Room = require('../models/room');
const moment = require('moment');
const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')('sk_test_51PTfrGRuubQHoE8HkpDHP5X3G45F6VYVFJ5Hwua6Mit5bMRx7cI1PwbX2zM9UXOxIVkqH1H28kP0OWdzcpdn2bzG00IPqP42cJ')


router.post("/bookroom", async (req, res) => {
    const {
        room,
        userid,
        fromdate,
        todate,
        totalamount,
        totaldays,
         token } = req.body;

    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })

        const payment = await stripe.charges.create(
            {
            amount: totalamount * 100,
            customer: customer.id,
            currency: 'inr',
            receipt_email: token.email
        },
            {
                idempotencyKey: uuidv4()
            }
        )
        if (payment) {

                const newbooking = new Booking({
                    room: room.name,
                    roomid: room._id,
                    userid,
                    fromdate,
                    todate,
                    totalamount,
                    totaldays,
                    transactionId: '1234'
                })
                const booking = await newbooking.save()
                const roomtemp = await Room.findOne({ _id: room._id })

                roomtemp.currentbookings.push({
                    bookingid: booking._id,
                    fromdate,
                    todate,
                    userid: userid,
                    status: booking.status
                });

                await roomtemp.save()
            } 
    } catch (error) {
        return res.status(400).json({ error })
    }
});

module.exports = router
