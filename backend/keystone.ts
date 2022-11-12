import { createAuth } from '@keystone-next/auth';
import { config, createSchema }  from '@keystone-next/keystone/schema';
import { User } from './schemas/User';
import { Product } from './schemas/Product';
import { CartItem } from './schemas/CartItem';
import { OrderItem } from './schemas/OrderItem';
import { Order } from './schemas/Order';
import { Role } from './schemas/Role';

import 'dotenv/config';


import {withItemData, statelessSessions } from '@keystone-next/keystone/session';
import { ProductImage } from './schemas/ProductImage';
import { insertSeedData } from './seed-data';
import { sendPasswordResetEmail } from './lib/mail';
import { extendGraphqlSchema } from './mutations';
import { permissionsList } from './schemas/fields';

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/sick-fits';



const sessionConfig = {
    maxAge: 60  * 60 * 24 * 360,
    secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
    listKey: 'User',
    identityField: 'email',
    secretField: 'password',
    initFirstItem: {
        fields: ['name', 'email', 'password']
    },
    passwordResetLink:{
      async sendToken(args){
        console.log(args);
        await sendPasswordResetEmail(args.token, args.identity);
      },
    },
});

export default withAuth(config({
   //@ts-ignore
   server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
    db: {
        adapter: 'mongoose',
        url: databaseURL,
        async onConnect(keystone) {
          console.log('Connected to the database!');
          if (process.argv.includes('--seed-data')) {
            await insertSeedData(keystone);
          }
        },
      },
    lists: createSchema({
        User,
        Product,
        ProductImage,
        CartItem,
        OrderItem,
        Order,
        Role
    }),
    extendGraphqlSchema,
    ui:{
        isAccessAllowed:({ session }) => 
             !!session?.data,
    },
    session: withItemData(statelessSessions(sessionConfig), {
        secret: 'asdsad',
        User: `id name email {${permissionsList.join(' ')} } `,
       
      }),
})
);







