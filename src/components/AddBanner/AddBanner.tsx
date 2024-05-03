export default function AddBanner() {
  return (
    <section>
      <p className="text-[20px] font-semibold mb-2">Banner*</p>
      <p className="text-[#737171]">1362x450</p>
      <label
        htmlFor="add-banner"
        className="bg-[#C30F08] text-white px-6 py-3 rounded-md mt-3 inline-block cursor-pointer"
      >
        browse file
      </label>
      <input type="file" id="add-banner" className="opacity-0" />
    </section>
  );
}
