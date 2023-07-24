// Material UI
import {metadata as appMetadata} from '@/components'
import MuiWrapper from '@/components/LayoutWrapper'

export const metadata = appMetadata

const RootLayout: React.FC<{children: React.ReactNode}> = ({children}) => (
  <MuiWrapper>
    <html lang='en'>
      <body suppressHydrationWarning>{children}</body>
    </html>
  </MuiWrapper>
)

export default RootLayout
