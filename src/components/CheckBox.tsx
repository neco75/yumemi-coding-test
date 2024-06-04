import '@/styles/checkBox.css'
import { useState } from 'react'

function CheckBox({
  prefectures,
  handleValue,
}: {
  prefectures: { prefCode: number; prefName: string }[]
  handleValue: (value: number) => void
}) {
  const [checkPrefCodes, setCheckPrefCodes] = useState<number[]>([])

  function handleCheck(e: React.MouseEvent<HTMLInputElement>) {
    const prefCode = Number(e.currentTarget.value)
    if (e.currentTarget.checked) {
      setCheckPrefCodes([...checkPrefCodes, prefCode])
      handleValue(prefCode)
    } else {
      setCheckPrefCodes(checkPrefCodes.filter((code) => code !== prefCode))
    }
  }

  return (
    <div id="input-area">
      <h1>都道府県</h1>
      <div id="check-boxes">
        {prefectures.map((prefecture) => (
          <div className="check-box" key={prefecture.prefCode}>
            <input
              type="checkbox"
              onClick={handleCheck}
              value={prefecture.prefCode}
            />
            <div>{prefecture.prefName}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CheckBox
