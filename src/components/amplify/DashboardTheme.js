import { AmplifyTheme } from 'aws-amplify-react-native';

const MySectionHeader = Object.assign({}, AmplifyTheme.sectionHeader, { background: 'blue' });
const DashboardTheme = Object.assign({}, AmplifyTheme, { sectionHeader: MySectionHeader });

export default DashboardTheme;