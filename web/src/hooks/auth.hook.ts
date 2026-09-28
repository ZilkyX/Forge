import { useAuth } from "@clerk/react";
import { useEffect } from "react";
import { axiosInstance } from "@/lib/axios";

export const useSyncUser = () => {
  const { isSignedIn, getToken } = useAuth();

  useEffect(() => {
    if (!isSignedIn) return;

    const sync = async () => {
      const token = await getToken();

      console.log("Token:", token);

      await axiosInstance.post(
        "/user/sync",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
    };

    sync().catch(console.error);
  }, [isSignedIn, getToken]);
};
