
import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import {TabContext, TabPanel} from '@mui/lab';


const TabNavigator = ({data}) => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons={false}
                  aria-label="scrollable prevent tabs example">
                    {Object.keys(data).map((key) => {
                        return <Tab label={key} value={key} />
                    })
                    }
                </Tabs>
            </Box>
            {
                Object.keys(data).map((key) => {
                     return <TabPanel value={key}>{data[key]}</TabPanel>
                })
            }
        </TabContext>
    );
}

export default TabNavigator;