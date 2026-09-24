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

      const res = await axiosInstance.post(
        "/user/sync",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log("Sync response:", res.data);
    };

    sync().catch(console.error);
  }, [isSignedIn, getToken]);
};
