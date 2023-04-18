import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            Wonil Lee
          </p>
          <p className="font-playfair text-md text-yellow">
            <div>©2023. </div>
            <div>Made by Wonil Lee using JavaScript, React and Tailwind CSS styling frame </div> or motion for animations and react hook form for form and validation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;