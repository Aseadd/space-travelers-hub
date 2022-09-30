import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Navbar from '../components/navbar';

describe('Navbar', () => {
  test('renders Navbar component', () => {
    render(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>,
    );
    const logo = screen.getByText('Space Travelers\' Hub');
    expect(logo).toEqual(expect.anything());
  });
});
