import bcrypt from 'bcrypt';

const plainPassword = "123"; // Password to be hashed
const hashedPassword = await bcrypt.hash(plainPassword, 10);
    console.error(hashedPassword);
