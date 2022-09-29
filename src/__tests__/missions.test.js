import { render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Missions from '../components/missions';

describe('Missions', () => {
  test('renders Missions component', () => {
    render(
      <Provider store={store}>
        <Router>
          <Missions />
        </Router>
      </Provider>,
    );
    const missions = screen.getByText('Mission');
    expect(missions).toEqual(expect.anything());
  });
});
