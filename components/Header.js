import React from 'react'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

export default function Header() {
    const router = useRouter();
    const searchInputRef = useRef();

    const search = e =>  {
        e.preventDefault();

        const term = searchInputRef.current.value;

        if(!term) return;

        router.push(`/search?term=${term}`)
    }

  return (
    <header className='sticky top-0 bg-white'>
        <div className='flex w-full p-6 items-center'>
        <img 
        src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
        loading='lazy'
        className='cursor-pointer h-10'
        onClick={() => router.push('/')}
        />
        <form className='flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
            <input ref={searchInputRef} className='flex-grow w-full focus:outline-none' type="text" defaultValue={router.query.term}></input>
            <XIcon className='h-7 sm:mr-3 text-gray-500 cursor-pointer transistion duration-100 transform hover:scale-125'
            onClick={() => (searchInputRef.current.value = "")} />
            <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300'/>
            <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex'/>
            <button hidden type='submit' onClick={search}>Search</button>
        </form>
        <Avatar className='ml-auto' url={'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'} />
        </div>
        {/* HeaderOptions */}
        <HeaderOptions />
    </header>
  )
}
