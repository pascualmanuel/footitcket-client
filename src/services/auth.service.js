import axios from "axios";

// class AuthService {
//   constructor() {
//     this.app = axios.create({
//       baseURL: `${process.env.REACT_APP_BASE_URL}/auth`,
//       withCredentials: true,
//     });
//   }
class AuthService {
  constructor() {
    this.app = axios.create({
      baseURL: "https://footicket-server.onrender.com/auth",
      withCredentials: true,
    });
  }
  signup = (username, password, email, team_id) =>
    this.app.post("/signup", { username, password, email, team_id });
  login = (username, password) =>
    this.app.post("/login", { username, password });
  logout = () => this.app.get("/logout");
  isloggedin = () => this.app.get("/isloggedin");
}

export default AuthService;
