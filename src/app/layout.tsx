import type { Metadata } from 'next'
import { ABeeZee } from 'next/font/google'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider, createGlobalStyle } from 'styled-components' 
import { StylesAndThemes } from './global.style'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}
`;

const Query = new QueryClient({
  defaultOptions:{
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60,
    },
  }
});


const abeezee = ABeeZee({weight:'400'})

export const metadata: Metadata = {
  title: 'Soares Shopping',
  description: 'The Better Shopping For Your Style',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={abeezee.className}><QueryClientProvider client={Query} contextSharing={true}><ThemeProvider theme={StylesAndThemes}><GlobalStyle/>{children}</ThemeProvider></QueryClientProvider></body>
    </html>
  )
}
