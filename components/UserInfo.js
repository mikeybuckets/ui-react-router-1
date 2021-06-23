state = {
  users: []
};

addNewUser = () => {
  /**
   *  OfCourse not correct way to insert
   *  new user in user list
   */
  const users = this.state.users;
  users.push({
    userName: 'robin',
    email: 'email@email.com'
  });
  this.setState({ users: users });
};
