// Metadata
import appMetadata from '@/components/Metadata'
// Components
import Agenda from '@/components/Agenda'

const pageTitle = `${appMetadata.creator} | Agenda`

export const metadata = {
  ...appMetadata,
  title: pageTitle,
  openGraph: {...appMetadata.openGraph, title: pageTitle},
  twitter: {...appMetadata.twitter, title: pageTitle},
}

const AgendaPage: React.FC = () => <Agenda />

export default AgendaPage
