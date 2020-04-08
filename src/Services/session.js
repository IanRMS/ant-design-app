const Session = {
  isAuthenticated() {
    return !!localStorage.getItem("@token");
  },
  logout() {
    const token = localStorage.getItem("@token");
    localStorage.removeItem("@token");
    return Promise.resolve(token);
  },
};

export default Session;
