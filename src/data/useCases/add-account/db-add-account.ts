import { AddAccountModel, AddAccount } from '../../../domain/useCases/add-account'
import { Encrypter } from '../../protocols/encrypter'
import { AccountModel } from '../../../domain/models/account'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add (accountData: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(accountData.password)
    return await new Promise(resolve => resolve(null))
  }
}
