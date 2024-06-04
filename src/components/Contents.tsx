'use client'

import CheckBox from '@/components/CheckBox'
import Graph from '@/components/Graph'
import '@/styles/contents.css'
import { useEffect, useState } from 'react'

function Contents() {
  const [prefectures, setPrefectures] = useState([])

  async function fetchPrefectures() {
    try {
      const headers = new Headers()
      headers.set('X-API-KEY', process.env.NEXT_PUBLIC_API_KEY as string)
      const response = await fetch(
        'https://opendata.resas-portal.go.jp/api/v1/prefectures',
        {
          headers: headers,
        },
      )

      const data = await response.json()
      setPrefectures(
        data.result.map((item: { prefCode: number; prefName: string }) => ({
          prefCode: item.prefCode,
          prefName: item.prefName,
        })),
      )
    } catch (error) {
      console.error('Error fetching prefectures:', error)
      return []
    }
  }

  useEffect(() => {
    fetchPrefectures()
  }, [])
  return (
    <div id="contents-items">
      <CheckBox prefectures={prefectures} />
      <Graph />
    </div>
  )
}

export default Contents
