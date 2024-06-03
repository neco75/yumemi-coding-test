'use client'
import '@/styles/checkBox.css'
import { useEffect, useState } from 'react'

function CheckBox() {
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
      console.log(data)
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
    <div id="input-area">
      <h1>都道府県</h1>
      <div id="check-boxes">
        {prefectures.map((prefecture: prefecture) => (
          <div className="check-box" key={prefecture.prefCode}>
            <input type="checkbox" />
            <div>{prefecture.prefName}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CheckBox
