import UserRepository from '../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt'

export default async function seed() {

  const repository = new UserRepository();
  const res = await repository.count();
  if (res <= 0) {
    await repository.create({ name: 'singham', role: 'headTrainer', email: 'singham@up.com' });
  }
}