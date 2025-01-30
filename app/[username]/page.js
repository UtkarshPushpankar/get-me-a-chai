import React from 'react'

const Username = ({ params }) => {
  return (
    <>
      <div className="cover w-full relative">
        <img className='object-cover w-full h-[350]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/17.gif?token-time=1738627200&token-hash=Z4xytPbOeC-7uSh5c5zvkmqGTxgQDIr_QyzhS-P2ZEg%3D" alt="" />

        <div className='absolute -bottom-14 right-[45.8%] border-white border-2 rounded-full'>
          <img className='rounded-full' width={120} height={120} src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/aa52624d1cef47ba91c357da4a7859cf/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/4.gif?token-time=1739404800&token-hash=sN-0NJE4iki4dPakRY3SrLB_rF2vY1hRRtQv42ItwQk%3D" alt="" />
        </div>
      </div>

      <div className="info flex flex-col items-center justify-center gap-2 my-16">
        <div className='font-bold text-lg'>@{params.username}</div>
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

              <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />

              <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />

              <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />

              <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>

            </div>
            {/* Or choose from these amounts */}
            <div className='flex gap-2 mt-5'>
              <button className='bg-slate-800 rounded-lg p-3'>Pay $10</button>
              <button className='bg-slate-800 rounded-lg p-3'>Pay $20</button>
              <button className='bg-slate-800 rounded-lg p-3'>Pay $30</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Username
