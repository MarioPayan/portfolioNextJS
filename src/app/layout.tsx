// Analytics
import {Analytics} from '@vercel/analytics/react'
// Metadata
import appMetadata, {viewport as appViewport} from '@/components/Metadata'
// Wrapper
import LayoutWrapper from '@/components/LayoutWrapper'

export const metadata = appMetadata
export const viewport = appViewport

const RootLayout: React.FC<{children: React.ReactNode}> = ({children}) => (
  <LayoutWrapper>
    <html lang='en'>
      <body suppressHydrationWarning>{children}</body>
      <Analytics />
    </html>
  </LayoutWrapper>
)

export default RootLayout
