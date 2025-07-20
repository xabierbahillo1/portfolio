import ProfileButton from "./ProfileButton";

const Profile = () => {
  
  return (
    <div>
      <div className="flex items-center justify-between mb-4 space-x-8">
        <div className="flex-1 max-w-[70%]"> {/* Aquí ajustamos el ancho a un 70% */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
            Xabier Bahillo
          </h1>
          <p className="mt-6 text-xl text-gray-800 dark:[&>strong]:text-yellow-200 [&>strong]:text-yellow-500 [&>strong]:font-semibold dark:text-gray-300">
            +5 años de experiencia. <strong>Ingeniero de Software </strong> de Bilbao, España. Especializado en el desarrollo de aplicaciones web.
          </p>
        </div>
        <img
          className="rounded-full shadow-lg h-48 w-48"
          src="/yo.webp"
          alt="Xabier Bahillo"
        />
      </div>
      <nav className="flex flex-wrap gap-4 mt-8">
        <ProfileButton 
          href="mailto:xabierbahillo1@gmail.com"
          text="Contáctame"
        />
        <ProfileButton
         href="https://linkedin.com/in/xabierbahillo"
         text="LinkedIn"
        />
        <ProfileButton
         href="https://github.com/xabierbahillo1"
         text="Github"
        />
      </nav>
    </div>
  );
};

export default Profile;
