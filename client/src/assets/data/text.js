export const spacer_height = '100px'; //Default is 100px

//Register Page params
export const registerBlock = {
  blockTitle: 'Sign Up',
  blockParagraph: 'Sign up here to create an account',
  blockItem: 'fas fa-user-plus icon',
};

export const registerInput = [
  {
    iconClass: 'fas fa-2x fa-user icon color-2-inv',
    type: 'text',
    name: 'name',
    placeholder: 'Enter Your Name',
  },
  {
    iconClass: 'fas fa-2x fa-envelope icon color-2-inv',
    type: 'email',
    name: 'email',
    placeholder: 'Enter email',
  },
  {
    iconClass: 'fa fa-2x fa-key icon color-2-inv',
    type: 'password',
    name: 'password',
    placeholder: 'Enter password',
    minLength: '8',
  },
  {
    iconClass: 'fa fa-2x fa-key icon color-2-inv',
    type: 'password',
    name: 'passwordConfirm',
    placeholder: 'Confirm password',
    minLength: '8',
  },
];

// Login Page params
export const loginBlock = {
  blockTitle: 'Sign In',
  blockParagraph: 'Sign In to access your account',
  blockItem: 'fas fa-user-plus icon',
};

export const loginInput = [
  {
    iconClass: 'fas fa-2x fa-envelope icon color-2-inv',
    type: 'email',
    name: 'email',
    placeholder: 'Enter email',
  },
  {
    iconClass: 'fa fa-2x fa-key icon color-2-inv',
    type: 'password',
    name: 'password',
    placeholder: 'Enter password',
    minLength: '8',
  },
];

// Navbar params color=color-nav color=color-nav-border, hamhamburgr=color-nav-hamburger

export const navbarName = {
  refLink: '/',
  text: 'KPQ Solutions',
  element: 'Link',
};

export const navbarGuestLinks = [
  {
    id: 1,
    element: 'Link',
    WRAPLI: true,
    refLink: '/',
    text: 'Link',
  },
  {
    id: 2,
    element: 'A',
    WRAPLI: true,
    refLink: '/',
    text: 'TestA',
  },
  {
    id: 3,
    element: 'Button',
    WRAPLI: true,
    dataToggle: 'modal',
    dataTarget: '#contactModal',
    text: 'Contact',
  },
  {
    id: 4,
    element: 'Link',
    WRAPLI: true,
    refLink: '/login',
    text: 'Login',
  },
];

export const navbarUserLinks = [
  {
    id: 1,
    element: 'Link',
    refLink: '/my/home',
    text: 'Home',
  },
  {
    id: 2,
    element: 'Button',
    text: 'Logout',
    handler: true,
  },
];
