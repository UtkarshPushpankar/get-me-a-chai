"use client"
import React, { useState, useEffect } from 'react'
import Script from 'next/script'
import Razorpay from 'razorpay'
import { fetchpayments, initiate, fetchuser } from '@/actions/useractions'
import { useSession } from 'next-auth/react'

const PaymentPage = ({ username }) => {
    // const { data: session } = useSession()
    const [paymentform, setPaymentform] = useState({})
    const [currentUser, setcurrentUser] = useState({})
    const [payments, setPayments] = useState([])

    useEffect(() => {
      getData()
    }, [])
    

    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value})
    }

    const getData = async (params) => {
        let u = await fetchuser(username)
        setcurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
        console.log(u, dbpayments)
    }

    const pay = async (amount) => {
        // Get the order ID
        let a = await initiate(amount, username, paymentform);
        let orderId = a.id;
        var options = {
            "key": process.env.NEXT_PUBLIC_KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Get me a Chai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }

        var rzp1 = new Razorpay(options)
        rzp1.open();
    }
    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>


            <div className="cover w-full relative">
                <img className='object-cover w-full h-[350]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/17.gif?token-time=1738627200&token-hash=Z4xytPbOeC-7uSh5c5zvkmqGTxgQDIr_QyzhS-P2ZEg%3D" alt="" />

                <div className='absolute -bottom-14 right-[45.8%] border-white border-2 rounded-full'>
                    <img className='rounded-full' width={120} height={120} src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/aa52624d1cef47ba91c357da4a7859cf/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/4.gif?token-time=1739404800&token-hash=sN-0NJE4iki4dPakRY3SrLB_rF2vY1hRRtQv42ItwQk%3D" alt="" />
                </div>
            </div>

            <div className="info flex flex-col items-center justify-center gap-2 my-16">
                <div className='font-bold text-lg'>@{username}</div>
                <div className='text-slate-400'>Creating Animated art for VTT's</div>
                <div className='text-slate-400'>16,129 members . 94 posts . $16,550/release</div>

                <div className="payment flex gap-3 w-[80%] mt-8">
                    <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        {/* Show list of all the supporters as a leaderboard */}
                        <h2 className='text-2xl font-bold mb-5'>Supporters</h2>

                        <ul className='text-lg mx-5'>
                            <li className='my-4 flex gap-2 items-center'>
                                <img width={50} src="avatar.gif" alt="user avatar" />
                                <span>
                                    Shubham donated <span className="font-bold">$30</span> with a message "I support you bro. Lots of ❤"
                                </span>
                            </li>

                            <li className='my-4 flex gap-2 items-center'>
                                <img width={50} src="avatar.gif" alt="user avatar" />
                                <span>
                                    Shubham donated <span className="font-bold">$30</span> with a message "I support you bro. Lots of ❤"
                                </span>
                            </li>

                            <li className='my-4 flex gap-2 items-center'>
                                <img width={50} src="avatar.gif" alt="user avatar" />
                                <span>
                                    Shubham donated <span className="font-bold">$30</span> with a message "I support you bro. Lots of ❤"
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        <h2 className='text-2xl font-bold mb-5'>Make a Payment</h2>
                        <div className='flex flex-col gap-4'>

                            <input onChange={handleChange} value={paymentform.name} name='name' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />

                            <input onChange={handleChange} value={paymentform.message} name='message' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />

                            <input onChange={handleChange} value={paymentform.amount} name='amount' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />

                            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>

                        </div>
                        {/* Or choose from these amounts */}
                        <div className='flex gap-2 mt-5'>
                            <button className='bg-slate-800 rounded-lg p-3' onClick={() => pay(1000)}>Pay ₹10</button>
                            <button className='bg-slate-800 rounded-lg p-3' onClick={() => pay(2000)}>Pay ₹20</button>
                            <button className='bg-slate-800 rounded-lg p-3' onClick={() => pay(3000)}>Pay ₹30</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage
