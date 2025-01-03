import FormSelectSearch from '@/components/common/form-select-search'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import InputDropDowns from '../input-dropdowns'
import { Button } from '@/components/ui/button'
import { CaseLower, CaseSensitive, CaseUpper, ChevronDown, Slash } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import TooltipButton from '@/components/common/TooltipButton'
import ColorPickerModal from '@/components/common/color-picker-modal'
import { FaAlignCenter, FaAlignJustify, FaAlignLeft, FaAlignRight } from 'react-icons/fa'

const StyleText = () => {
  return (
    <AccordionItem value="text">
    <AccordionTrigger className="hover:no-underline bg-slate-200 p-2 px-4 border-t border-slate-300 text-xs">
      Text
    </AccordionTrigger>
    <AccordionContent className="p-2">
      <div className="mb-3">
        <p className="text-black text-xs font-bold ml-1 mb-1">Font</p>
        <Label className="text-gray-500 text-xs ml-1">Font Family</Label>
        <FormSelectSearch
          data={[]}
          emptyText="No Fonts Found"
          value=""
          setValue={(val: string) => {}}
          btnClassName="h-8 hover:bg-white"
          inputClassName="h-9"
          width="w-[250px]"
          margin="mt-1"
        />
      </div>
      <div className="flex justify-between mb-4">
        <div className="mr-2 relative">
          <Label className="text-gray-500 text-xs ml-1">Font Size</Label>
          <Input placeholder="auto" className="h-8" />
          <div className="absolute top-[26px] right-1 flex items-center justify-center">
            <InputDropDowns
              data={[
                {
                  label: <>px</>,
                  value: "px",
                },
                {
                  label: <>%</>,
                  value: "%",
                },
                {
                  label: <>em</>,
                  value: "em",
                },
                {
                  label: <>rem</>,
                  value: "rem",
                },
              ]}
            />
          </div>
        </div>
        <div className="relative">
          <Label className="text-gray-500 text-xs ml-1">Line Height</Label>
          <Input placeholder="auto" className="h-8" />
          <div className="absolute top-[26px] right-1 flex items-center justify-center">
            <InputDropDowns
              data={[
                {
                  label: <>px</>,
                  value: "px",
                },
                {
                  label: <>%</>,
                  value: "%",
                },
                {
                  label: <>em</>,
                  value: "em",
                },
                {
                  label: <>rem</>,
                  value: "rem",
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center mb-3">
        <div className="mr-2 relative">
          <Label className="text-gray-500 text-xs ml-1">Font Weight</Label>
          <div className="mt-1">
            <InputDropDowns
              data={[
                {
                  label: <>Thin</>,
                  value: "thin",
                },
                {
                  label: <>Extra Light</>,
                  value: "extralight",
                },
                {
                  label: <>Light</>,
                  value: "light",
                },
                {
                  label: <>Normal</>,
                  value: "normal",
                },
                {
                  label: <>Medium</>,
                  value: "medium",
                },
                {
                  label: <>Semibold</>,
                  value: "semibold",
                },
                {
                  label: <>Bold</>,
                  value: "bold",
                },
                {
                  label: <>Extra Bold</>,
                  value: "extrabold",
                },
              ]}
              height="h-56"
              width="w-40"
              customContent={
                <Button className="h-7 w-32 flex justify-between px-2 text-xs bg-white hover:bg-white text-gray-500">
                  <span className="mr-3">700 - Bold</span>
                  <ChevronDown size={12} />
                </Button>
              }
            />
            {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="h-7 w-32 flex justify-between px-2 text-xs bg-white hover:bg-white text-gray-500">
                <span className="mr-3">700 - Bold</span>
                <ChevronDown size={12} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-[5rem] w-36 ml-2">
              <ScrollArea className="h-56">
                <DropdownMenuItem className="cursor-pointer">
                  100 - Thin
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  200 - Extra Light
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  300 - Light
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  400 - Normal
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  500 - Medium
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  600 - Semibold
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  700 - Bold
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  800 - Extra Bold
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  900 - Black
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  lighter
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  bolder
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  inherit
                </DropdownMenuItem>
              </ScrollArea>
            </DropdownMenuContent>
          </DropdownMenu> */}
          </div>
        </div>
        <div>
          <Label className="text-gray-500 text-xs ml-1">Font Style</Label>
          <Tabs defaultValue="normal">
            <TabsList className="p-0 h-8">
              <TabsTrigger value="normal" asChild>
                <TooltipButton
                  text="Normal"
                  className="h-6 w-6 mr-2 data-[state=active]:bg-primary data-[state=active]:text-white bg-white text-gray-600 hover:bg-transparent"
                  side="top"
                  btnContent={<>I</>}
                />
              </TabsTrigger>
              <TabsTrigger value="italic" asChild className="italic">
                <TooltipButton
                  text="Italic"
                  className="h-6 w-6 data-[state=active]:bg-primary data-[state=active]:text-white bg-white text-gray-600 hover:bg-transparent"
                  side="top"
                  btnContent={<>I</>}
                />
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      <div className="relative mb-3">
        <Label className="text-gray-500 text-xs ml-1">Color</Label>
        <Input placeholder="rgb(0,0,0)" className="h-8 pl-8 text-xs" />
        <div className="absolute top-[23px] left-2">
          <ColorPickerModal />
        </div>
      </div>
      <div className="relative mb-3">
        <Label className="text-gray-500 text-xs ml-1">Text Align</Label>
        <Tabs defaultValue="left" className="w-[100%]">
          <TabsList className="w-[100%]">
            <TabsTrigger value="left" asChild>
              <TooltipButton
                className="h-8 px-3 w-[25%] data-[state=active]:bg-primary data-[state=active]:text-white bg-white text-slate-800 hover:bg-slate-200 hover:text-gray-800 rounded-r-none border-r border-slate-300 text-xs"
                btnContent={<FaAlignLeft size={15} className="font-bold" />}
                side="top"
                text="left"
              />
            </TabsTrigger>
            <TabsTrigger value="center" asChild>
              <TooltipButton
                className="h-8 px-3 w-[25%] data-[state=active]:bg-primary data-[state=active]:text-white bg-white text-slate-800 hover:bg-slate-200 hover:text-gray-800 rounded-none border-r border-slate-300 text-xs"
                btnContent={
                  <FaAlignCenter size={15} className="font-bold" />
                }
                side="top"
                text="center"
              />
            </TabsTrigger>
            <TabsTrigger value="right" asChild>
              <TooltipButton
                className="h-8 px-3 w-[25%] data-[state=active]:bg-primary data-[state=active]:text-white bg-white text-slate-800 hover:bg-slate-200 hover:text-gray-800 rounded-none border-r border-slate-300 text-xs"
                btnContent={
                  <FaAlignRight size={15} className="font-bold" />
                }
                side="top"
                text="right"
              />
            </TabsTrigger>
            <TabsTrigger value="justify" asChild>
              <TooltipButton
                className="h-8 px-3 w-[25%] data-[state=active]:bg-primary data-[state=active]:text-white bg-white text-slate-800 hover:bg-slate-200 hover:text-gray-800 rounded-l-none border-slate-300 text-xs"
                btnContent={
                  <FaAlignJustify size={15} className="font-bold" />
                }
                side="top"
                text="justify"
              />
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="flex items-center mb-3">
        <div className="relative mr-2">
          <Label className="text-gray-500 text-xs ml-1">
            Letter Spacing
          </Label>
          <Input placeholder="auto" className="h-8" />
          <div className="absolute top-[26px] right-1 flex items-center justify-center">
            <InputDropDowns
              data={[
                {
                  label: <>px</>,
                  value: "px",
                },
                {
                  label: <>%</>,
                  value: "%",
                },
                {
                  label: <>em</>,
                  value: "em",
                },
                {
                  label: <>rem</>,
                  value: "rem",
                },
              ]}
            />
          </div>
        </div>
        <div className="">
          <Label className="text-gray-500 text-xs ml-1">
            Text Transform
          </Label>
          <Tabs defaultValue="left">
            <TabsList>
              <TabsTrigger value="uppercase" asChild>
                <TooltipButton
                  className="h-8 px-2 w-[25%] data-[state=active]:bg-primary data-[state=active]:text-white bg-white text-slate-800 hover:bg-slate-200 hover:text-gray-800 rounded-r-none border-r border-slate-300 text-xs"
                  btnContent={<CaseUpper size={15} className="font-bold" />}
                  side="top"
                  text="uppercase"
                />
              </TabsTrigger>
              <TabsTrigger value="capitalize" asChild>
                <TooltipButton
                  className="h-8 px-2 w-[25%] data-[state=active]:bg-primary data-[state=active]:text-white bg-white text-slate-800 hover:bg-slate-200 hover:text-gray-800 rounded-none border-r border-slate-300 text-xs"
                  btnContent={
                    <CaseSensitive size={15} className="font-bold" />
                  }
                  side="top"
                  text="capitalize"
                />
              </TabsTrigger>
              <TabsTrigger value="lowercase" asChild>
                <TooltipButton
                  className="h-8 px-2 w-[25%] data-[state=active]:bg-primary data-[state=active]:text-white bg-white text-slate-800 hover:bg-slate-200 hover:text-gray-800 rounded-none border-r border-slate-300 text-xs"
                  btnContent={<CaseLower size={15} className="font-bold" />}
                  side="top"
                  text="lowercase"
                />
              </TabsTrigger>
              <TabsTrigger value="justify" asChild>
                <TooltipButton
                  className="h-8 px-2 w-[25%] data-[state=active]:bg-primary data-[state=active]:text-white bg-white text-slate-800 hover:bg-slate-200 hover:text-gray-800 rounded-l-none border-slate-300 text-xs"
                  btnContent={<Slash size={15} className="font-bold" />}
                  side="top"
                  text="none"
                />
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      <div className="mb-3 relative">
        <Label className="text-gray-500 text-xs ml-1">Line Height</Label>
        <Input placeholder="auto" className="h-8" />
        <div className="absolute top-[26px] right-1 flex items-center justify-center">
          <InputDropDowns
            data={[
              {
                label: <>px</>,
                value: "px",
              },
              {
                label: <>%</>,
                value: "%",
              },
              {
                label: <>em</>,
                value: "em",
              },
              {
                label: <>rem</>,
                value: "rem",
              },
            ]}
          />
        </div>
      </div>
      <p className="text-black text-xs font-bold ml-1 mb-1">
        Text Decoration
      </p>
      <div className="flex items-center mb-3 mt-1">
        <div className="mr-2">
          <Label className="text-gray-500 text-xs ml-1">
            Decoration Line
          </Label>
          <div className="mt-1">
            <InputDropDowns
              data={[
                {
                  label: <>underline</>,
                  value: "underline",
                },
                {
                  label: <>overline</>,
                  value: "overline",
                },
                {
                  label: <>line-through</>,
                  value: "line-through",
                },
                {
                  label: <>no-underline</>,
                  value: "no-underline",
                },
              ]}
              width="w-40"
              customContent={
                <Button className="h-7 w-[100%] flex justify-between px-2 text-xs bg-white hover:bg-white text-gray-500">
                  <span className="mr-3">no-underline</span>
                  <ChevronDown size={12} />
                </Button>
              }
            />
          </div>
        </div>
        <div className="relative">
          <Label className="text-gray-500 text-xs ml-1">
            Decoration Color
          </Label>
          <Input placeholder="rgb(0,0,0)" className="h-8 pl-8 text-xs" />
          <div className="absolute top-[23px] left-2">
            <ColorPickerModal />
          </div>
        </div>
      </div>
      <div className="mb-3">
        <Label className="text-gray-500 text-xs ml-1">
          Decoration Style
        </Label>
        <div className="mt-1">
          <InputDropDowns
            data={[
              {
                label: <>solid</>,
                value: "solid",
              },
              {
                label: <>doubled</>,
                value: "doubled",
              },
              {
                label: <>dotted</>,
                value: "dotted",
              },
              {
                label: <>dashed</>,
                value: "dashed",
              },
              {
                label: <>wavy</>,
                value: "wavy",
              },
            ]}
            width="w-40"
            customContent={
              <Button className="h-7 w-[100%] flex justify-between px-2 text-xs bg-white hover:bg-white text-gray-500">
                <span className="mr-3">solid</span>
                <ChevronDown size={12} />
              </Button>
            }
          />
        </div>
      </div>
    </AccordionContent>
  </AccordionItem>
  )
}

export default StyleText
