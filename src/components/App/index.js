import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadTheme } from '@/actions/app';
import classNames from 'classnames';
import Home from '../Home';
import ThemeToggle from '../ThemeToggle';
import './app.scss';

import Modal from '../Modal';

function App() {
  const dispatch = useDispatch();
  // Load the theme from localStorage when the app initialize
  useEffect(
    () => {
      dispatch(loadTheme());
    },
    [dispatch],
  );

  // Use the state to determine the current theme and apply the class accordingly
  const currentTheme = useSelector((state) => state.app.darkTheme);
  const cssClass = classNames('theme', { 'theme--dark': currentTheme }, { 'theme--light': !currentTheme });

  return (
    <div className={cssClass}>
      <div className="app">
        <Modal />
        <ThemeToggle />
        <Home />
      </div>
    </div>
  );
}

export default App;
