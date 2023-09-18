'use client'
import SceneryIcon from "@/svg/SceneryIcon";
import PictureIcon from '@/svg/PictureIcon'
import { useUserDetails } from "@/hooks/useUserData";
import { User } from "@/types/user";

export const Photo = () => {
  const { user, setUser } = useUserDetails();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      // Create a URL for the selected image
      const imageUrl = URL.createObjectURL(file);

      setUser({
        ...user,
        image: imageUrl,
      });
    }
  };

  return (
    <>
      <div
        className={`w-48 h-48 rounded-xl bg-${
          user?.image ? `cover bg-center` : "accent"
        } flex flex-col items-center justify-center cursor-pointer bg-cover bg-center bg-no-repeat`}
        style={{ backgroundImage: user?.image !== null ? `url(${user?.image})` : "none" }}
      >
        {!user?.image && (
          <>
            <SceneryIcon />
            <div className="text-primary font-semibold">+ Upload Image</div>
          </>
        )}
        {
        user?.image && <div className="w-48 h-48 rounded-xl absolute bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
            <PictureIcon />
            <div className="font-semibold">Change Image</div>
        </div>
      }
      </div>
      <input
        onChange={handleFileChange}
        className="bg-transparent outline-none file:hidden text-transparent w-48 h-48 absolute cursor-pointer"
        title="Profile Picture"
        accept=".jpeg, .jpg, .png"
        aria-label="image upload"
        type="file"
      />
    </>
  );
};
