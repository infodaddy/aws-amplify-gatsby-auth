import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

const LoggedInPage1 = () => (
  <Layout>
    <h1>Hi you are now logged in!</h1>
    <p>Welcome to Infodaddy with multi-user authentication powered by <a href="https://amplify.aws">AWS Amplify</a></p>
    <p>Create a new account: <Link to="/app/signup">Sign Up</Link></p>
    <Link to="/app/login">Sign In</Link><br />
    <Link to="/app/home">Home</Link><br />
    <Link to="/app/profile">Your profile</Link>
  </Layout>
)

export default LoggedInPage1
