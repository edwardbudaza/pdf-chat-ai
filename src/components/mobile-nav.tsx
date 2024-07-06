'use client'

import { ArrowRight, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const MobileNav = ({ isAuth }: { isAuth: boolean }) => {
    const [isOpen, setOpen] = useState<boolean>(false);

    const toggleOpen = () => setOpen((prev) => !prev);

    const pathname = usePathname();

    useEffect(() => {
        if (isOpen) toggleOpen();
    }, [pathname]);

    const closeOnCurrent = (href: string) => {
        if (pathname === href) {
            toggleOpen();
        }
    };

    return (
        <div className="sm:hidden">
            <Menu 
                onClick={toggleOpen}
                className="relative z-50 h-5 w-5 text-zinc-700"
            />
        </div>
    );

};

export default MobileNav;