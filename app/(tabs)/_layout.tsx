import { AppBar } from '@/components/app-bar';
import { TabsComponent } from '@/components/tabs';
import { Box } from '@/components/ui/box';
import { tabsConfig } from '@/config/tabs-config';

export default function TabsLayout() {
  return (
    <Box className="flex-1 bg-background-0">
      <AppBar  />
      <TabsComponent tabsConfig={tabsConfig} />
    </Box>
  )
}

