import { Card } from "flowbite-react"

const SectionNextMeet = (props) => {
    const {
        title = "Awesome Meetup Event",
        dateVal = "1 September 2022",
        textVal = ""
    } = props

    return (
        <section className="mx-12 my-10">
            <h3 className="font-extrabold text-2xl">Next Meetup</h3>
            <Card href="#">
                <h5 className="text-xl -mb-5 font-bold tracking-tight text-gray-900 dark:text-white" >{title}</h5>
                <p className="text-gray-700">{dateVal}</p>
                <h4>
                    Hello, React Nerd!
                    <br></br>
                    Get Ready for biggest our Meetup Event, React Festival!
                    <br></br>
                    On the meetup we'll have a lot of fun and talk deeply about React. Even, we'll build a Web or Mobile App for Start Up and Small business.
                    <br></br>
                    See you there!
                    <br></br>
                </h4>
            </Card>
        </section>
    )
}

export default SectionNextMeet