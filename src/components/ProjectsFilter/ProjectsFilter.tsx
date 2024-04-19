"use client";
import { Input } from "@/shadcn/ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import "./ProjectsFilter.css";

export default function ProjectsFilter() {
  return (
    <section>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <label
            htmlFor=""
            className="text-[#666666] font-semibold text-[18px]"
          >
            Search
          </label>
          <Input
            className="projects__input"
            type="text"
            placeholder="Search..."
          />
        </div>
        <div className="flex items-center gap-5">
          <label
            htmlFor=""
            className="text-[#666666] font-semibold text-[18px]"
          >
            Category
          </label>
          <Select>
            <SelectTrigger className="w-[300px]">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-5">
          <label
            htmlFor=""
            className="text-[#666666] font-semibold text-[18px]"
          >
            District
          </label>
          <Select>
            <SelectTrigger className="w-[300px]">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>District</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <button className="border border-[#666666] text-[#666666] uppercase px-[35px] py-[7px] rounded-full hover:bg-[#666666] hover:text-[#fff] transition-all active:bg-[#414040]">
          search
        </button>
      </div>
    </section>
  );
}
