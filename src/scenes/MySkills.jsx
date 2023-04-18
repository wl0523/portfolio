import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { useForm } from 'react-hook-form';
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const { register, handleSubmit, errors } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
          
          I have experience with programming languages such as you can see on the right side.
            Additionally, I possess strong communication skills and am able to work effectively in a team environment.
          </p>
        </motion.div>

<div className="col-lg-4">
      <motion.div 
        className="card"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
         <
      div className="card-body pb-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="java">Java</label>
            <div className="progress mb-3">
              <div 
                className="progress-bar bg-danger" 
                role="progressbar" 
                style={{ width: '77%' }}
                aria-valuenow="77" 
                aria-valuemin="0" 
                aria-valuemax="100"
                
              />
             <span className="progress-number2">77%</span>
            </div>
            <label htmlFor="javascript">JavaScript</label>
            <div className="progress mb-3">
              <div 
                className="progress-bar bg-danger" 
                role="progressbar" 
                style={{ width: '90%' }}
                aria-valuenow="25" 
                aria-valuemin="0" 
                aria-valuemax="100"
              />
              <span className="progress-number3">90%</span>
            </div>
            <label htmlFor="css">CSS</label>
            <div className="progress mb-3">
              <div 
                className="progress-bar bg-danger" 
                role="progressbar" 
                style={{ width: '85%' }}
                aria-valuenow="25" 
                aria-valuemin="0" 
                aria-valuemax="100"
              />
              <span className="progress-number4">85%</span>
            </div>
            <label htmlFor="html">HTML</label>
            <div className="progress mb-3">
              <div 
                className="progress-bar bg-danger" 
                role="progressbar" 
                style={{ width: '90%' }}
                aria-valuenow="25" 
                aria-valuemin="0" 
                aria-valuemax="100"
              />
              <span className="progress-number5">90%</span>
            </div>
            <label htmlFor="dart">Dart</label>
            <div className="progress mb-3">
              <div 
                className="progress-bar bg-danger" 
                role="progressbar" 
                style={{ width: '90%' }}
                aria-valuenow="50" 
                aria-valuemin="0" 
                aria-valuemax="100"
              />
              <span className="progress-number6">90%</span>
            </div>
            <label htmlFor="kotlin">Kotlin</label>
            <div className="progress mb-3">
              <div 
                className="progress-bar bg-danger" 
                role="progressbar" 
                style={{ width: '60%' }}
                aria-valuenow="75" 
                aria-valuemin="0" 
                aria-valuemax="100"
              />
              <span className="progress-number">60%</span>
            </div>
            <label htmlFor="c">C</label>
            <div className="progress mb-3">
              <div 
                className="progress-bar bg-danger" 
                role="progressbar" 
                style={{ width: '80%' }}
                aria-valuenow="75" 
                aria-valuemin="0" 
                aria-valuemax="100"
              />
              <span className="progress-number7">80%</span>
            </div>
          
</form>
</div>
</motion.div>
</div>

      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
              Team-Work
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          Communication, Critical Thinking, Listening.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
              App Development
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          Strong coding and development skills in a variety of programming languages,
                            designing the interface in a user-friendly way.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
              Web Development
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Understanding of programming languages including CSS, HTML, and JavaScript,
                            be able to create code that is easy to understand and use.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;