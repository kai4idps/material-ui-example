/*--------------------------------------------------------------------------------*/
/*                                  Application                                    */
/*--------------------------------------------------------------------------------*/
import Chat from '../views/chat/chat';
import Contacts from '../views/contacts/contacts';
import Email from '../views/email/email';
import Notes from '../views/notes/notes';

/*--------------------------------------------------------------------------------*/
/*                                  Dashboards                                    */
/*--------------------------------------------------------------------------------*/
import FirstDashboard from '../views/dashboards/dashboard1';
import SecondDashboard from '../views/dashboards/dashboard2';
import ThirdDashboard from '../views/dashboards/dashboard3';
import FourthDashboard from '../views/dashboards/dashboard4';
/*--------------------------------------------------------------------------------*/
/*                           Ui-components Dropdown                               */
/*--------------------------------------------------------------------------------*/
import Alerts from '../views/ui-components/alert';
import Badges from '../views/ui-components/badge';
import Spinners from '../views/ui-components/spinner';
import Toasts from '../views/ui-components/toasts';
import Breadcrumbs from '../views/ui-components/breadcrumb';
import Buttons from '../views/ui-components/button';
import Dropdowns from '../views/ui-components/dropdown';
import BtnGroups from '../views/ui-components/btn-group';
import Cards from '../views/ui-components/cards';
import CollapseComponent from '../views/ui-components/collapse';
import CarouselComponent from '../views/ui-components/carousel';
import JumbotronComponent from '../views/ui-components/jumbotron';
import LayoutComponent from '../views/ui-components/layout';
import ListComponent from '../views/ui-components/listgroup';
import MediaComponent from '../views/ui-components/media';
import ModalComponent from '../views/ui-components/modal';
import NavbarComponent from '../views/ui-components/navbar';
import NavsComponent from '../views/ui-components/navs';
import PaginationComponent from '../views/ui-components/pagination';
import PopoverComponent from '../views/ui-components/popover';
import ProgressComponent from '../views/ui-components/progress';
import TableComponent from '../views/ui-components/table';
import TabsComponent from '../views/ui-components/tabs';
import TooltipComponent from '../views/ui-components/tooltip';
/*--------------------------------------------------------------------------------*/
/*                          Sample Pages Dropdown                                 */
/*--------------------------------------------------------------------------------*/
import Starterkit from '../views/sample-pages/starter-kit';
import Profile from '../views/sample-pages/profile';
import Searchresult from '../views/sample-pages/search-result';
import Gallery from '../views/sample-pages/gallery';
import Helperclass from '../views/sample-pages/helperclass';
import Widgets from '../views/widget/widget';
import AuthRoutes from './authroutes';
/*--------------------------------------------------------------------------------*/
/*                              Calendar Page                                     */
/*--------------------------------------------------------------------------------*/
import Calendar from '../views/calendar/calendar';
/*--------------------------------------------------------------------------------*/
/*                          Chart Pages Dropdown                                  */
/*--------------------------------------------------------------------------------*/
import Chartjs from '../views/charts/chartjs';
import Chartc3 from '../views/charts/c3chart';
import Apexcharts from '../views/charts/apex-charts';
/*--------------------------------------------------------------------------------*/
/*                          Icon Pages Dropdown                                   */
/*--------------------------------------------------------------------------------*/
import Materialicon from '../views/icons/material';
import FontAwesome from '../views/icons/fontawesome';
import Themify from '../views/icons/themify';
import Weather from '../views/icons/weather';
import Simpleline from '../views/icons/simpleline';
import FlagIcon from '../views/icons/flag';
/*--------------------------------------------------------------------------------*/
/*                          Form Layout Pages Dropdown                            */
/*--------------------------------------------------------------------------------*/
import Basicform from '../views/form-layouts/basic';
import FormInputs from '../views/form-layouts/form-inputs';
import FormGroups from '../views/form-layouts/form-groups';
import FormGrids from '../views/form-layouts/form-grids';
import MaterialForm from '../views/form-layouts/material';
/*--------------------------------------------------------------------------------*/
/*                          Form-pickers Pages Dropdown                           */
/*--------------------------------------------------------------------------------*/
import Datepicker from '../views/form-pickers/datetimepicker';
import Tagselect from '../views/form-pickers/tag-select';
/*--------------------------------------------------------------------------------*/
/*                          Form Validation Page                                  */
/*--------------------------------------------------------------------------------*/
import FormValidate from '../views/form-validation/form-validation';
/*--------------------------------------------------------------------------------*/
/*                            Form Wizard Page                                    */
/*--------------------------------------------------------------------------------*/
import FormSteps from '../views/steps/steps';
/*--------------------------------------------------------------------------------*/
/*                            Table Pages Dropdown                                */
/*--------------------------------------------------------------------------------*/
import Basictable from '../views/tables/tablebasic';
import Reacttable from '../views/tables/reacttable';
import Datatable from '../views/tables/react-bootstrap-table';
/*--------------------------------------------------------------------------------*/
/*                               Map Page                                         */
/*--------------------------------------------------------------------------------*/
import Vectormap from '../views/maps/vectormap';
var auths = [].concat(AuthRoutes);

var ThemeRoutes = [{
    navlabel: true,
    name: "Personal",
    icon: "mdi mdi-dots-horizontal",
},
{
    collapse: true,
    name: "Dashboards",
    state: "dashboardpages",
    icon: "mdi mdi-view-dashboard",
    extra: "",
    child: [{
        path: "/dashboards/dashboard1",
        name: "Dashboard 1",
        icon: "mdi mdi-adjust",
        component: FirstDashboard
    },
    {
        path: "/dashboards/dashboard2",
        name: "Dashboard 2",
        icon: "mdi mdi-adjust",
        component: SecondDashboard
    },
    {
        path: "/dashboards/dashboard3",
        name: "Dashboard 3",
        icon: "mdi mdi-adjust",
        component: ThirdDashboard
    },
    {
        path: "/dashboards/dashboard4",
        name: "Dashboard 4",
        icon: "mdi mdi-adjust",
        component: FourthDashboard
    }
    ]
},
{
    collapse: true,
    name: "Ui",
    state: "uicomponents",
    icon: "mdi mdi-widgets",
    extra: "mega-dropdown",
    child: [{
        path: '/ui-components/alert',
        name: 'Alerts',
        icon: 'mdi mdi-comment-processing-outline',
        component: Alerts
    },
    {
        path: '/ui-components/badge',
        name: 'Badges',
        icon: 'mdi mdi-arrange-send-backward',
        component: Badges
    },
    {
        path: '/ui-components/breadcrumb',
        name: 'Breadcrumbs',
        icon: 'mdi mdi-equal',
        component: Breadcrumbs
    },
    {
        path: '/ui-components/button',
        name: 'Buttons',
        icon: 'mdi mdi-toggle-switch',
        component: Buttons
    },
    {
        path: '/ui-components/dropdown',
        name: 'Button Dropdown',
        icon: 'mdi mdi-cards-variant',
        component: Dropdowns
    },
    {
        path: '/ui-components/btn-group',
        name: 'Button Group',
        icon: 'mdi mdi-checkbox-multiple-blank',
        component: BtnGroups
    },
    {
        path: '/ui-components/card',
        name: 'Cards',
        icon: 'mdi mdi-credit-card-multiple',
        component: Cards
    },
    {
        path: '/ui-components/collapse',
        name: 'Collapse',
        icon: 'mdi mdi-elevator',
        component: CollapseComponent
    },
    {
        path: '/ui-components/carousel',
        name: 'Carousel',
        icon: 'mdi mdi-view-carousel',
        component: CarouselComponent
    },
    {
        path: '/ui-components/jumbotron',
        name: 'Jumbotron',
        icon: 'mdi mdi-hamburger',
        component: JumbotronComponent
    },
    {
        path: '/ui-components/layout',
        name: 'Layout',
        icon: 'mdi mdi-apps',
        component: LayoutComponent
    },
    {
        path: '/ui-components/listgroup',
        name: 'List Group',
        icon: 'mdi mdi-format-list-bulleted',
        component: ListComponent
    },
    {
        path: '/ui-components/media',
        name: 'Media',
        icon: 'mdi mdi-folder-multiple-image',
        component: MediaComponent
    },
    {
        path: '/ui-components/modal',
        name: 'Modal',
        icon: 'mdi mdi mdi-tablet',
        component: ModalComponent
    },
    {
        path: '/ui-components/navbar',
        name: 'Navbar',
        icon: 'mdi mdi-page-layout-header',
        component: NavbarComponent
    },
    {
        path: '/ui-components/navs',
        name: 'Navs',
        icon: 'mdi mdi-panorama-wide-angle',
        component: NavsComponent
    },
    {
        path: '/ui-components/pagination',
        name: 'Pagination',
        icon: 'mdi mdi-priority-high',
        component: PaginationComponent
    },
    {
        path: '/ui-components/popover',
        name: 'Popover',
        icon: 'mdi mdi-pencil-circle',
        component: PopoverComponent
    },
    {
        path: '/ui-components/progress',
        name: 'Progress',
        icon: 'mdi mdi-poll',
        component: ProgressComponent
    },
    {
        path: '/ui-components/table',
        name: 'Tables',
        icon: 'mdi mdi-border-none',
        component: TableComponent
    },
    {
        path: '/ui-components/tabs',
        name: 'Tabs',
        icon: 'mdi mdi-tab-unselected',
        component: TabsComponent
    },
    {
        path: '/ui-components/tooltip',
        name: 'Toltips',
        icon: 'mdi mdi-image-filter-vintage',
        component: TooltipComponent
    },
    {
        path: '/ui-components/spinner',
        name: 'Spinner',

        icon: 'mdi mdi-image-filter-vintage',
        component: Spinners
    },
    {
        path: '/ui-components/toasts',
        name: 'Toasts',

        icon: 'mdi mdi-image-filter-vintage',
        component: Toasts
    }
    ]
},
{
    navlabel: true,
    name: "Apps",
    icon: "mdi mdi-dots-horizontal",

},
{
    collapse: true,
    name: 'Apps',
    state: 'openApps',
    icon: 'mdi mdi-apps',
    extra: "",
    child: [{
        path: '/chat',
        name: 'Chat',
        icon: 'mdi mdi-comment-processing-outline',
        component: Chat
    },
    {
        path: '/email',
        name: 'Email',
        icon: 'mdi mdi-inbox-arrow-down',
        component: Email
    },
    {
        path: '/contacts',
        name: 'Contacts',
        icon: 'mdi mdi-contacts',
        component: Contacts
    },
    {
        path: '/calendar',
        name: 'Calendar',
        icon: 'mdi mdi-calendar',
        component: Calendar
    },
    {
        path: '/notes',
        name: 'Notes',
        icon: 'mdi mdi-note',
        component: Notes
    },
    ]
},
{
    navlabel: true,
    name: "Forms",
    icon: "mdi mdi-dots-horizontal",
},
{
    collapse: true,
    name: 'Forms',
    state: 'openApps',
    icon: 'mdi mdi-clipboard-text',
    extra: "",
    child: [{
        collapse: true,
        name: 'Form Layouts',
        state: 'formlayoutPages',
        icon: 'mdi mdi-arrange-bring-forward',
        subchild: [{
            path: '/form-layouts/form-inputs',
            name: 'Form Inputs',
            icon: 'mdi mdi-priority-low',
            component: FormInputs
        },
        {
            path: '/form-layouts/form-groups',
            name: 'Form Groups',
            icon: 'mdi mdi-rounded-corner',
            component: FormGroups
        },
        {
            path: '/form-layouts/form-grids',
            name: 'Form Grids',
            icon: 'mdi mdi-select-all',
            component: FormGrids
        },
        {
            path: '/form-layouts/basic',
            name: 'Form Basic',
            icon: 'mdi mdi-book',
            component: Basicform
        },
        {
            path: '/form-layouts/material',
            name: 'Form Material',
            icon: 'mdi mdi-cards-outline',
            component: MaterialForm
        }
        ]
    },
    {
        collapse: true,
        name: 'Form Pickers',
        state: 'formpickerPages',
        icon: 'mdi mdi-pencil-box-outline',
        subchild: [{
            path: '/form-pickers/datetimepicker',
            name: 'Date Pickers',
            icon: 'mdi mdi-calendar-clock',
            component: Datepicker
        },
        {
            path: '/form-pickers/tag-select',
            name: 'Tags & Select',
            icon: 'mdi mdi-tag-multiple',
            component: Tagselect
        }
        ]
    },
    {
        path: '/form-validation',
        name: 'Form Validation',
        icon: 'mdi mdi-alert-box',
        component: FormValidate
    },
    {
        path: '/form-steps',
        name: 'Form Steps',
        icon: 'mdi mdi-cube-send',
        component: FormSteps
    }
    ]
},
{
    navlabel: true,
    name: "Sample Pages",
    icon: "mdi mdi-dots-horizontal",
},
{
    collapse: true,
    name: 'Pages',
    state: 'openApps',
    icon: 'mdi mdi-book-open-page-variant',
    extra: "",
    child: [{
        collapse: true,
        name: 'Authentication',
        state: 'openAuthentication',
        icon: 'mdi mdi-account-circle',
        subchild: auths
    },
    {
        path: '/sample-pages/starter-kit',
        name: 'Starter Kit',
        icon: 'mdi mdi-crop-free',
        component: Starterkit
    },
    {
        path: '/sample-pages/profile',
        name: 'Profile',
        icon: 'mdi mdi-account-network',
        component: Profile
    },
    {
        path: '/sample-pages/search-result',
        name: 'Search Result',
        icon: 'mdi mdi-search-web',
        component: Searchresult
    },
    {
        path: '/sample-pages/gallery',
        name: 'Gallery',
        icon: 'mdi mdi-camera-iris',
        component: Gallery
    },
    {
        path: '/sample-pages/helperclass',
        name: 'Helper Classes',
        icon: 'mdi mdi-tune',
        component: Helperclass
    }
    ]
},
{
    navlabel: true,
    name: "Tables",
    icon: "mdi mdi-dots-horizontal"
},
{
    collapse: true,
    name: 'Tables',
    state: 'openApps',
    icon: 'mdi mdi-table',
    extra: "",
    child: [{
        path: '/tables/tablebasic',
        name: 'Basic Table',
        icon: 'mdi mdi-border-all',
        component: Basictable
    },
    {
        path: '/tables/reacttable',
        name: 'React Table',
        icon: 'mdi mdi-border-right',
        component: Reacttable
    },
    {
        path: '/tables/datatable',
        name: 'Bootstrap DataTable',
        icon: 'mdi mdi-border-inside',
        component: Datatable
    }
    ]
},
{
    navlabel: true,
    name: "Extra",
    icon: "mdi mdi-dots-horizontal",
},
{
    collapse: true,
    name: 'Extra',
    state: 'openApps',
    icon: 'mdi mdi-radioactive',
    extra: "",
    child: [{
        collapse: true,
        path: '/icons',
        name: 'Icons',
        state: 'iconsPages',
        icon: 'mdi mdi-face',
        subchild: [{
            path: '/icons/material',
            name: 'Material Icons',
            icon: 'mdi mdi-emoticon',
            component: Materialicon
        },
        {
            path: '/icons/fontawesome',
            name: 'Font Awesome Icons',
            icon: 'mdi mdi-emoticon-cool',
            component: FontAwesome
        },
        {
            path: '/icons/themify',
            name: 'Themify Icons',
            icon: 'mdi mdi-chart-bubble',
            component: Themify
        },
        {
            path: '/icons/weather',
            name: 'Weather Icons',
            icon: 'mdi mdi-weather-cloudy',
            component: Weather
        },
        {
            path: '/icons/simpleline',
            name: 'Simple Line Icons',
            icon: 'mdi mdi mdi-image-broken-variant',
            component: Simpleline
        },
        {
            path: '/icons/flag',
            name: 'Flag Icons',
            icon: 'mdi mdi-flag-triangle',
            component: FlagIcon
        }
        ]
    },
    {
        path: '/widgets',
        name: 'Widgets',
        icon: 'mdi mdi-gradient',
        component: Widgets
    },
    {
        path: '/vectormap',
        name: 'Vector Map',
        icon: 'ti-location-pin',
        component: Vectormap
    },
    {
        path: '/charts/chartjs',
        name: 'Chartjs',
        icon: 'mdi mdi-blur',
        component: Chartjs
    },
    {
        path: '/charts/c3chart',
        name: 'C3 Chart',
        icon: 'mdi mdi-chemical-weapon',
        component: Chartc3
    },
    {
        path: '/charts/apex-chart',
        name: 'Apex Chart',
        icon: 'mdi mdi-blur',
        component: Apexcharts
    },
    ]
},
{
    path: '/',
    pathTo: '/dashboards/dashboard1',
    name: 'Dashboard',
    redirect: true
}
];
export default ThemeRoutes;