import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import { useForm } from "react-hook-form";

const Experience = () => {
  // const testimonialStyles = "mx-auto relative max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2"
  const testimonialStyles =
    "mx-auto relative max-w-[400px] h-[250px] flex flex-col justify-end p-16 mt-48 before:absolute before:top-[-250px] before:-ml-[110px] before:left-1/2";
  const { register, handleSubmit, errors } = useForm();
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section id="experience" className="pt-10 pb-24 ">
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        {/* HEADING */}
        <motion.div
          className="md:w-1/3 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5 text-red">
            EXPERIENCE
          </p>
          <LineGradient width="w-2/5" />

          <p className="mt-10">
            I have experience working at NCR Corporation as a software engineer
            Intern, where I contributed to the development of several successful
            software projects. During my time there, I gained valuable skills in
            software design, programming, and project management.
          </p>
        </motion.div>

        <div className="col-lg-4">
          <motion.div
            className="card"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-body pb-2">
              <form onSubmit={handleSubmit(onSubmit)}>
                <img
                  src="assets/Screen Shot.jpeg"
                  alt="testimonial image"
                  className="w-50 h-50 "
                />
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className={`bg-blue ${testimonialStyles} `}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <img
            src="assets/intern-1.jpeg"
            alt="testimonial image"
            className="w-64 h-64 object-cover ml-auto"
            style={{
              marginTop: "100px",
              marginLeft: "10px",
              height: "2000px",
              width: "2000px",
            }}
          />

          <p className="font-playfair text-6xl"></p>
          <p className="text-center text-xl">
            Removed the un-necessary hardware of Mac Mini Server.
          </p>
        </motion.div>

        <motion.div
          className={`bg-red ${testimonialStyles}  `}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <img
            src="assets/intern-2.jpeg"
            alt="testimonial image"
            className="w-64 h-64 object-cover ml-auto"
            style={{
              marginTop: "100px",
              marginLeft: "10px",
              height: "2000px",
              width: "2000px",
            }}
          />

          <p className="font-playfair text-6xl"> </p>
          <p className="text-center text-xl">
            Used a database to communicate orders from the POS to Kitchen
            Displays.
          </p>
        </motion.div>

        <motion.div
          className={`bg-yellow ${testimonialStyles} `}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <img
            src="assets/intern-3.jpeg"
            alt="testimonial image"
            className="w-64 h-64 object-cover ml-auto"
            style={{
              marginTop: "100px",
              marginLeft: "10px",
              height: "2000px",
              width: "2000px",
            }}
          />

          <p className="font-playfair text-6xl"></p>
          <p className="text-center text-xl">
            Displayed the orders and items of each catagories correctly on the
            POS.
          </p>
        </motion.div>

        <motion.div
          className={`bg-blue ${testimonialStyles}  `}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <img
            src="assets/intern-4.jpeg"
            alt="testimonial image"
            className="w- h-80 object-cover ml-auto"
            style={{
              marginTop: "100px",
              marginLeft: "10px",
              height: "2000px",
              width: "2000px",
            }}
          />
          <p className="font-playfair text-6xl"></p>
          <p className="text-center text-md">
            Implemented a feature on the KDS screen that displays color changes
            over time and indicates which order should be ready first.
          </p>
        </motion.div>

        <motion.div
          className={`bg-red ${testimonialStyles} `}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <img
            src="assets/intern-5.jpeg"
            alt="testimonial image"
            className="w-64 h-64 object-cover ml-auto"
            style={{
              marginTop: "100px",
              marginLeft: "10px",
              height: "2000px",
              width: "2000px",
            }}
          />
          <p className="font-playfair text-6xl"></p>
          <p className="text-center text-md">
            Implemented a feature on the KDS screen that notifies when all
            orders have been completed by pressing the 'bump' option.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
