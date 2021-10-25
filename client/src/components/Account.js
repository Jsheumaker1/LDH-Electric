// import { PaperClipIcon } from '@heroicons/react/solid'
import React, {useState} from 'react';
import { LockClosedIcon } from '@heroicons/react/solid'


function Account( {login, user} ) {  

    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const [showModal, setShowModal] = React.useState(false);

    const [userForm, setUserForm] = useState({
        name: user.name,
        username: user.username,
        email: user.email,
        password: user.password_digest
      })

    const handleDelete = () =>{
        if (window.confirm("Are you sure you want to delete this account?"))
          fetch(`/users/${user.id}`, {
            method: 'DELETE'},
            login(false))}

    

    return (
            
        <div className="border-t border-gray-200 bg-white shadow overflow-hidden sm:rounded-lg ">
            {/* {setUser.map((user) => { return(                
                <dr key={user.id}> */}
          <div className="px-4 pt-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900 bg-white shadow overflow-hidden sm:rounded-lg p-5">Account Information</h3>
          </div>
          <div className="px-4 py-5 sm:px-6 ">
            <div className="border-t border-gray-200 bg-white shadow overflow-hidden sm:rounded-lg">
              <dl>
              <form className="mt-8 space-y-6"  onSubmit={console.log("click")} >
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Full Name</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userForm.name}</dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">User Name</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userForm.username}</dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Email address</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userForm.email}</dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Password</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"  type="password">{(userForm.password)}</dd>
                  {/* <br/> */}
                  {/* <button className="mt-1 text-xs text-gray-900 sm:mt-0 sm:grid-cols-3 sm:col-span-1" onClick={() => setIsRevealPwd(!isRevealPwd)} type="submit">Show Password</button> */}
                </div>
                <div className=" place-items-end bg-white px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                  <div>
                  <div className="text-sm font-medium text-gray-500"> </div>                               
                  <button onClick={() => setShowModal(true)} type="submit" className="place-items-end order-last group relative flex justify-center py-2 px-10 border-10 border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                      </span>
                      Edit Account
                  </button>
                    {showModal ? (
                      <>
                        <div
                          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                          <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                              {/*header*/}
                              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                <h3 className="text-3xl font-semibold">
                                  Modal Title
                                </h3>
                                <button
                                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                  onClick={() => setShowModal(false)}
                                >
                                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                  </span>
                                </button>
                              </div>
                              {/*body*/}
                              <div className="relative p-6 flex-auto">
                                <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                  I always felt like I could do anything. That’s the main
                                  thing people are controlled by! Thoughts- their perception
                                  of themselves! They're slowed down by their perception of
                                  themselves. If you're taught you can’t do anything, you
                                  won’t do anything. I was taught I could do everything.
                                </p>
                              </div>
                              {/*footer*/}
                              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                <button
                                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                  onClick={() => setShowModal(false)}
                                >
                                  Close
                                </button>
                                <button
                                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                  onClick={() => setShowModal(false)}
                                >
                                  Save Changes
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                      </>
                    ) : null}
                  </div>
                </div>
              </form>
            </dl>
          </div>
        </div>
            <div className="place-items-end px-4 py-5 sm:px-6">
              
                  <button onClick={handleDelete} type="submit" className="place-items-end group relative flex justify-center py-2 px-10 border-10 border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <span className="inset-y-0 flex items-center pl-3">
                      <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                      </span>
                      Delete Account
                  </button>
                
              </div>
        {/* </dr>
        )})} */}
      </div>

      
      )
  }

  

export default Account;