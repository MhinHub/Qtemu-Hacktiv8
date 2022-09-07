import { Card } from "flowbite-react"
import {LazyLoadImage} from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';

const CardMember = (props) => {
    const {
        title = "Organizers",
        name = "Muhaemin Iskandar",
        others = "4 others"
    } = props

    return (
        <section className="mx-12 my-10">
            <h3 className="font-extrabold text-2xl">Member</h3>
            <Card href="#Member">
                <div className="flex justify-items-start">
                    <LazyLoadImage className="rounded-full w-40 h-40 mr-4" src="https://source.unsplash.com/random/383x383/?profile" effect="blur" alt="gambar" />
                    <div>
                        <strong className="text-xl">{title}</strong>
                        <div className="flex justify-content-start mt-16">
                            <p className="mr-4">{name}</p>
                            <p>{others}</p>
                        </div>
                    </div>
                </div>
            </Card>
        </section>
    )
}

export default CardMember