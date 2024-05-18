import {NextResponse} from 'next/server'
import data from '@/app/_data/raw_data.json'

export async function GET() {
  return NextResponse.json(data, {status: 200})
}
