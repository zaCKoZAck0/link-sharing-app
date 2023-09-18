'use client'
import * as React from 'react';
import { Button, buttonVariants } from '@/components/button';
import LinkIcon from '@/svg/LinkIcon';
import ProfileDetailsIcon from '@/svg/ProfileDetailsIcon';
import LogoIcon from '@/svg/LogoIcon';
import TextIcon from '@/svg/TextIcon';
import { PhoneBox } from '@/app/create/Phone';
import { UserDetailsProvider, useUserDetails } from '@/hooks/useUserData';
import { saveLocal } from '@/lib/saveLocal';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const linkPath = window.location.pathname.includes('links');
  const { user } = useUserDetails();
  const [newUser, setNewUser] = React.useState(user)

  function onClick() {
    // Save the user data to local storage when the "Save" button is clicked
    saveLocal('user', JSON.stringify(user));
  }

  return (
    <div className="min-h-screen relative">
      <div className="p-6 z-50 fixed top-0 bg-background w-full">
        <div className="flex items-center justify-between p-4 bg-white">
          <div className="flex gap-2 items-center justify-center">
            <LogoIcon />
            <TextIcon />
          </div>
          <div className="flex gap-1">
            <a
              href="/create/links"
              className={buttonVariants({
                variant: `${linkPath ? 'activeGhost' : 'ghost'}`,
              })}
            >
              <LinkIcon />
              Links
            </a>
            <a
              href="/create/profile"
              className={buttonVariants({
                variant: `${!linkPath ? 'activeGhost' : 'ghost'}`,
              })}
            >
              <ProfileDetailsIcon />
              Profile Details
            </a>
          </div>
          <Button variant="secondary">Preview</Button>
        </div>
      </div>
      <div className="flex pt-[120px] pb-6 relative">
        <PhoneBox />
        <div className="bg-white w-full h-full mr-6">
          <div className="p-10 pb-0 h-full flex flex-col relative justify-between">
            {children}
            <div className="flex justify-end px-10 pb-10 z-50 sticky bottom-0 bg-white mt-10 py-6 border-t-idle border-t">
              <Button className="py-[11px] px-[27px]" onClick={() => onClick()}>
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
