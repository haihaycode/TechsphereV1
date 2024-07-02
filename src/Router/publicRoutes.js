const useComponent = component => () => import(`../views/${component}.vue`);

const publicRoutes = [
    {
      path: '/',
      component: useComponent("homePage"),
      meta: {
        title: "Techsphere - Home Page",
        description: "This is a collection of examples to showcase the features of VeeValidate"
      }
    },
    // other routes...
  ];
  
  export default publicRoutes;