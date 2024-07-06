import Link from "next/link";
import { auth, currentUser } from "@clerk/nextjs/server";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

import { Button, buttonVariants } from './ui/button';
import MaxWidthWrapper from "./max-width-wrapper";
import { ArrowRight } from 'lucide-react';
import UserAccountNav from './user-account-nav';
import MobileNav from './mobile-nav';

const Navbar = async () => {
    const { userId } = auth();
    const user = userId ? await currentUser() : null;

    return (
        <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link
                        href="/"
                        className="flex z-40 font-semibold"
                    >
                        <span>pdfai.</span>
                    </Link>

                    <MobileNav isAuth={!!user} />

                    <div className='hidden items-center space-x-4 sm:flex'>
                        {!user ? (
                        <>
                            <Link
                            href='/pricing'
                            className={buttonVariants({
                                variant: 'ghost',
                                size: 'sm',
                            })}
                            >
                            Pricing
                            </Link>
                            <SignInButton mode="modal">
                                <Button variant="ghost" size="sm">
                                    Sign in
                                </Button>
                            </SignInButton>
                            <SignUpButton mode="modal">
                                <Button size="sm">
                                    Get started{' '}
                                <ArrowRight className='ml-1.5 h-5 w-5' />
                                </Button>
                            </SignUpButton>
                        </>
                        ) : (
                        <>
                            <Link
                            href='/dashboard'
                            className={buttonVariants({
                                variant: 'ghost',
                                size: 'sm',
                            })}
                            >
                            Dashboard
                            </Link>
                            <UserButton
                                afterSignOutUrl='/'
                            />
                        </>
                        )}
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    );
};

export default Navbar;