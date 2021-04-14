import { 
  DashboardOutlined, HomeOutlined, WalletOutlined, TeamOutlined, DeploymentUnitOutlined, PlusSquareOutlined, FormOutlined, FileSyncOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [

{
  key: 'dashboards',
  path: `${APP_PREFIX_PATH}/dashboard`,
  title: 'sidenav.dashboard',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
		 {
	  key: 'Wallet',
	  path: `${APP_PREFIX_PATH}/dashboard/wallet`,
	  title: 'Wallet',
	  icon: WalletOutlined,
	  breadcrumb: false,
	  submenu: []
	},
	  {
	  key: 'Userlist',
	  path: `${APP_PREFIX_PATH}/dashboard/userlist`,
	  title: 'Userlist',
	  icon: TeamOutlined,
	  breadcrumb: false,
	  submenu: []
	}, 
  ]
},
  {
  key: 'Match',
  path: `${APP_PREFIX_PATH}/match`,
  title: 'Match',
  breadcrumb: false,
  submenu: [
	    {
      key: 'Match',
      path: `${APP_PREFIX_PATH}/match/match_list`,
      title: 'Match',
      icon: DeploymentUnitOutlined,
      breadcrumb: false,
      submenu: []
    },{
      key: 'Reporting Match',
      path: `${APP_PREFIX_PATH}/match/reporting_match`,
      title: 'Reporting Match',
      icon: FormOutlined,
      breadcrumb: false,
      submenu: []
    },{
      key: 'Match To Confirm',
      path: `${APP_PREFIX_PATH}/match/match_to_confirm`,
      title: 'Match To Confirm',
      icon: FileSyncOutlined,
      breadcrumb: false,
      submenu: []
    },
	  
  ]
},						  
	
						 ]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
