import { Card, Button } from "flowbite-react"
const CardPastMeet = (props) => {
    const {
        dateTitle = "27 Maret 2023",
        meet = "#20 Meetup with Tokopedia",
        countWent = "30",
    } = props
    return (
        <section className="flex items-center mx-14 mb-10">
            <Card href="#Past Meet">
                <div>
                    <strong>{dateTitle}</strong>
                    <hr />
                    <p>{meet}</p>
                    <p>{countWent} went</p>
                    <Button className="px-8">View</Button>
                </div>
            </Card>
        </section>
    )
}

export default CardPastMeet