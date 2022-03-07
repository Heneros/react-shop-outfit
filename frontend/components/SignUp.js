import Form from './styles/Form';
import useForm from '../lib/useForm';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { CURRENT_USER_QUERY} from './User';
import Error from './ErrorMessage';

const SIGNUP_MUTATION = gql`
   mutation SIGNiN_MUTATION(
       $email: String!
       $name: String!
       $password: String!
   ){
       createUser(data: {email: $email, name: $name, password: $password}){
            email
            name
            password
       }
   }
`;
export default function SignUp(){
const { inputs, handleChange, resetForm} = useForm({
    email: '',
    name: '',
    password: ''
});

const [signup, { data,  loading, error}] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
    // refetchQueries: [{ query: CURRENT_USER_QUERY}]
})

async function handleSubmit(e){
  e.preventDefault();
  await signup();
  resetForm();
}

// const error = data?.authenticateUserWithPassword.__typename === "UserAuthenticationWithPasswordFailure" ? data?.authenticateUserWithPassword : undefined;

if(data?.createUser){
    return;
}

return( <Form method="POST" onSubmit={handleSubmit}>
       <h2>SignUp for Account</h2>
      <Error error={error} />
       <fieldset>
           {data?.createUser && (
               <p>Signed up with {data.createUser.email} - go head and Sign In!</p>
           )}
       <label htmlFor='name'>
            name
           <input
           type="text"
           name="name"
           placeholder="Your Name"
           autoComplete="name"
           value={inputs.name}
           onChange={handleChange}
           />
        </label>
        <label htmlFor='email'>
            Email
           <input
           type="email"
           name="email"
           placeholder="Your Email Address"
           autoComplete="email"
           value={inputs.email}
           onChange={handleChange}
           />
        </label>
        <label htmlFor='password'>
            Password
           <input
           type="password"
           name="password"
           placeholder="Password"
           autoComplete="password"
           value={inputs.password}
           onChange={handleChange}
           />
        </label>
        <button type="submit">Sign In!</button>
       </fieldset>
    </Form>)
}