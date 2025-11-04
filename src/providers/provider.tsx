import { ReactNode } from 'react';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import CookieProvider from '@/providers/cookie-provider';
import { ThemeProvider } from '@/providers/theme-provider';

export const Provider = async ({ children }: { children: ReactNode }) => {
  const messages = await getMessages();
  return (
    <ThemeProvider
      attribute={'class'}
      defaultTheme={'light'}
      enableSystem
      disableTransitionOnChange
    >
      <NextIntlClientProvider messages={messages}>
        <CookieProvider>{children}</CookieProvider>
      </NextIntlClientProvider>
    </ThemeProvider>
  );
};
