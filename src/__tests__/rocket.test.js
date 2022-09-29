import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Rockets from '../components/rockets';

describe('testing Rockets component', () => {
  test('renders Rockets component', () => {
    render(
      <Provider store={store}>
        <Router>
          <Rockets />
        </Router>
      </Provider>,
    );
    const rockets = screen.getByTestId('rocketTest');

    expect(rockets).toEqual(expect.anything());
  });
});
