import React, {useState} from 'react';
import '../App.css';
import '../index.css'
import 'reactjs-popup/dist/index.css';
import { useHistory } from "react-router-dom";


function NewCustomer ({login, setUser,  setCurrentUser }) {

    const history = useHistory();  
    const [currentCustomers, setCurrentCustomers]= useState([])
    const [customerData, setCustomerData] = useState({
        user_id: '',
        customer_name: '',
        phone: '',
        address: '',
        balance: ''
    });

    const handleNewCustomer = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setCustomerData({
            ...customerData, [name]:value
    })}

    const handleCustomerSubmit = (e) =>{
        e.preventDefault()
        const newCustomer = {
            user_id: setUser.id,
            name: customerData.customer_name,
            username: customerData.phone,
            email: customerData.address,
            balance: customerData.balance
            }
        
        fetch('http://localhost:3000/customers', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },
            body: JSON.stringify(newCustomer)
              })
              .then(res=>res.json())
              .then(data=>console.log(newCustomer))          
    }



    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                    <h2 className="mt-6 text-center text-xl font-extrabold text-gray-900">💡 New Customer Information 💡</h2>
                    </div>
                    <form className="mt-8 space-y-6"  onSubmit={handleCustomerSubmit} >
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div className="p-2">
                                <label htmlFor="customer_name" className="sr-only">
                                Customer Name
                                </label>
                                <input onChange={handleNewCustomer} value={customerData.customer_name} id="customer_name" name="customer_name" type="customer_name" autoComplete="customer_name" required className=" appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Customer Name" />
                            </div>
                            <div className="p-2">
                                <label htmlFor="phone" className="sr-only">
                                Phone
                                </label>
                                <input onChange={handleNewCustomer} value={customerData.phone} id="phone" name="phone" type="phone" autoComplete="phone" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Customer Phone Number" />
                            </div>
                            <div className="p-2">
                                <label htmlFor="address" className="sr-only">
                                Address
                                </label>
                                <input onChange={handleNewCustomer} value={customerData.address} id="address" name="address" type="address" autoComplete="address" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Customer Address" />
                            </div>            
                        </div>


                        <div>
                        <button value="button" class="px-4 py-2 rounded bg-blue-400 text-white hover:bg-blue-700 my-4 w-full" id="whoobe-ibemp">Create Customer</button>                       
                        </div>
                    </form>
                </div>        
            </div>
        </>
    )
}


export default NewCustomer
