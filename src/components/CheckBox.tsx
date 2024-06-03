import '@/styles/checkBox.css'
import checkBoxes from '@/utils/checkBoxesType'

function CheckBox() {
  return (
    <div id="input-area">
      <h1>都道府県</h1>
      <div id="check-boxes">
        {checkBoxes.map((letter) => (
          <div className="check-box" key={letter.id}>
            <input type="checkbox" />
            <div>{letter.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CheckBox
