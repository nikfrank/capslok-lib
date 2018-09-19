import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ResponsiveNav from '../lib/ResponsiveNav';

const Button = ()=> <button/>;

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));


storiesOf('ResponsiveNav', module)
  .add('r nav', ()=> (
    <ResponsiveNav navItems={['Home', 'Contact']}
                   toggleMenu={(()=>0)}
                   menuOpen={true}
                   onClick={(()=>0)} />
  ) );
