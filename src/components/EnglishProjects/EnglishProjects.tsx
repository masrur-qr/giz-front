import { Input } from "@/shadcn/ui/input";
import { Textarea } from "../ui/textarea";

export default function EnglishProjects() {
  return (
    <section className="mb-[100px]">
      <div className="flex items-center gap-[30px]">
        <div className="w-[100px] h-[10px] bg-[#C30F08]"></div>
        <h1 className="text-[#C30F08] text-[45px] font-semibold">EN</h1>
        <div className="w-[100%] h-[10px] bg-[#C30F08]"></div>
      </div>
      <div className="flex flex-col justify-start items-start gap-[50px]">
        <div>
          <label
            htmlFor=""
            className="text-[#000] font-medium text-[18px] inline-block mb-2"
          >
            Name*
          </label>
          <Input
            className="w-[400px]"
            type="text"
            placeholder="Type the new’s name..."
          />
        </div>
        <div>
          <label
            htmlFor=""
            className="text-[#000] font-medium text-[18px] inline-block mb-2"
          >
            Description*
          </label>
          <Textarea
            placeholder="Type your message here."
            className="w-[600px]"
          />
        </div>
      </div>
    </section>
  );
}
