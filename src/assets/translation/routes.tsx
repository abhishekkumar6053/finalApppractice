const routes = {
  root: {
    Name: 'Root',
    onboarding: {
      Name: 'Onboarding',
      login: {
        Name: 'Login',
      },
      child:{
        Name: 'Child',
      },
      getprop:{
        Name: 'Getprop',
      }
    },
    dashboard: {
      Name: 'Dashboard',
      tabs: {
        Name: 'DashboardTabs',
        home: {
          Name: 'HomeTab',
        },
        post: {
          Name: 'PostTab',
        },
        setting: {
          Name: 'SettingTab',
        },
        user: {
          Name: 'UserTab',
        },
      },
    },
  },
};
export default routes;
