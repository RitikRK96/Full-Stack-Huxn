const userCredentials = (req, res, next) => {
  console.log("Username: (Ritik)");
  console.log("Password: (12345)");
  console.log("User is Logged In");
  next();
};

export default userCredentials;
