import * as React from 'react';
import { Input } from '@/components/input';
import { Button, buttonVariants } from '@/components/button';
import { cn } from '@/lib/utils';
import EnvelopeIcon from "@/svg/EnvelopeIcon";
import LockIcon from "@/svg/LockIcon";

export default function LoginPage() {
    return(
        
            <div className='w-full bg-white p-10'>
                <h2 className=' text-heading font-bold text-2xl mb-2'>
                    Login
                </h2>
                <h3 className='m-0 p-0 mb-10 text-default'>
                    Add your details below to get back into the app.
                </h3>
                <div>
                    <label htmlFor='email' className='text-xs'>
                        Email Address
                    </label>
                        <Input
                        className='mb-6'
                        placeholder='e.g. alex@email.com'
                        name='email' >
                            <EnvelopeIcon />
                        </Input>
                    <label htmlFor='email' className='text-xs'>
                        Password
                    </label>
                        <Input
                        className='mb-6'
                        placeholder='Enter your password'
                        name='email' >
                            <LockIcon />
                        </Input>
                    <Button className='w-full'>Login</Button>
                    <div className='flex justify-center items-center mt-6'>
                        Don’t have an account?
                        <a className={cn(buttonVariants({variant:"link"}), 'px-1')} href='/auth/signup'>Create Account</a>
                    </div>
                </div>
            </div>
    )
}

