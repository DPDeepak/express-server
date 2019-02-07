import UserRepository from '../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt'

export default function seed() {

  const repository = new UserRepository();
  repository.count().then(async (res) => {
    if (res <= 0) {
<<<<<<< HEAD
      const salt = 10;
      const ePass = await bcrypt.hash(process.env.PASSWORD, salt)
      repository.create({ name: 'singham', role: 'headTrainer', email: 'singham@gmail.com', password: ePass, });
=======
      repository.create({ name: 'singham', role: 'headTrainer', email: 'singham@up.com'});
>>>>>>> develop
    }
  });
}
