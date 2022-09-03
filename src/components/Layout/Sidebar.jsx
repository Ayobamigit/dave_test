import React from 'react'
import './layout.scss'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import {ReactComponent as Home} from '../../assets/home.svg'
import {ReactComponent as Dashboard} from '../../assets/dashboard.svg'
import {ReactComponent as Projects} from '../../assets/projects.svg'
import {ReactComponent as Tasks} from '../../assets/tasks.svg'
import {ReactComponent as Reporting} from '../../assets/reporting.svg'
import {ReactComponent as Users} from '../../assets/users.svg'
import {ReactComponent as Settings} from '../../assets/settings.svg'
import {ReactComponent as Support} from '../../assets/support.svg'
import SearchBar from '../Searchbar/SearchBar'
import ActionBar from '../ActionBar/ActionBar'

const Sidebar = () => {
  return (
    <div className='h-screen bg-white font-inter w-[280px] border-solid border-r-[1px]'>
        <div className='p-3'>
            <div className='py-4 px-3'>
                <Logo />
            </div>

            {/* <SearchBar /> */}

            <div className='mt-4'>
                <ul className='block list-none cursor-pointer mb-5 px-3'>
                    <li className='text-base text-default font-medium flex items-center'>
                        <Home/>
                        <span className='ml-3 mt-2'>Home</span>
                    </li>
                </ul>  

                <ul className='block list-none cursor-pointer mb-5 px-3'>
                    <li className='text-base text-default font-medium flex items-center justify-between'>
                        <div className='flex items-center'>
                            <Dashboard/>
                            <span className='ml-3 mt-1'>Dashboard</span>
                        </div>
                        
                        <div className='text-sm bg-light-purple rounded-2xl py-0.5 px-2.5 '>
                            10
                        </div>
                    </li>
                </ul> 

                <ul className='block list-none cursor-pointer mb-5 px-3'>
                    <li className='text-base text-default font-medium flex items-center'>
                        <Projects/>
                        <span className='ml-3 mt-1'>Projects</span>
                    </li>
                </ul> 

                <ul className='block list-none cursor-pointer mb-5 px-3'>
                    <li className='text-base text-default font-medium flex items-center'>
                        <Tasks/>
                        <span className='ml-3 mt-1'>Tasks</span>
                    </li>
                </ul> 

                <ul className='block list-none cursor-pointer mb-5 px-3'>
                    <li className='text-base text-default font-medium flex items-center'>
                        <Reporting/>
                        <span className='ml-3 mt-1'>Reporting</span>
                    </li>
                </ul>  

                <ul className='block list-none cursor-pointer mb-5 px-3'>
                    <li className='text-base text-default font-medium flex items-center'>
                        <Users/>
                        <span className='ml-3 mt-1'>Users</span>
                    </li>
                </ul> 
            </div>

            <div className='mt-10'>
                <ul className='block list-none cursor-pointer mb-5 px-3'>
                    <li className='text-base text-default font-medium flex items-center'>
                        <Support/>
                        <span className='ml-3 mt-1'>Support</span>
                    </li>
                </ul> 

                <ul className='block list-none cursor-pointer mb-5 bg-grey rounded-md px-3 py-2'>
                    <li className='text-base text-black font-medium flex items-center'>
                        <Settings/>
                        <span className='ml-3 mt-1'>Settings</span>
                    </li>
                </ul> 
            </div>

            <ActionBar />
        </div>
    </div>
  )
}

export default Sidebar