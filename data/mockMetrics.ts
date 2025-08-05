// /data/mockMetrics.ts
import  {faker}  from '@faker-js/faker'

export const metrics = [
  {
    title: 'Revenue',
    value: faker.finance.amount({ min: 10000, max: 50000, dec: 0 }),
    change: faker.number.int({ min: -10, max: 20 }),
    icon: '💰'
  },
  {
    title: 'Users',
    value: faker.number.int({ min: 1000, max: 10000 }),
    change: faker.number.int({ min: -5, max: 15 }),
    icon: '👥'
  },
  {
    title: 'Conversions',
    value: faker.number.int({ min: 100, max: 1000 }),
    change: faker.number.int({ min: -5, max: 25 }),
    icon: '🛒'
  },
  {
    title: 'Growth',
    value: faker.number.int({ min: 1, max: 100 }),
    change: faker.number.int({ min: -5, max: 15 }),
    icon: '📈'
  }
]
