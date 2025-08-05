// /data/mockTable.ts
import  {faker } from '@faker-js/faker'

export const tableData = Array.from({ length: 50 }, () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  revenue: faker.finance.amount({min: 1000,max: 10000,dec: 0,symbol: '$'}),  
  status: faker.helpers.arrayElement(['Active', 'Paused', 'Pending']),
  signupDate: faker.date.past().toISOString().split('T')[0]
}))
