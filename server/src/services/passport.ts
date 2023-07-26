import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { PrismaUserRepository } from '../modules/user/repositories/infra/prisma/PrismaUserRepository';
import { comparePasswords } from '../modules/user/useCases/utils/ComparePasswords';

const prismaUserRepository = new PrismaUserRepository();

passport.use(
  new LocalStrategy(async (email, password, done) => {
    try{
      const user = await prismaUserRepository.findByEmail(email);

      if(!user){
        return done(null, false, { message: 'Incorrect email.' });
      }

      if(!comparePasswords(password, user.password)){
        return done(null, false, { message: 'Incorrect password.' });
      }

      return done(null, user);

    } catch(error){
      return done(error);
    }
  })
)

export { passport };