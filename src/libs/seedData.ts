import UserRepository from '../repositories/user/UserRepository';
export default function seed() {
  console.log('Inside Seed');

  const repository = new UserRepository();
  repository.count().then((res) => {
    console.log(res);

    if (res === 0) {
      console.log('user count is', res);
      repository.create({ name: 'gabbar', role: 'head_trainer', email: 'gabbar.head@gmail.com'});

    }
  });

 // repository.create({  name: 'gabbar' })
  //    repository.remove({name:'thakur'})
  // repository.update('thakur','jay')
  // repository.read('-------------------WRITE ID HERE----------')
}
