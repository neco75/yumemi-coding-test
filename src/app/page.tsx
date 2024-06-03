import Contents from '@/components/Contents'
import '@/styles/page.css'

function page() {
  return (
    <div id="page">
      <div id="title-area">
        <h1>都道府県別の総人口推移グラフ</h1>
      </div>
      <div id="contents-area">
        <Contents />
      </div>
    </div>
  )
}

export default page
