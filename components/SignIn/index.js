import React from 'react';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text
} from './SigninElements';

class SignIn extends React.Component {
  render() {
    return (
      <>
        <Container>
          <FormWrap>
            <Icon to="/">phpchecker.com</Icon>
            <FormContent>
              <Form action="#">
                <FormH1>Please provide FTP credentials</FormH1>
                <FormLabel htmlFor="for">Username</FormLabel>
                <FormInput type="text" name required />
                <FormLabel htmlFor="for">Password</FormLabel>
                <FormInput type="password" name required />
                <FormButton type="submit">Continue</FormButton>
                <Text>Where can I find this?</Text>
              </Form>
            </FormContent>
          </FormWrap>
        </Container>
      </>
  );
};

export default SignIn;
