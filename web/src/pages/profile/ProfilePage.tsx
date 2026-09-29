import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { useUser } from "@clerk/react";

const ProfilePage = () => {
  const { user } = useUser();
  return (
    <div className="min-h-screen">
      <Card>
        <CardContent>
          <Avatar className={"size-40"}>
            <AvatarImage src={user?.imageUrl} alt="User Profile" />
          </Avatar>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
