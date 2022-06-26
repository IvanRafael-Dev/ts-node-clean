import { AccountModel } from './../../../../domain/models/account'
import { Collection, MongoClient } from 'mongodb'

export interface MongoAccount {
  _id: string
  name: string
  email: string
  password: string
}

export const mongoHelper = {
  mongoClient: null as MongoClient,
  async connect (uri: string): Promise<void> {
    this.mongoClient = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },
  async disconnect (): Promise<void> {
    await this.mongoClient.close()
  },
  getCollection (name: string): Collection {
    return this.mongoClient.db().collection(name)
  },
  accountMapper: ({ _id, ...account }: MongoAccount): AccountModel => ({
    id: _id,
    ...account
  })
}
