import DEcharts from '../index.vue'
import { render } from '@testing-library/vue'

const barChartProps = {
  responsive: false,
  option: {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  }
}

describe('DEchart test suite', () => {
  it('decharts can be work', async () => {
    expect(DEcharts).toBeTruthy()

    const div = document.createElement('div')
    div.setAttribute('style', 'width: 300px; height: 150px')
    document.body.appendChild(div)
    const wrapper = render(DEcharts, {
      container: div,
      props: barChartProps
    })

    wrapper.debug()
  })
})
