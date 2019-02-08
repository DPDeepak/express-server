import UserRepository from '../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt'

export default function seed() {

  const repository = new UserRepository();
  repository.count().then(async (res) => {
    if (res <= 0) {
      repository.create({ name: 'singham', role: 'headTrainer', email: 'singham@up.com'});
    }
  });
}
