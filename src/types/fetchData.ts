type prefecture = {
  prefCode: number
  prefName: string
}

type Composition = {
  prefName: string
  data: { year: number; value: number }[]
}
