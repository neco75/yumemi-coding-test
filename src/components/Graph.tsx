'use client'

import '@/styles/graph.css'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

function Graph({ composition }: { composition: Composition[] }) {
  const series = composition.map((item) => ({
    type: 'line',
    name: item.prefName,
    data: item.data.map((data) => data.value),
  }))
  let categories: number[] = []
  if (composition[0]) {
    categories = composition[0].data.map((data) => data.year)
  }

  const options = {
    title: {
      text: '人口構成',
    },
    xAxis: {
      title: {
        text: '年度',
      },
      categories: categories,
    },
    yAxis: {
      title: {
        text: '人口数',
      },
    },
    series: series,
  }

  return (
    <div id="graph-area">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default Graph
