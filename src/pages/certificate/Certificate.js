


const Certificate = () => {

    return (
       <>
       <div className="space-y-2">
        <h1 className="text-center font-bold text-2xl">Certificates</h1>
        <p className="text-center font-semibold">Boost trust with ISO, GST certificat-Ensuring credibility, quality and compliance.</p>
       </div>
        <div className="grid grid-cols-1 gap-5 p-5">
            {
                [{
                    title: "ISO Certificate",
                    img: "https://res.cloudinary.com/du1stzhac/image/upload/v1769142254/ANIL_ENGINEER-1_page-0001_1_giquz2.jpg"
                }, {
                    title: "GST Certificate",
                    img: "https://res.cloudinary.com/du1stzhac/image/upload/v1769142253/ANIL_ENGNEER_page-0001_ggkcjz.jpg"
                }].map((item, idx) => <div key={idx} className="flex flex-col items-center gap-3">
                    <img src={item.img} className="w-full" />
                    <h1 className="font-bold text-xl">{item.title}</h1>

                </div>)
            }


        </div>
       </>
    )
}

export default Certificate