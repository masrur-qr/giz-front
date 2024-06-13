"use client";
import EnglishProjects from "@/components/EnglishProjects/EnglishProjects";
import Links from "@/components/Links/Links";
import Location from "@/components/Location/Location";
import MediaFiles from "@/components/MediaFiles/MediaFiles";
import RussianProjects from "@/components/RussianProjects/RussianProjects";
import TajikProjects from "@/components/TajikProjects/TajikProjects";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/shadcn/ui/input";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function AddProjectPage() {
  const [selectedOption, setSelectedOption] = useState("Startups");
  const [districtOption, setDistrictOption] = useState("Хорог");

  const englishName = useRef<any>(null);
  const englishDescription = useRef<any>(null);

  const tajikName = useRef<any>(null);
  const tajikDescription = useRef<any>(null);

  const russianName = useRef<any>(null);
  const russianDescription = useRef<any>(null);

  const town = useRef<any>(null);
  const coordinations = useRef<any>(null);

  const defaultLink = useRef<any>(null);

  const [inputs, setInputs] = useState<any>([]);

  const handleAddClick = () => {
    const newKey = Date.now();
    setInputs([...inputs, { key: newKey, value: "" }]);
  };

  const handleInputChange = (event: any, key: any) => {
    const newInputs = inputs.map((input: any) =>
      input.key === key ? { ...input, value: event.target.value } : input
    );
    setInputs(newInputs);
  };

  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  const [files, setFiles] = useState<FileList | null>(null);

  const handleFilesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(event.target.files);
  };

  const router = useRouter();

  const handleUploadNews = async (event: React.FormEvent) => {
    event.preventDefault();
    const images: any = {};
    const medias: any = [];

    if (file) {
      let banner = await FileREader(file);
      images.banner = banner;

      const formData = new FormData();
      formData.append("file", file);
    }

    if (files && files.length > 0) {
      const promises = Array.from(files).map(async (file, index) => {
        let image = await FileREader(file);
        let imageObject = {
          Title: `image_${index}`,
          ImageUrl: image,
        };
        medias.push(imageObject);
      });

      await Promise.all(promises);
    }

    console.log("uploaded");

    const links = inputs.map((input: any) => input.value);
    links.unshift(defaultLink.current.value);

    const data = {
      Category: selectedOption,
      English: {
        Name: englishName.current.value,
        Description: englishDescription.current.value,
      },
      Tajik: {
        Name: tajikName.current.value,
        Description: tajikDescription.current.value,
      },
      Russian: {
        Name: russianName.current.value,
        Description: russianDescription.current.value,
      },
      Links: links,
      Location: {
        District: districtOption,
        Village: town.current.value,
        Coordinates: coordinations.current.value,
      },
      BannerUrl: images.banner,
      MediaFiles: medias,
    };

    console.log(data);

    const response = await fetch("http://127.0.0.1:9595/add/project", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });

    // return response.json();
    router.replace("admin-news");
  };

  async function FileREader(File: any) {
    console.log("File", File);

    return new Promise((resolve, reject) => {
      let fileData = File;
      let reader = new FileReader();

      reader.onloadend = function () {
        let rawData: any = reader.result;

        let chunkSize = 100536; // Set chunk size
        let offset = 0;
        let bt = "";

        while (offset < rawData.byteLength) {
          let chunk: any = rawData.slice(offset, offset + chunkSize);
          bt += btoa(String.fromCharCode.apply(null, new Uint8Array(chunk)));
          offset += chunkSize;
        }

        resolve(bt);
      };

      reader.onerror = function () {
        reject(reader.error);
      };

      reader.readAsArrayBuffer(fileData);
    });
  }

  return (
    <main className="bg-[#D3D3D3]">
      <div className="wrapper__page-flow">
        <div className="flex items-center justify-between py-10">
          <h1 className="uppercase text-[26px] font-bold">project DETAILS</h1>
          <div>
            <label
              htmlFor=""
              className="text-[#666666] font-semibold text-[18px] inline-block mb-2"
            >
              Category*
            </label>
            {/* <Input className="w-[450px]" type="text" placeholder="Email" /> */}
            <Select
              value={selectedOption}
              onValueChange={(value) => {
                setSelectedOption(value);
              }}
            >
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a Category" />
              </SelectTrigger>
              <SelectContent>
                {/* <SelectGroup>
                  <SelectLabel>Russain</SelectLabel>
                  <SelectItem value="Стартапы">Стартапы</SelectItem>
                  <SelectItem value="Инновационные проект">
                    Инновационные проект
                  </SelectItem>
                  <SelectItem value="Социальный проект">
                    Социальный проект
                  </SelectItem>
                  <SelectItem value="Технологический проект">
                    Технологический проект
                  </SelectItem>
                  <SelectItem value="Экология">Экология</SelectItem>
                  <SelectItem value="Образования">Образования</SelectItem>
                  <SelectItem value="Здравоохранения">
                    Здравоохранения
                  </SelectItem>
                  <SelectItem value="Туризм">Туризм</SelectItem>
                  <SelectItem value="Культура и искусства">
                    Культура и искусства
                  </SelectItem>
                  <SelectItem value="Сельское хозяйства">
                    Сельское хозяйства
                  </SelectItem>
                  <SelectItem value="Малый и средный бизнес">
                    Малый и средный бизнес
                  </SelectItem>
                  <SelectItem value="Информационные технологии">
                    Информационные технологии
                  </SelectItem>
                  <SelectItem value="Производства и промышленности">
                    Производства и промышленности
                  </SelectItem>
                  <SelectItem value="Услуги">Услуги</SelectItem>
                  <SelectItem value="Торговля">Торговля</SelectItem>
                </SelectGroup> */}
                <SelectGroup>
                  <SelectLabel>Categories</SelectLabel>
                  <SelectItem value="Startups">Startups</SelectItem>
                  <SelectItem value="nnovative project">
                    Innovative project
                  </SelectItem>
                  <SelectItem value="Social project">Social project</SelectItem>
                  <SelectItem value="Technological project">
                    Technological project
                  </SelectItem>
                  <SelectItem value="Ecology">Ecology</SelectItem>
                  <SelectItem value="Education">Education</SelectItem>
                  <SelectItem value="Healthcare">Healthcare</SelectItem>
                  <SelectItem value="Tourism">Tourism</SelectItem>
                  <SelectItem value="Culture and arts">
                    Culture and arts
                  </SelectItem>
                  <SelectItem value="Agriculture">Agriculture</SelectItem>
                  <SelectItem value="Small and medium business">
                    Small and medium business
                  </SelectItem>
                  <SelectItem value="Information Technology">
                    Information Technology
                  </SelectItem>
                  <SelectItem value="Manufacturing and industry">
                    Manufacturing and industry
                  </SelectItem>
                  <SelectItem value="Services">Services</SelectItem>
                  <SelectItem value="Trade">Trade</SelectItem>
                </SelectGroup>
                {/* <SelectGroup>
                  <SelectLabel>Tajik</SelectLabel>
                  <SelectItem value="Стартапҳо">Стартапҳо</SelectItem>
                  <SelectItem value="Лоиҳаи инноватсионӣ">
                    Лоиҳаи инноватсионӣ
                  </SelectItem>
                  <SelectItem value="Лоиҳаи иҷтимоӣ">Лоиҳаи иҷтимоӣ</SelectItem>
                  <SelectItem value="Лоиҳаи технологӣ">
                    Лоиҳаи технологӣ
                  </SelectItem>
                  <SelectItem value="Экология">Экология</SelectItem>
                  <SelectItem value="Маориф">Маориф</SelectItem>
                  <SelectItem value="Тандурустӣ">Тандурустӣ</SelectItem>
                  <SelectItem value="Туризм">Туризм</SelectItem>
                  <SelectItem value="Фарҳанг ва санъат">
                    Фарҳанг ва санъат
                  </SelectItem>
                  <SelectItem value="Хоҷагии қишлоқ">Хоҷагии қишлоқ</SelectItem>
                  <SelectItem value="Соҳибкории хурд ва миёна">
                    Соҳибкории хурд ва миёна
                  </SelectItem>
                  <SelectItem value="Технологияи иттилоотӣ">
                    Технологияи иттилоотӣ
                  </SelectItem>
                  <SelectItem value="Истехсолот ва саноат">
                    Истехсолот ва саноат
                  </SelectItem>
                  <SelectItem value="Хизматрасонӣ">Хизматрасонӣ</SelectItem>
                  <SelectItem value="Савдо">Савдо</SelectItem>
                </SelectGroup> */}
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* <EnglishProjects /> */}
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
                ref={englishName}
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
                ref={englishDescription}
              />
            </div>
          </div>
        </section>
        {/* <TajikProjects /> */}
        <section className="mb-[100px]">
          <div className="flex items-center gap-[30px]">
            <div className="w-[100px] h-[10px] bg-[#C30F08]"></div>
            <h1 className="text-[#C30F08] text-[45px] font-semibold">TJ</h1>
            <div className="w-[100%] h-[10px] bg-[#C30F08]"></div>
          </div>
          <div className="flex flex-col justify-start items-start gap-[50px]">
            <div>
              <label
                htmlFor=""
                className="text-[#000] font-medium text-[18px] inline-block mb-2"
              >
                Сарлавҳа*
              </label>
              <Input
                className="w-[400px]"
                type="text"
                placeholder="Type the new’s name..."
                ref={tajikName}
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="text-[#000] font-medium text-[18px] inline-block mb-2"
              >
                Маълумоти бештар*
              </label>
              <Textarea
                placeholder="Type your message here."
                className="w-[600px]"
                ref={tajikDescription}
              />
            </div>
          </div>
        </section>
        {/* <RussianProjects /> */}
        <section className="mb-[100px]">
          <div className="flex items-center gap-[30px]">
            <div className="w-[100px] h-[10px] bg-[#C30F08]"></div>
            <h1 className="text-[#C30F08] text-[45px] font-semibold">RU</h1>
            <div className="w-[100%] h-[10px] bg-[#C30F08]"></div>
          </div>
          <div className="flex flex-col justify-start items-start gap-[50px]">
            <div>
              <label
                htmlFor=""
                className="text-[#000] font-medium text-[18px] inline-block mb-2"
              >
                Название*
              </label>
              <Input
                className="w-[400px]"
                type="text"
                placeholder="Type the new’s name..."
                ref={russianName}
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="text-[#000] font-medium text-[18px] inline-block mb-2"
              >
                Описание*
              </label>
              <Textarea
                placeholder="Type your message here."
                className="w-[600px]"
                ref={russianDescription}
              />
            </div>
          </div>
        </section>
        <div className="flex items-start justify-between gap-[50px]">
          {/* <Links /> */}
          <section className="mb-10">
            <h1 className="text-[24px] font-bold mb-2">Links</h1>
            <div className="flex items-center gap-5 mb-5">
              <Input
                className="w-[500px]"
                type="text"
                placeholder="Введите название новости..."
                ref={defaultLink}
              />
              <button className="bg-[#C30F08] text-white px-5 py-2 rounded-md">
                ADD
              </button>
            </div>
            {inputs.map((input: any) => (
              <div key={input.key} className="flex items-center gap-5 mb-5">
                <Input
                  className="w-[500px]"
                  type="text"
                  placeholder="Введите название новости..."
                  value={input.value}
                  onChange={(e) => handleInputChange(e, input.key)}
                />
                <button className="bg-[#C30F08] text-white px-5 py-2 rounded-md">
                  ADD
                </button>
              </div>
            ))}
            <div>
              <button
                onClick={handleAddClick}
                className="bg-[#C30F08] text-white h-[50px] w-[50px] flex items-center justify-center rounded-lg text-[20px] mt-5 hover:bg-[#c30e08d8]"
              >
                +
              </button>
            </div>
          </section>
          {/* <Location /> */}
          <section>
            <h1 className="text-[24px] font-bold mb-2">Location Details</h1>
            <div className="mt-10">
              <label
                htmlFor=""
                className="text-[#000] font-medium text-[18px] inline-block mb-2"
              >
                District*
              </label>
              <Select
                value={districtOption}
                onValueChange={(value) => {
                  setDistrictOption(value);
                }}
              >
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="Select a Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Russain</SelectLabel>
                    <SelectItem value="Хорог">Хорог</SelectItem>
                    <SelectItem value="Дарваз">Дарваз</SelectItem>
                    <SelectItem value="Вандж">Вандж</SelectItem>
                    <SelectItem value="Рушан">Рушан</SelectItem>
                    <SelectItem value="Шугнан">Шугнан</SelectItem>
                    <SelectItem value="Рошткала">Рошткала</SelectItem>
                    <SelectItem value="Ишкашим">Ишкашим</SelectItem>
                    <SelectItem value="Мургаб">Мургаб</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>English</SelectLabel>
                    <SelectItem value="Khorog">Khorog</SelectItem>
                    <SelectItem value="Darvoz">Darvoz</SelectItem>
                    <SelectItem value="Vanj">Vanj</SelectItem>
                    <SelectItem value="Rushon">Rushon</SelectItem>
                    <SelectItem value="Shughnon">Shughnon</SelectItem>
                    <SelectItem value="Roshtqal">Roshtqal'a</SelectItem>
                    <SelectItem value="Ishkoshim">Ishkoshim</SelectItem>
                    <SelectItem value="Murghob">Murghob</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Tajik</SelectLabel>
                    <SelectItem value="Хоруғ">Хоруғ</SelectItem>
                    <SelectItem value="Дарвоз">Дарвоз</SelectItem>
                    <SelectItem value="Ванҷ">Ванҷ</SelectItem>
                    <SelectItem value="Рушон">Рушон</SelectItem>
                    <SelectItem value="Шуғнон">Шуғнон</SelectItem>
                    <SelectItem value="Роштқалъа">Роштқалъа</SelectItem>
                    <SelectItem value="Ишкошим">Ишкошим</SelectItem>
                    <SelectItem value="Мурғоб">Мурғоб</SelectItem>
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
                ref={town}
              />
            </div>
            <div className="mt-5">
              <Input
                className="w-[400px]"
                type="text"
                placeholder="example: 37.490273, 71.546686"
                ref={coordinations}
              />
            </div>
          </section>
        </div>
        <section>
          <p className="text-[20px] font-semibold mb-2">Banner*</p>
          <p className="text-[#737171]">1362x450</p>
          <label
            htmlFor="add-banner"
            className="bg-[#C30F08] text-white px-6 py-3 rounded-md mt-3 inline-block cursor-pointer"
          >
            browse file
          </label>
          <input
            type="file"
            id="add-banner"
            className="opacity-0"
            onChange={handleFileChange}
          />
        </section>
        {/* <MediaFiles /> */}
        <section className="mt-[50px]">
          <h1 className="text-[24px] font-bold mb-2 uppercase">
            media files (png, jpg)
          </h1>
          <p className="text-[#737171]">max size 2 mb</p>
          <label
            htmlFor="media"
            className="bg-[#C30F08] text-white px-6 py-3 rounded-md mt-3 inline-block cursor-pointer"
          >
            Choose photo
          </label>
          <input
            onChange={handleFilesChange}
            type="file"
            id="media"
            className="opacity-0"
            multiple
          />
        </section>
        <button
          onClick={handleUploadNews}
          className="my-10 bg-[#C30F08] text-white px-6 py-3 rounded-lg active:bg-[#c30e08d4]"
        >
          Upload
        </button>
      </div>
    </main>
  );
}
