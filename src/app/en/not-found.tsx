import {LANGUAGES} from '@/app/_data/data'
import NotFound, {metadata as notFoundMetadata} from '@/app/not-found-wip'

export const metadata = notFoundMetadata

const NotFoundEn: React.FC = () => <NotFound language={LANGUAGES.EN} />

export default NotFoundEn
