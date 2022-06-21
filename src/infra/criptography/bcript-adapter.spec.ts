import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcript-adapter'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return await new Promise(resolve => resolve('any_hash'))
  }
}))

interface SutTypes {
  sut: BcryptAdapter
  salt: number
}

const makeSut = (salt: number): SutTypes => {
  const sut = new BcryptAdapter(salt)
  return {
    sut,
    salt
  }
}

describe('BcryptAdapter', () => {
  it('should call bcrypt with correct values', async () => {
    const { sut, salt } = makeSut(12)
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    await sut.encrypt('any_value')
    expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
  })

  it('should return a hash on success', async () => {
    const { sut } = makeSut(12)
    const hash = await sut.encrypt('any_value')
    expect(hash).toBe('any_hash')
  })
})
