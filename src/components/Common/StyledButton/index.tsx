import arrow from '/general/arrow.svg'

export default function StyledButton({title}:{title:string}) {
    return (
        <button className="flex items-center justify-between  w-48 h-16 border-2 border-black" style={{borderRadius:'100px'}}>
            <span className="pl-4 text-base font-secondary text-black font-black">{title}</span>
            <div className="bg-mainGreen mr-2 h-12 w-12 rounded-full flex items-center justify-center">
                <img src={arrow}/>
            </div>
        </button>
    )
}