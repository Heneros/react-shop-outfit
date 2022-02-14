import { config, createSchema }  from '@keystone-next/keystone/schema';
import 'dotenv/config';

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/sick-fits';


const sessionConfig = {
    maxAge: 60  * 60 * 24 * 360,
    secret: process.env.COOKIE_SECRET,
};

export default config({
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

    }),
    ui:{
        isAccessAllowed:() => true
    }

});