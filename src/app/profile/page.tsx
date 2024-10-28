import Feedback from "../components/Feedback/Feedback";
import Heading from "../components/Heading/Heading";
import Linkers from "../components/Linkers/Linkers";
import ProfileInfo from "../components/ProfileInfo/ProfileInfo";
import Services from "../components/Services/Services";

const Profile = () => {
    return (
        <div className="">
            <Heading headingLineOne="Hi, I'm" headingLineTwo="Adekunle Oladosu" headingDescription="Easily track, analyze, and optimize your investments in real-time. Our intuitive portfolio management tools provide personalized insights, helping you make data-driven decisions to grow your assets." mouseText="Read My Story" scrollToLocation="#story" />
            <ProfileInfo />
            <Services />
            <Feedback />
            <Linkers />
           


        </div>
    )
}

export default Profile;