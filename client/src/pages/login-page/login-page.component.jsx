import React, { Fragment } from 'react';
import Login from '../../components/login/login.component';
import SpacerDiv from '../../blocks/spacer-div/spacer-div.component';
import { spacer_height } from '../../assets/data/text';

import {} from './login-page.styles';

const LoginPage = () => {
  return (
    <Fragment>
      <SpacerDiv HEIGHT={spacer_height} />
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-6 m-auto'>
            <Login className='color-1' />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginPage;
