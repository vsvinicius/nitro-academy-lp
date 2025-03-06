export default function StepThirteen() {
  return (
    <div className="px-9 bg-theme-orange py-16">
      <h1 className="font-gilroy-regular font-bold text-4xl pr-20">
        Pronto para transformar tempo livre em talento?
      </h1>
      <h2 className="font-bold text-xl text-background mt-4">Preencha o formulário abaixo e aguarde nosso contato:</h2>
      <div className="flex flex-col gap-2 mt-14 mb-10">
        <input placeholder="Nome" className="w-full bg-[#e36a36] text-background placeholder:text-background py-2 px-4 placeholder:text-xl rounded-md" />
        <input placeholder="Data de Nascimento" className="w-full bg-[#e36a36] text-background placeholder:text-background py-2 px-4 placeholder:text-xl rounded-md" />
        <input placeholder="Estado" className="w-full bg-[#e36a36] text-background placeholder:text-background py-2 px-4 placeholder:text-xl rounded-md" />
        <input placeholder="Cidade" className="w-full bg-[#e36a36] text-background placeholder:text-background py-2 px-4 placeholder:text-xl rounded-md" />
        <input placeholder="Escolaridade" className="w-full bg-[#e36a36] text-background placeholder:text-background py-2 px-4 placeholder:text-xl rounded-md" />
        <input placeholder="Curso" className="w-full bg-[#e36a36] text-background placeholder:text-background py-2 px-4 placeholder:text-xl rounded-md" />
        <input placeholder="E-mail" className="w-full bg-[#e36a36] text-background placeholder:text-background py-2 px-4 placeholder:text-xl rounded-md" />
        <input placeholder="Celular" className="w-full bg-[#e36a36] text-background placeholder:text-background py-2 px-4 placeholder:text-xl rounded-md" />
      </div>
      <button className="bg-background text-theme-orange py-2 px-4 text-lg rounded-md">Quero acelerar</button>
    </div>
  )
}
