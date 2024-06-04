'use client'

import '@/styles/graph.css'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

let series: Highcharts.SeriesOptionsType[] = [
  //ダミーデータ
  {
    type: 'line',
    name: '東京都',
    data: [12622, 12693, 12714, 12840, 13159, 13515, 13724],
  },
  {
    type: 'line',
    name: '神奈川県',
    data: [6936, 7115, 7259, 7358, 9126, 9126, 9126],
  },
  {
    type: 'line',
    name: '大阪府',
    data: [8607, 8817, 8865, 8817, 8865, 8817, 8865],
  },
  {
    type: 'line',
    name: '愛知県',
    data: [7015, 7255, 7411, 7483, 7552, 7614, 7674],
  },
  {
    type: 'line',
    name: '福岡県',
    data: [4780, 4916, 5023, 5100, 5161, 5221, 5279],
  },
]
let categories: number[] = [1990, 1995, 2000, 2005, 2010, 2015, 2020]

function Graph({ checkPrefCodes }: { checkPrefCodes: number[] }) {
  const options = {
    title: {
      text: '総人口推移',
    },
    xAxis: {
      title: {
        text: '年度',
      },
      categories: categories,
    },
    yAxis: {
      title: {
        text: '人口',
      },
    },
    series:
      series.length === 0
        ? [{ type: 'line', name: '都道府県名', data: [] }]
        : series,
  }

  return (
    <div id="graph-area">
      <HighchartsReact highcharts={Highcharts} options={options} />
      <div>{checkPrefCodes}</div>
    </div>
  )
}

export default Graph
