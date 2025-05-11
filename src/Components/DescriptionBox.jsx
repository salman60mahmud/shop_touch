const DescriptionBox = () => {
    return (
        <div className="my-10 sm:my-20 lg:my-30 mx-4 sm:mx-8 lg:mx-30">
            <div className="flex">
                <div className="flex flex-wrap">
                    <h3 className="flex items-center justify-center font-semibold h-12 sm:h-14 lg:h-18 w-28 sm:w-36 lg:w-45 border-1 text-sm sm:text-base">Descriptions</h3>
                    <h3 className="flex items-center justify-center font-semibold h-12 sm:h-14 lg:h-18 w-28 sm:w-36 lg:w-45 border-1 text-[#555] bg-[#FBFBFB] text-sm sm:text-base">Reviews (122)</h3>
                </div>
            </div>
            <div className="flex flex-col gap-4 sm:gap-6 border-1 p-4 sm:p-6 lg:p-10 pb-8 lg:pb-15">
                <p className="text-sm sm:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, fugit quos! Nesciunt vero expedita nam libero veritatis nihil voluptas enim modi, quia molestias ex, harum, aperiam tenetur repellat illum? Quisquam, aut ea. Facere eos quibusdam perferendis, ipsam, odit est velit praesentium sit reiciendis nemo corporis cum enim excepturi vero iusto. Officia tempora numquam deserunt tenetur enim. Accusantium similique quidem et eaque ducimus officia dolores sint ullam odio repellat. Maiores, rem suscipiti fugiat eum beatae, tenetur ab blanditiis deleniti?</p>
                <p className="text-sm sm:text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum reiciendis vitae autem voluptatum, iste assumenda rerum optio cupiditate architecto voluptates?</p>
            </div>
        </div>
    );
};

export default DescriptionBox;