const SectionMeet = (props) => {
    const {
        title = "Hacktiv8 Meetup",
        locationVal = "Jakarta, Indonesia",
        membersVal = "1,078",
        organizerVal = "Muhaemin Iskandar"
    } = props

    return (
        <a className="flex flex-row mx-12 my-10 items-center justify-items-start place-items-center p-2 bg-white rounded-lg border shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover rounded-l-lg mr-6" src="https://source.unsplash.com/random/280x275/?meeting" alt="gambar" />
            <div className="flex flex-col justify-between p-4 ">
                <strong className="mb-2 text-4xl tracking-tight text-gray-900 dark:text-white">{title}</strong>
                <div className="flex flex-row mb-3 gap-4 font-normal text-gray-700 dark:text-gray-400">
                    <div>
                        <p>Location</p>
                        <p>Members</p>
                        <p>Organizer</p>
                    </div>
                    <div>
                        <p>{locationVal}</p>
                        <p>{membersVal}</p>
                        <p>{organizerVal}</p>
                    </div>
                </div>
                <button
                    type="button"
                    className="text-white font-semibold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center"
                >
                    Join
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="sr-only">Icon description</span>
                </button>

            </div>
        </a>
    )
}


export default SectionMeet