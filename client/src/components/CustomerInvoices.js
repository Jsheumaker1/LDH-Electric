import React, {useState, useEffect} from 'react';
import { useLocation } from "react-router-dom";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { useHistory } from "react-router-dom";
import Customers from "./Customers"
import Account from "./Account"
import Login from "./Login"
import { PlusIcon } from '@heroicons/react/solid'



export default function CustomerInvoices({user, login}){
    
    const [invoiceInfo, setInvoiceInfo] = useState([])
    const location = useLocation();
    const customer = location.state
    const history = useHistory()

    console.log(customer)

    const currentUser = {
        name: user.name,
        }

    const navigation = [
        { name: 'Customers', href: '#Customers', current: true, component:<Customers user={user}/> },
        { name: 'Inventory', href: '#Inventory', current: false },
        { name: 'Outstanding Invoices', href: '#OutstandingInvoices', current: false },
    ]
    const userNavigation = [
        { name: 'Your Account', component: <Account/> },
        { name: 'Sign out', component: <Login/> },
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }


    useEffect(()=>{
        fetch(`/invoices/${customer}`)
            .then(res=>res.json())
            .then(setInvoiceInfo)
        },[])

    const handleUserLogOut = (e) => {
        e.preventDefault();
        fetch('/login', {
        method: "DELETE"  
        })
        login(false)
        };

    //   const searchDisplay = users.filter((user)=>{
    //     return (user.company.company_name.toLowerCase().includes(search.toLowerCase()))
    //   })

    // useEffect(()=>{
    //     fetch(`/invoices/${customer.id}`)
    //     .then(res=>res.json())
    //     .then(setInvoiceInfo)
    // },[])

    return(
        <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                    <div className="h-30 w-8 text-3xl">💡</div>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={'https://www.fbd.ie/media/CreativeContentHub/images/warning-2.png'} alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              {({ active }) => (
                                <a onClick={()=>history.push('/account')}
                                  // href="/account"
                                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                >
                                  Your Profile
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a  onClick={handleUserLogOut}
                                  href="/login"
                                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                >
                                  Sign out
                                </a>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                          {/* <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    component={item.component}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items> */}
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full"/>
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{currentUser.name}</div>
                
                    </div>
                    <button
                      type="button"
                      className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
            <div className="border-t border-gray-200 bg-white shadow overflow-hidden sm:rounded-lg ">
                {/* {setUser.map((user) => { return(                
                    <dr key={user.id}> */}
            <div className="px-4 pt-5 sm:px-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900 bg-white shadow overflow-hidden sm:rounded-lg p-5">Invoices</h3>
            </div>
                <div className="px-4 py-5 sm:px-6 grid-cols-2 place-items-end">
                    <button  type="submit" className="group relative flex justify-center py-2 px-10 border-10 border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span className="inset-y-0 flex items-center pl-3">
                        <PlusIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                        </span>
                        Add Invoice
                    </button>
                </div>
            </div>

            {/* <>
            {invoiceInfo.map((invoice) => (
                <a key={invoice.id}>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{customer.customer_name}</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{customer.address}</dd>
                    </div>
                </a>
            </> */}

        <div className="px-4 pt-5 sm:px-6 p-5">
            <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 ">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase tracking-wider"
                                            >
                                            Invoice
                                            </th>
                                            <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase tracking-wider"
                                            >
                                            Description
                                            </th>
                                            <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase tracking-wider"
                                            >
                                            Grand Total
                                            </th>
                                            <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase tracking-wider"
                                            >
                                            Payment Status
                                            </th>
                                            <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-sm font-medium text-gray-900 uppercase tracking-wider"
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
                                    {invoiceInfo.map((invoice) => (
                                    <tr key={invoice.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <div className="h-10 w-10 rounded-full text-gray-800 ">{invoice.invoice_number}<div/>
                                                </div>                                    
                                            </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-600 font-medium text-left">{invoice.date}</div>
                                            <div className="text-sm text-gray-400 text-left">{invoice.description}</div>
                                        </td>
                                        <td className="text-left px-6 py-4 whitespace-nowrap">
                                            <span className="text-left px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-green-800">
                                            <div className="text-left text-sm text-gray-600">${invoice.grand_total}</div> 
                                            </span>                           
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-left">
                                            <span className="text-left px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                {invoice.payment_status ? "Paid" : "Unpaid"}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-left">
                                            <div className="text-left text-xs text-gray-500 font-semibold">Type: {invoice.payment_type}</div>
                                            <div className="text-left text-xs text-gray-500 font-semibold">Receipt Number: {invoice.payment_number}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                            Edit
                                            </a>                                    
                                        </td> 
                                    </tr>  
                                    ))}     
                                    </tbody>                                                                     
                                </table>                       
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
                
    )
}