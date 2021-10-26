import React, {useState} from 'react';
import '../App.css';
import '../index.css'
import 'reactjs-popup/dist/index.css';
import { useHistory } from "react-router-dom";
import { LockClosedIcon } from '@heroicons/react/solid'


export default function SignUp ({login, users, setUser }) {

    const history = useHistory();  

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    });

    const handleSignup = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setFormData({
            ...formData, [name]:value
    })}

    const handleSubmit = (e) =>{
        e.preventDefault()
        const newForm = {
            name: formData.name,
            username: formData.username,
            email: formData.email,
            password: formData.password
        }
        
        fetch('/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },
            body: JSON.stringify(newForm)
              })
              .then(res=>res.json())
              .then(data=>{
              if (data.error){
                  alert (data.error)}
              else
                {login(true)
                setUser(data)
                history.push('/Home')}
              })
            
    }



    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                    <h2 className="mt-6 text-center text-xl font-extrabold text-gray-900">💡 New Account Information 💡</h2>
                    </div>
                    <form className="mt-8 space-y-6"  onSubmit={handleSubmit} >
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="name" className="sr-only">
                            Name
                            </label>
                            <input onChange={handleSignup} value={formData.name} id="name" name="name" type="name" autoComplete="name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name"/>
                        </div>  
                        <div>
                            <label htmlFor="username" className="sr-only">
                            Username
                            </label>
                            <input onChange={handleSignup} value={formData.username} id="username" name="username" type="username" autoComplete="username" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">
                            Email
                            </label>
                            <input onChange={handleSignup} value={formData.email} id="email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email" />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                            Password
                            </label>
                            <input onChange={handleSignup} value={formData.password} id="password" name="password" type="password" autoComplete="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                        </div>
                        </div>


                        <div>
                        <button  type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                            </span>
                            Create User
                        </button>
                        </div>
                    </form>
                </div>        
            </div>

    
    
    
        </>

    )
}



