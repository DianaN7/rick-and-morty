import React from 'react';
import FilterBTN from './FilterBTN';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

const Species = ({ setPageNumber, setSpecies }) => {
  let species = [
    'Human',
    'Alien',
    'Humanoid',
    'Poopybutthole',
    'Mythological',
    'Unknown',
    'Animal',
    'Disease',
    'Robot',
    'Cronenberg',
    'Planet',
  ];
  return (
    <>
      <Accordion className="w-full" allowMultiple>
        <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
          <h2>
            <AccordionButton className="flex justify-between">
              <span
                className="text-left font-bold  text-black"
                flex="1"
                textAlign="left"
              >
                Раса
              </span>
              <AccordionIcon className="text-left  text-black" />
            </AccordionButton>
          </h2>
          <AccordionPanel
            className="text-left text-medium mt-2  text-black"
            pb={4}
          >
            {species.map((items, index) => (
              <FilterBTN
                task={setSpecies}
                key={index}
                setPageNumber={setPageNumber}
                name="species"
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

export default Species;
