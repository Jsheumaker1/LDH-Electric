import { LockClosedIcon } from '@heroicons/react/solid'
import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useHistory } from "react-router-dom";
import { ExclamationIcon } from '@heroicons/react/outline'
import { useLocation } from "react-router-dom";


function CustomerInfo({}) { 
  
    const location = useLocation();
    const customerInfo = location.state
    const cancelButton = useRef(null)
    const history = useHistory(); 
    const [openModal, setOpenModal] = useState(false)
    const [customer, setCustomer] = useState(customerInfo)

    console.log(customer)
    
    const [customerForm, setCustomerForm] = useState({
        customer_name: customer.customer_name,
        phone: customer.phone,
        address: customer.address,
      })
    

    const [updateCustomer, setUpdateCustomer] = useState({
        customer_name: '',
        phone: '',
        address: '',
        
      })

    const handleCustomerEdit = (e) => {
        const name = e.target.name
          const value = e.target.value
          setUpdateCustomer({
              [name]:value
          })
      }
  
      const postCustomerEdit = (e) => {
        e.preventDefault()
  
        const updatedCustomer={
            customer_name: updateCustomer.customer_name,
            phone: updateCustomer.phone,
            address: updateCustomer.address,
        }
  
        fetch(`/customers/${customer.id}`, {
        method: "PATCH",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({updatedCustomer})
        })
        .then(res => res.json())
        .then((postUpdatedCustomer) => {
          setCustomer(postUpdatedCustomer)
          history.push('/Home')         
        })
    }

    const handleCustomerDelete = () =>{
      if (window.confirm("Are you sure you want to delete this customer?"))
        fetch(`/customers/${customer.id}`, {
          method: 'DELETE'},
          history.push('/Home'))}

    return (

        <div className="border-t border-gray-200 bg-white shadow overflow-hidden sm:rounded-lg ">
            {/* {setUser.map((user) => { return(                
                <dr key={user.id}> */}
          <div className="px-4 pt-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900 bg-white shadow overflow-hidden sm:rounded-lg p-5">Customer Information</h3>
          </div>
          <div className="px-4 py-5 sm:px-6 ">
            <div className="border-t border-gray-200 bg-white shadow overflow-hidden sm:rounded-lg">
              <dl>
              <form className="mt-8 space-y-6" >
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Customer Name</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{customerForm.customer_name}</dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Address</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{customerForm.address}</dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Phone</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{customerForm.phone}</dd>
                </div>
    
                <div className=" place-items-end bg-white px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                  <div>
                  <div className="text-sm font-medium text-gray-500"> </div>
                  <button onClick={() => setOpenModal(true)} type="button" className="place-items-end order-last group relative flex justify-center py-2 px-10 border-10 border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                      </span>
                      Edit Customer
                  </button>
                  </div>
                  <Transition.Root show={openModal} as={Fragment}>
                    <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButton} onClose={setOpenModal}>
                      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                          &#8203;
                        </span>
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                          enterTo="opacity-100 translate-y-0 sm:scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                              <div className="">
                              <div className="mt-10 sm:mt-0">
                                <div className="md:grid md:grid-cols-1 md:gap-6">                              
                                  <div className="mt-5 md:mt-0 md:col-span-2">
                                    <form action="#" method="PATCH" onSubmit={postCustomerEdit}>
                                      <div className="shadow overflow-hidden sm:rounded-md">
                                        <div className="px-4 py-5 bg-white sm:p-6">
                                          <div className="border-t border-gray-200 rounded-lg">
                                            
                                          <div className=" rounded-lg bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                              <dt className="text-sm font-medium text-gray-500">Customer Name</dt>
                                              <input className="outline-black rounded-sm mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                                                onChange={handleCustomerEdit}
                                                type="text"
                                                name="customer_name"
                                                id="customer_name"
                                                autoComplete="customer_name"
                                                placeholder={customerForm.customer_name}
                                                ></input>
                                            </div>  

                                            <div className=" rounded-lg bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                              <dt className="text-sm font-medium text-gray-500">Address</dt>
                                              <input className="outline-black rounded-sm mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                                                onChange={handleCustomerEdit}
                                                type="text"
                                                name="phone"
                                                id="phone"
                                                autoComplete="phone"
                                                placeholder={customerForm.phone}
                                                ></input>
                                            </div> 
                                             
                                            <div className=" rounded-lg bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                              <dt className="text-sm font-medium text-gray-500">Phone</dt>
                                              <input className="outline-black rounded-sm mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"                                              
                                                onChange={handleCustomerEdit}
                                                type="text"
                                                name="address"
                                                id="address"
                                                autoComplete="address"
                                                placeholder={customerForm.address}
                                                ></input>
                                            </div>            
                                          </div>
                                        </div>
                                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                          <button
                                            type="submit"
                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                          >
                                            Save
                                          </button>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                                
                              </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">                              
                              <button
                                type="button"
                                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={() => setOpenModal(false)}
                                ref={cancelButton}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </Transition.Child>
                      </div>
                    </Dialog>
                  </Transition.Root>
                </div>
              </form>
            </dl>
          </div>
        </div>
            <div className="px-4 py-5 sm:px-6">
              
                  <button onClick={handleCustomerDelete} type="submit" className="group relative flex justify-center py-2 px-10 border-10 border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <span className="inset-y-0 flex items-center pl-3">
                      <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                      </span>
                      Delete Customer
                  </button>
                
              </div>
        {/* </dr>
        )})} */}
      </div>
      )
  
    
}

export default CustomerInfo;