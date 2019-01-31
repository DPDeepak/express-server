import UserRepository from '../repositories/user/UserRepository'
export default function seed() {
    console.log('Inside Seed');
    
    const repository = new UserRepository()
    repository.create({ id: '1', name: 'saluja'})
}