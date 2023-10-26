// Metadata
import appMetadata from '@/components/Metadata'

const pageTitle = `${appMetadata.creator} | CV`

export const metadata = {
  ...appMetadata,
  title: pageTitle,
  openGraph: {...appMetadata.openGraph, title: pageTitle},
  twitter: {...appMetadata.twitter, title: pageTitle},
}

const cvURL = '/files/CV.pdf'

const AgendaPage: React.FC = () => (
  <div style={{height: '100vh'}}>
    <object data={cvURL} type='application/pdf' width='100%' height='100%' />
  </div>
)

export default AgendaPage
