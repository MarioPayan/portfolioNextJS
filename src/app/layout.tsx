// Material UI
import MuiWrapper from '@/components/MuiWrapper'
import {metadata as appMetadata} from '@/components'

export const metadata = appMetadata

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <MuiWrapper>
      <html lang='en'>
        <body suppressHydrationWarning>{children}</body>
      </html>
    </MuiWrapper>
  )
}
