import { createAuth } from '@keystone-next/auth';
import { User } from './schemas/User';
import { config, createSchema }  from '@keystone-next/keystone/schema';
import 'dotenv/config';
import {withItemData, statelessSessions } from '@keystone-next/keystone/session';

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/sick-fits';


//Rustam  yes123da
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
    }
});

export default withAuth(config({
   //@ts-ignore
    server: {
        cors:{
            origin: [process.env.FRONTED_URL],
            credentials: true
        },
    },
    db: {
      adapter: 'mongoose',
      url: databaseURL,
    },
    lists: createSchema({
        User
    }),
    ui:{
        isAccessAllowed:({ session }) => {
            console.log(session);
            return !!session?.data;
        },
    },
    session: withItemData(statelessSessions(sessionConfig), {
        // GraphQL Query
        secret: 'asdsad',
        User: 'id name email',
       
      }),
})
);







