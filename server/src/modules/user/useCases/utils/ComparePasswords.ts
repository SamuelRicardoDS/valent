import bcrypt from 'bcryptjs';

const comparePasswords = async (plainPassword: string, hashedPassword: string) => {
  return bcrypt.compare(plainPassword, hashedPassword);
};

export { comparePasswords };