import { SignUpController } from '../../presentation/controllers/signup/signup'
import { EmailValidatorAdapter } from './../../utils/email-validator-adapter'
import { DbAddAccount } from './../../data/useCases/add-account/db-add-account'
import { BcryptAdapter } from './../../infra/criptography/bcript-adapter'
import { AccountMongoRepository } from './../../infra/db/mongodb/account-repository/account'

export const makeSignUpController = (): SignUpController => {
  const encryptSalt = 12
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const bcryptAdapter = new BcryptAdapter(encryptSalt)
  const accountMongoRepository = new AccountMongoRepository()
  const dbAddAccount = new DbAddAccount(bcryptAdapter, accountMongoRepository)
  const signUpController = new SignUpController(emailValidatorAdapter, dbAddAccount)
  return signUpController
}
