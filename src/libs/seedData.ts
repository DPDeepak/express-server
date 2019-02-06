import UserRepository from '../repositories/user/UserRepository';
export default function seed() {

  const repository = new UserRepository();
  repository.count().then((res) => {
    if (res <= 0) {
      console.log('user count is', res);
      repository.create({ name: 'singham', role: 'headTrainer', email: 'singham@up.com'});
    }
  });

  // repository.create({  name: 'gabbar' })
  //    repository.remove({name:'thakur'})
  // repository.update('thakur','jay')
  // repository.read('-------------------WRITE ID HERE----------')
}
