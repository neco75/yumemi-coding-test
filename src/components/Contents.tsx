'use client'

import CheckBox from '@/components/CheckBox'
import Graph from '@/components/Graph'
import '@/styles/contents.css'
import { useEffect, useState } from 'react'

interface Composition {
  prefName: string
  data: { year: number; value: number }[]
}

interface Prefecture {
  prefCode: number
  prefName: string
}

function Contents() {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([])
  const [checkPrefCodes, setCheckPrefCodes] = useState<number[]>([])
  const [composition, setComposition] = useState<Composition[]>([])
  const handleValue = (value: number) => {
    if (!checkPrefCodes.includes(value)) {
      setCheckPrefCodes([...checkPrefCodes, value])
    }
  }

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

  useEffect(() => {
    async function fetchComposition() {
      try {
        const headers = new Headers()
        headers.set('X-API-KEY', process.env.NEXT_PUBLIC_API_KEY as string)
        const response = await fetch(
          'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=' +
            String(checkPrefCodes[checkPrefCodes.length - 1]),
          {
            headers: headers,
          },
        )
        const data = await response.json()
        if (prefectures && prefectures.length > 0) {
          const selectedPrefecture: Prefecture | undefined = prefectures.find(
            (prefecture: Prefecture) =>
              prefecture.prefCode === checkPrefCodes[checkPrefCodes.length - 1],
          )

          if (selectedPrefecture) {
            setComposition([
              ...composition,
              {
                prefName: selectedPrefecture.prefName,
                data: data.result.data[0].data,
              },
            ])
          }
        }
      } catch (error) {
        console.error('Error fetching composition:', error)
        return []
      }
    }

    if (checkPrefCodes.length > 0) {
      fetchComposition()
    }
  }, [checkPrefCodes])

  return (
    <div id="contents-items">
      <CheckBox prefectures={prefectures} handleValue={handleValue} />
      <Graph composition={composition} />
    </div>
  )
}

export default Contents
