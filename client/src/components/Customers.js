import React, {useState, useEffect} from 'react';
// import { Redirect } from 'react-router-dom';
// import CustomerInvoices from "./CustomerInvoices"
import { useHistory } from "react-router-dom";
import { LockClosedIcon } from '@heroicons/react/solid'
import NewCustomer from "./NewCustomer"



export default function Customers(setUser){

    const history = useHistory()
    const [customerInfo, setCustomerInfo] = useState([])


    useEffect(()=>{
        fetch('/customers')
        .then(res=>res.json())
        .then(setCustomerInfo)
    },[])

    return(
        <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                            <tr>
                                <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                Customer Information
                                </th>
                                <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                Description
                                </th>
                                <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                Balance
                                </th>
                                {/* <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                Grand Total
                                </th> */}
                                <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">View Invoices</span>
                                </th>
                                <th scope="col" className="relative px-6 py-3">
                                    <button onClick={()=>history.push('/newcustomer')} value="button" class="px-4 py-2 rounded bg-blue-400 text-white hover:bg-blue-700 my-4 w-full" id="whoobe-ibemp">Add Customer</button>
                                <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {customerInfo.map((customer) => { return(
                                <tr key={customer.id}>
                                {/* <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-left text-sm font-medium text-gray-900">{jobs.customer}</div>
                                        <div className="text-left text-sm text-gray-500">{jobs.address}</div>
                                    </div>
                                    </div>
                                </td> */}
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-left text-sm font-medium text-gray-900">{customer.customer_name}</div>
                                    <div className="text-left text-sm text-gray-500">{customer.address}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-left text-sm text-gray-900">{customer.phone}</div>
                                </td>
                                <td className="text-left px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    <div className="text-left text-sm text-gray-500">{customer.balance}</div>
                                    </span>
                                </td>
                                {/* <td className="text-left px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.grand_total}</td> */}
                                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                    <button href="#" className="text-indigo-600 hover:text-indigo-900">
                                    Edit
                                    </button>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                    <button  onClick={()=>history.push({pathname: `/customerinvoices/${customer.id}`,
                                                                        state: customer.id
                                                                        })}  className="text-indigo-600 hover:text-indigo-900">
                                    View Invoices
                                    </button>
                                </td>
                                </tr>
                                )})}
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
    )
}