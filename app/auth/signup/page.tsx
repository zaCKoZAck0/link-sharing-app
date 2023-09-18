import * as React from 'react';
import { Input } from '@/components/input';
import { Button, buttonVariants } from '@/components/button';
import { cn } from '@/lib/utils';
import EnvelopeIcon from "@/svg/EnvelopeIcon";
import LockIcon from "@/svg/LockIcon";

export default function SignUpPage() {
    return(
        <div className='w-full bg-white p-10'>
                <h2 className=' text-heading font-bold text-2xl mb-2'>
                    Create account
                </h2>
                <h3 className='m-0 p-0 mb-10 text-default'>
                    Let’s get you started sharing your links!
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
                        Create Password
                    </label>
                        <Input
                        className='mb-6'
                        placeholder='At least 8 characters'
                        name='email' >
                            <LockIcon />
                        </Input>
                    <label htmlFor='email' className='text-xs'>
                        Confirm Password
                    </label>
                        <Input
                        className='mb-6'
                        placeholder='At least 8 characters'
                        name='email' >
                            <LockIcon />
                        </Input>
                    <div className='text-xs text-placeholder mb-6'>Password must contain at least 8 characters</div>
                    <Button className='w-full'>Create new account</Button>
                    <div className='flex justify-center items-center mt-6'>
                        Already have an account?
                        <a className={cn(buttonVariants({variant:"link"}), 'px-1')} href='/auth/login'>Login</a>
                    </div>
                </div>
            </div>
    )
}

