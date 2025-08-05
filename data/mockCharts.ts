// /data/mockCharts.ts
import  {faker}  from '@faker-js/faker'

export const revenueOverTime = Array.from({ length: 12 }, (_, i) => ({
  month: faker.date.month({ abbreviated: true }),
  revenue: faker.number.int({ min: 5000, max: 20000 })
}))

export const conversionsByChannel = [
  { channel: 'Email', conversions: faker.number.int({ min: 100, max: 500 }) },
  { channel: 'Ads', conversions: faker.number.int({ min: 200, max: 800 }) },
  { channel: 'Social', conversions: faker.number.int({ min: 100, max: 700 }) },
  { channel: 'Organic', conversions: faker.number.int({ min: 50, max: 400 }) }
]

export const trafficSources = [
  { source: 'Google', value: faker.number.int({ min: 200, max: 600 }) },
  { source: 'Facebook', value: faker.number.int({ min: 100, max: 500 }) },
  { source: 'Instagram', value: faker.number.int({ min: 100, max: 400 }) },
  { source: 'LinkedIn', value: faker.number.int({ min: 50, max: 300 }) }
]
