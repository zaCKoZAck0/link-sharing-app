'use client'
import * as React from 'react';
import { Input } from '../../../components/input';
import { Button, buttonVariants } from '../../../components/button';
import { cn } from '../../../lib/utils';
import {Photo} from "@/app/create/profile/photo";
import { useUserDetails } from "@/hooks/useUserData";


export default function ProfilePage() {
    const { user, setUser } = useUserDetails();
    return(
        <div className='mb-12'>
            <div className='bg-background mb-5 flex items-center justify-between p-5 rounded-xl'>
                <label className='text-default w-1/2'>
                    Profile Picture
                </label>
                <div className='flex items-center gap-6 w-1/2'>
                <Photo />
                    <div className='text-default text-xs max-w-[215px]'>
                        Image must be below 1024x1024px. Use PNG or JPG format.
                    </div>
                </div>
            </div>
            <div className='bg-background mb-5 flex items-center justify-between p-5 rounded-xl'>
                <div className='w-1/2 flex flex-col gap-6'>
                    <label className='text-default' htmlFor='first-name'>
                        First name*
                    </label>
                    <label className='text-default my-3' htmlFor='last-name'>
                        Last name*
                    </label>
                    <label className='text-default' htmlFor='email'>
                        Email
                    </label>
                </div>
                <div className='w-1/2'>
                    <Input value={user?.firstName} onChange={(e)=>setUser({...user, firstName:e.target.value})} name='first-name' className='w-full' placeholder='e.g. John' />
                    <Input value={user?.lastName} onChange={(e)=>setUser({...user, lastName:e.target.value})} name='last-name' className='w-full my-3' placeholder='e.g. Appleseed' />
                    <Input value={user?.email} onChange={(e)=>setUser({...user, email:e.target.value})} name='email' className='w-full' placeholder='e.g. email@example.com' />
                </div>
            </div>
        </div>
    )
}
