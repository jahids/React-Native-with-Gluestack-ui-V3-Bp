  import {
  Accordion,
  AccordionContent,
  AccordionContentText,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionTitleText,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper
} from '@/components/ui/actionsheet';
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from '@/components/ui/button';
import { Divider } from '@/components/ui/divider';
import { Heading } from '@/components/ui/heading';
import { ChevronDownIcon, ChevronUpIcon, CloseIcon, Icon } from '@/components/ui/icon';
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@/components/ui/modal';
import { Text } from '@/components/ui/text';
import { useState } from 'react';
import { View } from "react-native";

  export default function Index() {
    const [showModal, setShowModal] = useState(false);
    const [showActionsheet, setShowActionsheet] = useState(false);
    const handleClose = () => setShowActionsheet(false);
    return (
      <View className='bg-purple-200 py-10 h-full'>
      
        <Text className="text-xl bg-red-500">hello</Text>
        <Box className="bg-primary-500 p-5">
        <Text className="text-typography-0">This is the Box</Text>
      </Box>

    



      <Button onPress={() => setShowModal(true)}>
          <ButtonText>Open Modal</ButtonText>
        </Button>
        <Modal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
          }}
          size="md"
        >
          <ModalBackdrop />
          <ModalContent>
            <ModalHeader>
              <Heading size="lg">Modal Title</Heading>
              <ModalCloseButton>
                <Icon as={CloseIcon} />
              </ModalCloseButton>
            </ModalHeader>
            <ModalBody>
              <Text>This is the modal body. You can add any content here.</Text>
            </ModalBody>
            <ModalFooter>
              <Button
                variant="outline"
                action="secondary"
                className="mr-3"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                <ButtonText>Cancel</ButtonText>
              </Button>
              <Button
                onPress={() => {
                  setShowModal(false);
                }}
              >
                <ButtonText>Save</ButtonText>
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Button onPress={() => setShowActionsheet(true)}>
        <ButtonText>Open Actionsheet</ButtonText>
      </Button>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <View className="w-full px-4 pb-4">
            <Accordion
              type="single"
              isCollapsible={true}
              size="md"
              variant="filled"
              className="w-full rounded-lg border border-outline-200"
            >
              <AccordionItem value="item-1" className="border-b border-outline-200 last:border-b-0">
                <AccordionHeader>
                  <AccordionTrigger>
                    {({ isExpanded }: { isExpanded: boolean }) => (
                      <>
                        <AccordionTitleText className="flex-1 text-left">
                          What is your return policy?
                        </AccordionTitleText>
                        {isExpanded ? (
                          <AccordionIcon as={ChevronUpIcon} className="ml-3" />
                        ) : (
                          <AccordionIcon as={ChevronDownIcon} className="ml-3" />
                        )}
                      </>
                    )}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                  <AccordionContentText>
                    We offer a 30-day return policy on all items. Items must be in original condition with tags attached. Returns are free within the continental United States.
                  </AccordionContentText>
                </AccordionContent>
              </AccordionItem>

              <Divider />

              <AccordionItem value="item-2" className="border-b border-outline-200 last:border-b-0">
                <AccordionHeader>
                  <AccordionTrigger>
                    {({ isExpanded }: { isExpanded: boolean }) => (
                      <>
                        <AccordionTitleText className="flex-1 text-left">
                          How long does shipping take?
                        </AccordionTitleText>
                        {isExpanded ? (
                          <AccordionIcon as={ChevronUpIcon} className="ml-3" />
                        ) : (
                          <AccordionIcon as={ChevronDownIcon} className="ml-3" />
                        )}
                      </>
                    )}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                  <AccordionContentText>
                    Standard shipping typically takes 5-7 business days. Express shipping (2-3 business days) and overnight shipping options are available at checkout for an additional fee.
                  </AccordionContentText>
                </AccordionContent>
              </AccordionItem>

              <Divider />

              <AccordionItem value="item-3" className="border-b border-outline-200 last:border-b-0">
                <AccordionHeader>
                  <AccordionTrigger>
                    {({ isExpanded }: { isExpanded: boolean }) => (
                      <>
                        <AccordionTitleText className="flex-1 text-left">
                          Do you ship internationally?
                        </AccordionTitleText>
                        {isExpanded ? (
                          <AccordionIcon as={ChevronUpIcon} className="ml-3" />
                        ) : (
                          <AccordionIcon as={ChevronDownIcon} className="ml-3" />
                        )}
                      </>
                    )}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                  <AccordionContentText>
                    Yes, we ship to over 50 countries worldwide. International shipping costs and delivery times vary by destination. You can calculate shipping costs during checkout before completing your order.
                  </AccordionContentText>
                </AccordionContent>
              </AccordionItem>

              <Divider />

              <AccordionItem value="item-4" className="border-b border-outline-200 last:border-b-0">
                <AccordionHeader>
                  <AccordionTrigger>
                    {({ isExpanded }: { isExpanded: boolean }) => (
                      <>
                        <AccordionTitleText className="flex-1 text-left">
                          How can I track my order?
                        </AccordionTitleText>
                        {isExpanded ? (
                          <AccordionIcon as={ChevronUpIcon} className="ml-3" />
                        ) : (
                          <AccordionIcon as={ChevronDownIcon} className="ml-3" />
                        )}
                      </>
                    )}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                  <AccordionContentText>
                    Once your order ships, you'll receive an email with a tracking number. You can also track your order by logging into your account and visiting the "My Orders" section.
                  </AccordionContentText>
                </AccordionContent>
              </AccordionItem>

              <Divider />

              <AccordionItem value="item-5" className="last:border-b-0">
                <AccordionHeader>
                  <AccordionTrigger>
                    {({ isExpanded }: { isExpanded: boolean }) => (
                      <>
                        <AccordionTitleText className="flex-1 text-left">
                          What payment methods do you accept?
                        </AccordionTitleText>
                        {isExpanded ? (
                          <AccordionIcon as={ChevronUpIcon} className="ml-3" />
                        ) : (
                          <AccordionIcon as={ChevronDownIcon} className="ml-3" />
                        )}
                      </>
                    )}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                  <AccordionContentText>
                    We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, Google Pay, and bank transfers. All transactions are secured with SSL encryption.
                  </AccordionContentText>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </View>
        </ActionsheetContent>
      </Actionsheet>

      </View>
    );
  }
