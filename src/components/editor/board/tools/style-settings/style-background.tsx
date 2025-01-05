import ColorPickerModal from '@/components/common/color-picker-modal'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import InputDropDowns from '../input-dropdowns'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

type StyleBackgroundProps = {
  backgroundColorProp: string;
  backgroundImageProp: string;
  backgroundPositionProp: string;
  backgroundRepeatProp: string;
  backgroundSizeProp: string;
  backgroundClipProp: string;
  backgroundGradientProp: string;
}

const StyleBackground = () => {
  return (
    <AccordionItem value="backgrounds">
    <AccordionTrigger className="hover:no-underline bg-slate-200 p-2 px-4 border-t border-slate-300 text-xs">
      Backgrounds
    </AccordionTrigger>
    <AccordionContent className="p-2">
      <div className="mb-3 relative">
        <Label className="text-gray-500 text-xs ml-1">
          Background Color
        </Label>
        <Input placeholder="rgb(0,0,0)" className="h-8 pl-8 text-xs mt-1" />
        <div className="absolute top-[27px] left-2">
          <ColorPickerModal />
        </div>
      </div>
      <div className="mb-3">
        <Label className="text-gray-500 text-xs ml-1">
          Background Image
        </Label>
        <Input
          placeholder="url('image-url')"
          className="h-8 text-xs mt-1"
        />
      </div>
      <div className="mb-3 flex items-center">
        <div className="mr-2 w-[49%]">
          <Label className="text-gray-500 text-xs ml-1">Bg. Position</Label>
          <div className="mt-1">
            <InputDropDowns
              data={[
                {
                  label: <>center</>,
                  value: "center",
                },
                {
                  label: <>bottom</>,
                  value: "bottom",
                },
                {
                  label: <>left</>,
                  value: "left",
                },
                {
                  label: <>left-bottom</>,
                  value: "left-bottom",
                },
                {
                  label: <>left-top</>,
                  value: "left-top",
                },
                {
                  label: <>right</>,
                  value: "right",
                },
                {
                  label: <>right-bottom</>,
                  value: "right-bottom",
                },
                {
                  label: <>right-top</>,
                  value: "right-top",
                },
                {
                  label: <>top</>,
                  value: "top",
                },
              ]}
              width="w-40"
              customContent={
                <Button className="h-7 w-[100%] flex justify-between px-2 text-xs bg-white hover:bg-white text-gray-500">
                  <span className="mr-3">center</span>
                  <ChevronDown size={12} />
                </Button>
              }
            />
          </div>
        </div>
        <div className=" w-[49%]">
          <Label className="text-gray-500 text-xs ml-1">Bg. Repeat</Label>
          <div className="mt-1">
            <InputDropDowns
              data={[
                {
                  label: <>repeat</>,
                  value: "repeat",
                },
                {
                  label: <>no-repeat</>,
                  value: "no-repeat",
                },
                {
                  label: <>repeat-x</>,
                  value: "repeat-x",
                },
                {
                  label: <>repeat-y</>,
                  value: "repeat-y",
                },
                {
                  label: <>repeat-round</>,
                  value: "repeat-round",
                },
                {
                  label: <>repeat-space</>,
                  value: "repeat-space",
                },
              ]}
              width="w-40"
              customContent={
                <Button className="h-7 w-[100%] flex justify-between px-2 text-xs bg-white hover:bg-white text-gray-500">
                  <span className="mr-3">no-repeat</span>
                  <ChevronDown size={12} />
                </Button>
              }
            />
          </div>
        </div>
      </div>
      <div className="flex items-center mb-3">
        <div className="mr-2  w-[49%]">
          <Label className="text-gray-500 text-xs ml-1">
            Background Size
          </Label>
          <div className="mt-1">
            <InputDropDowns
              data={[
                {
                  label: <>auto</>,
                  value: "auto",
                },
                {
                  label: <>cover</>,
                  value: "cover",
                },
                {
                  label: <>contain</>,
                  value: "contain",
                },
              ]}
              width="w-40"
              customContent={
                <Button className="h-7 w-[100%] flex justify-between px-2 text-xs bg-white hover:bg-white text-gray-500">
                  <span className="mr-3">auto</span>
                  <ChevronDown size={12} />
                </Button>
              }
            />
          </div>
        </div>
        <div className=' w-[49%]'>
          <Label className="text-gray-500 text-xs ml-1">
            Background Clip
          </Label>
          <div className="mt-1">
            <InputDropDowns
              data={[
                {
                  label: <>clip-border</>,
                  value: "clip-border",
                },
                {
                  label: <>clip-padding</>,
                  value: "clip-padding",
                },
                {
                  label: <>clip-content</>,
                  value: "clip-content",
                },
                {
                  label: <>clip-text</>,
                  value: "clip-text",
                },
              ]}
              width="w-40"
              customContent={
                <Button className="h-7 w-[100%] flex justify-between px-2 text-xs bg-white hover:bg-white text-gray-500">
                  <span className="mr-3">auto</span>
                  <ChevronDown size={12} />
                </Button>
              }
            />
          </div>
        </div>
      </div>
      <div className="mb-3">
        <Label className="text-gray-500 text-xs ml-1">
          Background Gradient
        </Label>
        <div className="mb-3 flex items-center">
          <div className="relative mr-2">
            <Input placeholder="33.33%" className="h-8 pl-8 text-xs mt-1" />
            <div className="absolute top-[6px] left-1.5">
              <ColorPickerModal />
            </div>
          </div>
          <div className="relative mr-2">
            <Input placeholder="33.33%" className="h-8 pl-8 text-xs mt-1" />
            <div className="absolute top-[6px] left-1.5">
              <ColorPickerModal />
            </div>
          </div>
          <div className="relative">
            <Input placeholder="33.33%" className="h-8 pl-8 text-xs mt-1" />
            <div className="absolute top-[6px] left-1.5">
              <ColorPickerModal />
            </div>
          </div>
        </div>
      </div>
    </AccordionContent>
  </AccordionItem>
  )
}

export default StyleBackground
