import '@/styles/checkBox.css'

function CheckBox({
  prefectures,
}: {
  prefectures: { prefCode: number; prefName: string }[]
}) {
  return (
    <div id="input-area">
      <h1>都道府県</h1>
      <div id="check-boxes">
        {prefectures.map((prefecture) => (
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
