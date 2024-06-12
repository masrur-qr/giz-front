import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function FileREader(File: any) {
  return new Promise((resolve, reject) => {
      let fileData = File.files[0];
      let reader = new FileReader();

      reader.onloadend = function () {
          let rawData: any = reader.result;

          let chunkSize = 100536; // Set chunk size
          let offset = 0;
          let bt = "";

          while (offset < rawData.byteLength) {
              let chunk = rawData.slice(offset, offset + chunkSize);
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