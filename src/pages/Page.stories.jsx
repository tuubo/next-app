/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
import React from 'react';

import { Page } from './Page';
import * as HeaderStories from '../components/Header/Header.stories';

export default {
  title: 'Example/Page',
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
