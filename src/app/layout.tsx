// Analytics
import {Analytics} from '@vercel/analytics/react'
// Metadata
import appMetadata from '@/components/Metadata'
// Wrapper
import LayoutWrapper from '@/components/LayoutWrapper'

export const metadata = appMetadata

const RootLayout: React.FC<{children: React.ReactNode}> = ({children}) => (
  <LayoutWrapper>
    <html lang='en'>
      <body suppressHydrationWarning>{children}</body>
      <Analytics />
    </html>
  </LayoutWrapper>
)

export default RootLayout
