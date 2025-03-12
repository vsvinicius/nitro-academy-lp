export interface CardProps {
    title: string;
    description: string;
    level: string;
    model: string;
    goal: string;
    requirement: string;
    project: string;
    homework: string;
}


export default function Card({ title, description, level, goal, homework, model, project, requirement }: CardProps) {
    return (
        <div className="flex aspect-square items-center justify-center p-6 bg-white rounded-md text-black">
            <div>
                <p className="font-gilroy-extrabold text-lg py-3">{title}</p>
                <p className="font-gilroy-extrabold pt-2">Descrição do Curso:</p>
                <p className="font-gilroy-light">{description}</p>
                <p className="font-gilroy-extrabold pt-4">Nível:</p>
                <p className="font-gilroy-light">{level}</p>
                <p className="font-gilroy-extrabold pt-4">Modelo da Aula:</p>
                <p className="font-gilroy-light"> {model}</p>
                <p className="font-gilroy-extrabold pt-4">Objetivo:</p>
                <p className="font-gilroy-light"> {goal} </p>
                <p className="font-gilroy-extrabold pt-4">Pré-requisitos:</p>
                <p className="font-gilroy-light">{requirement}</p>
                <p className="font-gilroy-extrabold pt-4">Projetos:</p>
                <p className="font-gilroy-light">{project}</p>
                <p className="font-gilroy-extrabold pt-4">Lição de casa:</p>
                <p className="font-gilroy-light">{homework}</p>
            </div>
        </div>
    )
}