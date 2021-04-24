import bcrypt from 'bcryptjs'

const users = [
    {
        name:'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name:'Princi Gupta',
        email: 'princi@example.com',
        password: bcrypt.hashSync('123456',10),
     
    },
    {
        name:'Priya Gupta',
        email: 'priya@example.com',
        password: bcrypt.hashSync('123456',10),
      
    }
    
]

export default users