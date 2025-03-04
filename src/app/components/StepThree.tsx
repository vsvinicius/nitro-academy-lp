import Image from 'next/image';

export default function StepThree() {
  return (
    <div className="bg-theme-orange container h-[46rem] rounded-t-2xl flex flex-col justify-center gap-10 pl-10 font-gilroy-light font-bold text-3xl">
      <div>
        <Image src="correct.svg" width={75} height={75} alt="icone correto" className='w-20 h-20' />
        <p className='w-80 pt-5'>Escolha suas matérias a cada semestre</p>
      </div>
      <div>
        <Image src="target.svg" width={75} height={75} alt="icone flecha ao alvo" className='w-20 h-20' />
        <p className='w-80 pt-5'>Aprenda o que realmente interessa</p>
      </div>
      <div>
        <Image src="online-class.svg" width={75} height={75} alt="icone aula online" className='w-20 h-20' />
        <p className='w-80 pt-5'>Aulas 100% online, interativas e ao vivo</p>
      </div>

    </div>
  )
}
