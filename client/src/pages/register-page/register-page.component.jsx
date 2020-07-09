import React, { Fragment } from 'react';
import Register from '../../components/register/register.component';
import SpacerDiv from '../../blocks/spacer-div/spacer-div.component';
import { spacer_height } from '../../assets/data/text';

import {} from './register-page.styles';

const RegisterPage = () => {
  return (
    <Fragment>
      <SpacerDiv HEIGHT={spacer_height} />
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-6 m-auto'>
            <Register className='color-1' />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RegisterPage;
