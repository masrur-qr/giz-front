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

export default function Location() {
  return (
    <section>
      <h1 className="text-[24px] font-bold mb-2">Location Details</h1>
      <div className="mt-10">
        <label
          htmlFor=""
          className="text-[#000] font-medium text-[18px] inline-block mb-2"
        >
          District*
        </label>
        <Select>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select a Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Russain</SelectLabel>
              <SelectItem value="est">Хорог</SelectItem>
              <SelectItem value="cst">Дарваз</SelectItem>
              <SelectItem value="mst">Вандж</SelectItem>
              <SelectItem value="pst">Рушан</SelectItem>
              <SelectItem value="akst">Шугнан</SelectItem>
              <SelectItem value="hst">Рошткала</SelectItem>
              <SelectItem value="hst">Ишкашим</SelectItem>
              <SelectItem value="hst">Мургаб</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>English</SelectLabel>
              <SelectItem value="est">Khorog</SelectItem>
              <SelectItem value="cst">Darvoz</SelectItem>
              <SelectItem value="mst">Vanj</SelectItem>
              <SelectItem value="pst">Rushon</SelectItem>
              <SelectItem value="akst">Shughnon</SelectItem>
              <SelectItem value="hst">Roshtqal'a</SelectItem>
              <SelectItem value="hst">Ishkoshim</SelectItem>
              <SelectItem value="hst">Murghob</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Tajik</SelectLabel>
              <SelectItem value="est">Хоруғ</SelectItem>
              <SelectItem value="cst">Дарвоз</SelectItem>
              <SelectItem value="mst">Ванҷ</SelectItem>
              <SelectItem value="pst">Рушон</SelectItem>
              <SelectItem value="akst">Шуғнон</SelectItem>
              <SelectItem value="hst">Роштқалъа</SelectItem>
              <SelectItem value="hst">Ишкошим</SelectItem>
              <SelectItem value="hst">Мурғоб</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-10">
        <label
          htmlFor=""
          className="text-[#000] font-medium text-[18px] inline-block mb-2"
        >
          Town/Village*
        </label>
        <Input
          className="w-[400px]"
          type="text"
          placeholder="Type Town/Village..."
        />
      </div>
      <div className="mt-5">
        <Input
          className="w-[400px]"
          type="text"
          placeholder="example: 37.490273, 71.546686"
        />
      </div>
    </section>
  );
}
