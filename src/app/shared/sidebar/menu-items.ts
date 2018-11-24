import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Panel de Control',
    icon: '',
    class: 'nav-small-cap',
    label: '',
    labelClass: '',
    role: 'Staff',
    extralink: true,
    submenu: []
  },
  {
    path: '/dashboard/dashboard',
    title: 'Dashboards',
    icon: 'mdi mdi-gauge',
    class: 'has-arrow',
    label: '',
    role: 'Staff',
    labelClass: '',
    extralink: false,
    submenu: [
      // { path: '/dashboard/dashboard2', title: 'Clásico', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      // { path: '/dashboard/dashboard2', title: 'Classic', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      // { path: '/dashboard/dashboard3', title: 'Analytical', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] }
    ]
  },
  {
    path: '/apps/cliente',
    title: 'Clientes',
    icon: 'mdi mdi-account',
    class: 'has-arrow',
    label: '',
    role: 'Staff',
    labelClass: 'label label-rouded label-themecolor pull-right',
    extralink: false,
    submenu: [
      // { path: '/apps/cliente', title: 'Mailbox', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      // { path: '/apps/fullcalendar', title: 'Calendar', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      // { path: '/apps/taskboard', title: 'Taskboard', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] }
    ]
  },
  // {
  //   path: '',
  //   title: 'UI Components',
  //   icon: '',
  //   class: 'nav-small-cap',
  //   label: '',
  //   labelClass: '',
  //   extralink: true,
  //   submenu: []
  // },
  {
    path: '/apps/plane',
    title: 'Planes y Eventos',
    icon: 'mdi mdi-bullseye',
    class: 'has-arrow',
    label: '',
    labelClass: '',
    role: 'Staff',
    extralink: false,
    submenu: [
      // { path: '/component/accordion', title: 'Accordion', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      // { path: '/component/alert', title: 'Alert', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      // { path: '/component/carousel', title: 'Carousel', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      // { path: '/component/dropdown', title: 'Dropdown', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      // { path: '/component/modal', title: 'Modal', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      // { path: '/component/pagination', title: 'Pagination', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      // // tslint:disable-next-line:max-line-length
      // { path: '/component/poptool', title: 'Popover & Tooltip', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      // { path: '/component/progressbar', title: 'Progressbar', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      // { path: '/component/rating', title: 'Ratings', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      // { path: '/component/tabs', title: 'Tabs', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      // { path: '/component/timepicker', title: 'Timepicker', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      // { path: '/component/buttons', title: 'Button', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      // { path: '/component/cards', title: 'Card', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] }
    ]
  },
  {
    path: '/apps/loteria',
    title: 'Loteria',
    icon: 'mdi mdi-numeric',
    class: 'has-arrow',
    label: '',
    labelClass: '',
    role: 'Staff',
    extralink: false,
    submenu: [
      // { path: '/extra-component/toastr', title: 'Toster', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      // // tslint:disable-next-line:max-line-length
      // { path: '/extra-component/upload', title: 'File Upload', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      // { path: '/extra-component/editor', title: 'Editor', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      // // tslint:disable-next-line:max-line-length
      // { path: '/extra-component/dragndrop', title: 'Dragndrop', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] }
    ]
  },
  // {
  //   path: '',
  //   title: 'Forms & Tables',
  //   icon: '',
  //   class: 'nav-small-cap',
  //   label: '',
  //   labelClass: '',
  //   extralink: true,
  //   submenu: []
  // },
  {
    path: '/apps/mensaje',
    title: 'Mensajes',
    icon: 'mdi mdi-cellphone-android',
    class: 'has-arrow',
    label: '',
    labelClass: '',
    role: 'Staff',
    extralink: false,
    submenu: [
      // { path: '/forms/basicform', title: 'Basic Forms', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      // // tslint:disable-next-line:max-line-length
      // { path: '/forms/formvalidation', title: 'Form Validation', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      // { path: '/component/typehead', title: 'Form Typehead', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      // { path: '/component/datepicker', title: 'Datepicker', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] }
    ]
  },
  {
    path: '/apps/chat',
    title: 'Chat',
    icon: 'mdi mdi-message-text',
    class: 'has-arrow',
    label: '',
    labelClass: '',
    role: 'Staff',
    extralink: false,
    submenu: [
      // { path: '/tables/basictable', title: 'Basic Tables', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      // { path: '/tables/smarttable', title: 'Smart Tables', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      // { path: '/tables/datatable', title: 'Data Tables', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] }
    ]
  },
  {
    path: '/apps/usuarios',
    title: 'Usuarios',
    icon: 'mdi mdi-account-circle',
    class: 'has-arrow',
    label: '',
    labelClass: '',
    role: 'Admin',
    extralink: false,
    submenu: []
  },
  // {
  //   path: '',
  //   title: 'Charts & Icons',
  //   icon: '',
  //   class: 'nav-small-cap',
  //   label: '',
  //   labelClass: '',
  //   extralink: true,
  //   submenu: []
  // },
  // {
  //   path: '',
  //   title: 'Charts',
  //   icon: 'mdi mdi-chart-arc',
  //   class: 'has-arrow',
  //   label: '',
  //   labelClass: '',
  //   extralink: false,
  //   submenu: [
  //     { path: '/charts/chartjs', title: 'Chart Js', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
  //     { path: '/charts/chartistjs', title: 'Chartist Js', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] }
  //   ]
  // },
  // {
  //   path: '',
  //   title: 'Icons',
  //   icon: 'mdi mdi-brush',
  //   class: 'has-arrow',
  //   label: '',
  //   labelClass: '',
  //   extralink: false,
  //   submenu: [
  //     { path: '/icons/fontawesome', title: 'Fontawesome', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
  //     // tslint:disable-next-line:max-line-length
  //     { path: '/icons/simpleline', title: 'Simple Line Icons', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
  //     { path: '/icons/material', title: 'Material Icons', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] }
  //   ]
  // },
  // {
  //   path: '',
  //   title: 'Pages',
  //   icon: '',
  //   class: 'nav-small-cap',
  //   label: '',
  //   labelClass: '',
  //   extralink: true,
  //   submenu: []
  // },
  // {
  //   path: '',
  //   title: 'Authentication',
  //   icon: 'mdi mdi-lock',
  //   class: 'has-arrow',
  //   label: '',
  //   labelClass: '',
  //   extralink: false,
  //   submenu: [
  //     { path: '/authentication/login', title: 'Login', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
  //     { path: '/authentication/login2', title: 'Login 2', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
  //     { path: '/authentication/signup', title: 'Register', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
  //     // tslint:disable-next-line:max-line-length
  //     { path: '/authentication/signup2', title: 'Register 2', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
  //     { path: '/authentication/404', title: '404', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
  //     { path: '/authentication/lock', title: 'Lockscreen', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] }
  //   ]
  // },
  // {
  //   path: '',
  //   title: 'Sample Pages',
  //   icon: 'mdi mdi-file',
  //   class: 'has-arrow',
  //   label: '',
  //   labelClass: '',
  //   extralink: false,
  //   submenu: [
  //     { path: '/sample-pages/timeline', title: 'Timeline', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
  //     { path: '/sample-pages/profile', title: 'Profile', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
  //     { path: '/sample-pages/pricing', title: 'Pricing', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
  //     { path: '/sample-pages/invoice', title: 'Invoice', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
  //     // tslint:disable-next-line:max-line-length
  //     { path: '/sample-pages/helperclasses', title: 'Helper Classes', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
  //     { path: '/starter', title: 'Starter Page', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] }
  //   ]
  // },
  // {
  //   path: '',
  //   title: 'Menu Levels',
  //   icon: 'mdi mdi-arrange-send-backward',
  //   class: 'has-arrow',
  //   label: '',
  //   labelClass: '',
  //   extralink: false,
  //   submenu: [
  //     { path: 'javascript:void(0);', title: 'Second Level', icon: '', class: '', label: '', labelClass: '', extralink: true, submenu: [] },
  //     {
  //       path: '',
  //       title: 'Second Child',
  //       icon: '',
  //       class: 'has-arrow',
  //       label: '',
  //       labelClass: '',
  //       extralink: false,
  //       submenu: [
  //         // tslint:disable-next-line:max-line-length
  //         { path: 'javascript:void(0);', title: 'Third 1.1', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
  //         { path: 'javascript:void(0);', title: 'Third 1.2', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] }
  //       ]
  //     }
  //   ]
  // }
];
