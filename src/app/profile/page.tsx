import Heading from "../components/Heading/Heading";
import Linkers from "../components/Linkers/Linkers";

const Profile = () => {
    return (
        <div className="">
            <Heading headingLineOne="Hi, I'm" headingLineTwo="Adekunle Oladosu" headingDescription="Easily track, analyze, and optimize your investments in real-time. Our intuitive portfolio management tools provide personalized insights, helping you make data-driven decisions to grow your assets." mouseText="Read My Story" scrollToLocation=""/>
            <Linkers/>
        </div>
    )
}

export default Profile;