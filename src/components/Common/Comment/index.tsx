type Props = {img:string,title:string, paragraph:string,name:string,stars:string}

export default function Comment({img,title, paragraph, name, stars}:Props) {
    return (
        <div className="bg-[#F8F8F8] w-[477px] h-96 rounded-3xl px-8 py-10">
            <img src={stars}/>
            <h3 className="font-bold font-secondary text-black text-2xl pt-6">{title}</h3>
            <p className="font-normal font-secondary text-grayText text-xl pt-3">{paragraph}</p>
            <div className="flex items-center pt-6">
                <img src={img} className="pr-4"/>
                <h4 className="font-bold text-black font-secondary text-xl">{name}</h4>
            </div>
        </div>
    )
}