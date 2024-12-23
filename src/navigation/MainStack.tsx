import React, {useState, useEffect} from 'react';
import OnboardingStack from './OnboardingStack';

import SplashLoading from '../components/display/SplashLoading';

const MainStack = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return isSplashVisible ? <SplashLoading /> : <OnboardingStack />;
};

export default MainStack;
