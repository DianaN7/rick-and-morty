import React from 'react';
import FilterBTN from './FilterBTN';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

const Status = ({ setStatus, setPageNumber }) => {
  let status = ['Alive', 'Dead', 'Unknown'];
  return (
    <>
      <Accordion className="w-full" allowMultiple>
        <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
          <h2>
            <AccordionButton className="flex justify-between">
              <span
                className="text-left font-bold text-navy-900 dark:text-white"
                flex="1"
                textAlign="left"
              >
                Жив?
              </span>
              <AccordionIcon className="text-left !text-navy-900 dark:!text-white" />
            </AccordionButton>
          </h2>
          <AccordionPanel
            className="text-left text-medium mt-2 !text-navy-900 dark:!text-white"
            pb={4}
          >
            {status.map((items, index) => (
              <FilterBTN
                task={setStatus}
                key={index}
                setPageNumber={setPageNumber}
                name="status"
                index={index}
                items={items}
              />
            ))}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Status;
