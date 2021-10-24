import React, {useState, useEffect} from 'react';
import { useLocation } from "react-router-dom";


export default function CustomerInvoices({}){


    const [invoiceInfo, setInvoiceInfo] = useState([])
    const location = useLocation();
    const customer = location.state


    useEffect(()=>{
        fetch(`/invoices/${customer}`)
            .then(res=>res.json())
            .then(invoiceInfo)
        },[])

    //   const searchDisplay = users.filter((user)=>{
    //     return (user.company.company_name.toLowerCase().includes(search.toLowerCase()))
    //   })

    // useEffect(()=>{
    //     fetch(`/invoices/${customer.id}`)
    //     .then(res=>res.json())
    //     .then(setInvoiceInfo)
    // },[])

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
                                Invoice 
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
                                Grand Total
                                </th>
                                <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                Payment Status
                                </th>
                                <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                Payment Details
                                </th>
                                {/* <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">View Invoices</span>
                                </th> */}
                                <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {invoiceInfo.map((invoice) => { return(
                                <tr key={invoice.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        <img className="h-10 w-10 rounded-full" src={invoice.invoice_number} alt="" />
                                    </div>
                                    {/* <div className="ml-4">
                                        <div className="text-left text-sm font-medium text-gray-900">{jobs.customer}</div>
                                        <div className="text-left text-sm text-gray-500">{jobs.address}</div>
                                    </div> */}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-left text-sm font-medium text-gray-900">{invoice.description}</div>
                                    <div className="text-left text-sm text-gray-500">{invoice.date}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-left text-sm text-gray-900">{invoice.grand_total}</div>
                                </td>
                                <td className="text-left px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    <div className="text-left text-sm text-gray-500">{invoice.payment_status}</div>
                                    </span>
                                </td>
                                {/* <td className="text-left px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.payment_status}</td> */}
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-left text-sm font-medium text-gray-900">{invoice.payment_type}</div>
                                    <div className="text-left text-sm text-gray-500">Receipt: {invoice.payment_number}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                    Edit
                                    </a>
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