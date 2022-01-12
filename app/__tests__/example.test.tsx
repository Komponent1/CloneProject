import React from 'react';
import { render } from '@testing-library/react';

import Main from '../srcs/main';

describe('Button', () => {
  test('render', () => {
    render(<Main />)
  })
});
