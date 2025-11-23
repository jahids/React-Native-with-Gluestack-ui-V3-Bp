import { Box } from '@/components/ui/box';
import { ChevronDownIcon } from '@/components/ui/icon';
import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from '@/components/ui/select';
import { Text } from '@/components/ui/text';
import { ScrollView } from 'react-native';

export default function ContactScreen() {
  return (
    <Box className="flex-1 bg-background-0">
        <ScrollView className="flex-1">
          <Box className="p-4">
            <Text className="text-typography-900 text-xl mb-4">
              Contact Us
            </Text>
            <Text className="text-typography-700 mb-4">
              Get in touch with us!
            </Text>
            <Box className="mt-4">
              <Text className="text-typography-900 font-semibold mb-2">
                Email
              </Text>
              <Text className="text-typography-700">
                contact@example.com
              </Text>
            </Box>
            <Box className="mt-4">
              <Text className="text-typography-900 font-semibold mb-2">
                Phone
              </Text>
              <Text className="text-typography-700">
                +1 (555) 123-4567
              </Text>
            </Box>

            <Select>
      <SelectTrigger variant="outline" size="xl" className='flex justify-between'>
        <SelectInput placeholder="Select option" />
        <SelectIcon className="mr-6" as={ChevronDownIcon} />
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          <SelectItem label="UX Research" value="ux" />
          <SelectItem label="Web Development" value="web" />
          <SelectItem
            label="Cross Platform Development Process"
            value="Cross Platform Development Process"
          />
          <SelectItem label="UI Designing" value="ui" isDisabled={true} />
          <SelectItem label="Backend Development" value="backend" />
        </SelectContent>
      </SelectPortal>
    </Select>

          </Box>
        </ScrollView>
    </Box>
  );
}

