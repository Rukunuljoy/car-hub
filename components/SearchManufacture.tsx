"use client";
import { manufacturers } from "@/constants";
import { SearchManuFactureProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { useState, Fragment } from "react";

const SearchManufacture = ({
  manuFacture,
  setManuFacture,
}: SearchManuFactureProps) => {
  const [query, setQuery] = useState("");

  const filteredManuFacturer =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-Manufacture ">
      <Combobox value={manuFacture} onChange={setManuFacture}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              alt="car logo"
              height={20}
              width={20}
              className="ml-4"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="sedan"
            displayValue={(manuFacture: string) => manuFacture}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filteredManuFacturer.map((item) => (
                <Combobox.Option
                  key={item}
                  className={({ active }) => `
                                        relative search-manufacturer__option ${
                                          active
                                            ? "bg-primary-blue text-white"
                                            : "text-gray-900 "
                                        }
                                        `}
                  value={item}
                >
                   {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                          </span>
                        ) : null}
                      </>
                       )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacture;
