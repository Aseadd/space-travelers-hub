import { render, screen} from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../redux/configureStore";
import Profile from "../components/profile";

describe("Profile", () => {
  test("renders Profile component", () => {
    render(
      <Provider store={store}>
        <Router>
          <Profile />
        </Router>
      </Provider>
    );
    const profile = screen.getByText("My Missions");
    expect(profile).toEqual(expect.anything());
  });
});
