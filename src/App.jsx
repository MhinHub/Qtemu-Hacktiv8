import SectionMeet from "./components/SectionMeet"
import SectionMember from "./components/SectionMember"
import AboutMeet from "./components/AboutMeet"
import SectionNextMeet from "./components/SectionNextMeet"
import SectionPastMeet from "./components/SectionPastMeet"
import Navbar from "./components/Navbar"


function App() {

  return (
    <>
      <Navbar />
      <SectionMeet />
      <SectionNextMeet />
      <AboutMeet />
      <SectionMember />
      <h3 className="font-extrabold text-2xl mx-12">Past Meet</h3>
      <div className="flex flex-row">
        <SectionPastMeet />
        <SectionPastMeet dateTitle={"28 Maret 2023"} />
        <SectionPastMeet dateTitle={"29 Maret 2023"} />
      </div>
      <footer className="py-3 flex justify-center">
        <p>Copyright Muhis 2022</p>
      </footer>
    </>
  )
}

export default App
