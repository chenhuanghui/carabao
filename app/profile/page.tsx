import { getCurrentUser, retriveUser } from "@/actions/user.action";
import ProfileClient from "./_components/profile-client";

const ProfilePage: React.FC = async () => {

    const user = await getCurrentUser()
    // console.log("user: ", user);
    return (
        <ProfileClient 
            user={user}
        />
    )
}

export default ProfilePage;