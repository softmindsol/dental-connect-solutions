import * as React from "react";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import { TbWorldExclamation } from "react-icons/tb";
import * as RPNInput from "react-phone-number-input";
import {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import flags from "react-phone-number-input/flags";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

// Create a map from calling code to the first country that uses it.
const callingCodeToFirstCountryMap = getCountries().reduce(
  (acc, countryCode) => {
    try {
      const callingCode = getCountryCallingCode(countryCode);
      if (!acc[callingCode]) {
        acc[callingCode] = countryCode;
      }
    } catch (error) {
      // Handle or ignore errors for country codes that might not have metadata
    }
    return acc;
  },
  {},
);

const PhoneInput = React.forwardRef(
  ({ className, onChange, value, ...props }, ref) => {
    const [country, setCountry] = React.useState(props.defaultCountry);

    React.useEffect(() => {
      if (value && String(value).startsWith("+")) {
        const justDigits = String(value).substring(1).replace(/\D/g, "");
        let bestMatch = ""; // Find the best matching calling code

        for (const callingCode in callingCodeToFirstCountryMap) {
          if (
            justDigits.startsWith(callingCode) &&
            callingCode.length > bestMatch.length
          ) {
            bestMatch = callingCode;
          }
        }

        if (bestMatch) {
          const newCountry = callingCodeToFirstCountryMap[bestMatch];
          const currentCallingCode = country
            ? getCountryCallingCode(country)
            : undefined; // Update the country only if it's not already set to a country
          // with the same calling code, to preserve user's explicit selection
          // (e.g., user selects Canada (+1) over the default US (+1)).

          if (String(currentCallingCode) !== bestMatch) {
            setCountry(newCountry);
          }
        }
      }
    }, [value, country]); // Handle country change and auto-add country code

    const handleCountryChange = React.useCallback(
      (newCountry) => {
        setCountry(newCountry);
        if (newCountry) {
          const callingCode = getCountryCallingCode(newCountry);
          const currentValue = value || ""; // If the input is empty or doesn't start with +, add the country code

          if (!currentValue || !currentValue.startsWith("+")) {
            onChange?.(`+${callingCode}`);
          } else {
            // If there's already a value with a different country code, replace it
            const justDigits = currentValue.substring(1).replace(/\D/g, "");
            let existingCallingCode = "";

            for (const code in callingCodeToFirstCountryMap) {
              if (
                justDigits.startsWith(code) &&
                code.length > existingCallingCode.length
              ) {
                existingCallingCode = code;
              }
            }

            if (existingCallingCode && existingCallingCode !== callingCode) {
              // Replace old country code with new one, keeping the rest of the number
              const restOfNumber = justDigits.substring(
                existingCallingCode.length,
              );
              onChange?.(`+${callingCode}${restOfNumber}`);
            } else if (!existingCallingCode) {
              // No existing code found, prepend new one
              onChange?.(`+${callingCode}${justDigits}`);
            }
          }
        }
      },
      [value, onChange],
    );

    return (
      <RPNInput.default
        ref={ref}
        className={cn("flex", className)}
        flagComponent={FlagComponent}
        countrySelectComponent={CountrySelect}
        inputComponent={InputComponent}
        smartCaret={true}
        international
        withCountryCallingCode
        limitMaxLength={true}
        value={value || undefined}
        onChange={(v) => onChange?.(v || "")}
        country={country}
        onCountryChange={handleCountryChange}
        {...props}
      />
    );
  },
);
PhoneInput.displayName = "PhoneInput";

const InputComponent = React.forwardRef(({ className, inputClassName, ...props }, ref) => (
  <input
    className={cn(
      "flex-1 bg-transparent border-none outline-none focus-visible:outline-none focus:outline-none shadow-none text-sm text-gray-900 placeholder:text-gray-400 px-3",
      className,
      inputClassName
    )}
    {...props}
    ref={ref}
  />
));
InputComponent.displayName = "InputComponent";

const CountrySelect = ({
  disabled,
  value: selectedCountry,
  options: countryList,
  onChange,
}) => {
  const scrollAreaRef = React.useRef(null);
  const [searchValue, setSearchValue] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Popover
      open={isOpen}
      modal
      onOpenChange={(open) => {
        setIsOpen(open);
        open && setSearchValue("");
      }}
    >
      <PopoverTrigger asChild>
        <button
          type="button"
          variant="ghost"
          className="flex items-center gap-2 h-full px-3 hover:bg-black/5 focus:z-10 focus:outline-none transition-all duration-200 rounded-l-md border-r border-gray-200"
          disabled={disabled}
        >
          <FlagComponent
            country={selectedCountry}
            countryName={selectedCountry}
          />
          <ChevronsUpDown
            className={cn(
              "size-4 text-gray-400 transition-colors",
              disabled ? "hidden" : "opacity-100",
            )}
          />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[350px] p-0 bg-white border border-gray-200 shadow-lg rounded-md">
        <Command>
          <CommandInput
            value={searchValue}
            onValueChange={(value) => {
              setSearchValue(value);
              setTimeout(() => {
                if (scrollAreaRef.current) {
                  const viewportElement = scrollAreaRef.current.querySelector(
                    "[data-radix-scroll-area-viewport]",
                  );
                  if (viewportElement) {
                    viewportElement.scrollTop = 0;
                  }
                }
              }, 0);
            }}
            placeholder="Search country..."
          />
          <CommandList>
            <ScrollArea ref={scrollAreaRef} className="h-64">
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {countryList.map(({ value, label }) =>
                  value ? (
                    <CountrySelectOption
                      key={value}
                      country={value}
                      countryName={label}
                      selectedCountry={selectedCountry}
                      onChange={onChange}
                      onSelectComplete={() => setIsOpen(false)}
                    />
                  ) : null,
                )}
              </CommandGroup>
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

const CountrySelectOption = ({
  country,
  countryName,
  selectedCountry,
  onChange,
  onSelectComplete,
}) => {
  const handleSelect = () => {
    onChange(country);
    onSelectComplete();
  };

  return (
    <CommandItem className="gap-3 aria-selected:bg-gray-100" onSelect={handleSelect}>
      <FlagComponent country={country} countryName={countryName} />
      <span className="flex-1 text-sm text-gray-900">{countryName}</span>
      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">
        {`+${RPNInput.getCountryCallingCode(country)}`}
      </span>
      <CheckIcon
        className={cn(
          "ml-auto size-4 transition-all duration-200",
          country === selectedCountry
            ? "opacity-100 text-blue-600"
            : "opacity-0",
        )}
      />
    </CommandItem>
  );
};

const FlagComponent = ({ country, countryName }) => {
  const Flag = flags[country];

  return (
    <span className="flex h-5 w-7 overflow-hidden rounded-sm shadow-sm border border-gray-200 [&_svg:not([class*='size-'])]:size-full">
      {Flag ? (
        <Flag title={countryName} />
      ) : (
        <TbWorldExclamation className="text-gray-400" />
      )}
    </span>
  );
};

export { PhoneInput };
