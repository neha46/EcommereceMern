//bcrypt is used to handle password security
import bcrypt from 'bcrypt'

//to hash the password-
export const hashPassword=async(password)=>{
    try {
        const saltRounds=10;
        const hashedPassword= await bcrypt.hash(password,saltRounds)
        return hashedPassword
    } catch (error) {
        console.log(error);
    }

}

// to compare plain and hashed password -- for login
export const comparePassword=async(password,hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword)
}