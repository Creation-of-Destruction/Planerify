'use client';

import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarLogo,
  NavBody,
  NavItems,
} from '@/components/ui/resizable-navbar';
import { Navs } from '@/data/navs';
import { ChevronRightIcon, Github } from 'lucide-react';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';
import { LanguageSelect } from '@/components/language-select';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export const Nav = () => {
  const t = useTranslations('navbar');
  const navItems = Navs(t);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex gap-4 relative  items-center justify-center">
            <a
              href="https://github.com/Creation-of-Destruction"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
            <AnimatedThemeToggler className={'cursor-pointer'} />
            <LanguageSelect />
            <Link href={'/login'} aria-label={'login'} className={'cursor-pointer'}>
              <Button
                aria-label={'login'}
                className={'text-sm/relaxed group transition-all cursor-pointer'}
              >
                {t('login')}
                <ChevronRightIcon className={'group-hover:translate-x-0.5 duration-100'} />
              </Button>
            </Link>
          </div>
        </NavBody>
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex flex-wrap gap-5 relative w-full items-center ">
              <a
                href="https://github.com/Creation-of-Destruction"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </a>
              <AnimatedThemeToggler className={'cursor-pointer'} />
              <LanguageSelect />
              <Link href={'/login'} aria-label={'login'} className={'cursor-pointer w-full'}>
                <Button aria-label={'login'} className={'text-sm/relaxed w-full'}>
                  {t('login')}
                  <ChevronRightIcon />
                </Button>
              </Link>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
};
