/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import emailjs from "@emailjs/browser";
import { Form, Formik, useField } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const MyTextField = ({ textarea = false, label, ...props }) => {
  const [field, meta] = useField(props);

  const basicProps = {
    className:
      "bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium",
    ...field,
    ...props,
  };

  return (
    <>
      <label className="flex flex-col">
        <span className="text-white font-medium mb-4">{label}</span>
        {textarea ? <textarea {...basicProps} /> : <input {...basicProps} />}
        {meta.touched && meta.error ? (
          <span className="max-w-max text-red-600 mt-2 pl-6 rounded-lg outlined-none font-normal">
            {meta.error}
          </span>
        ) : null}
      </label>
    </>
  );
};

const Contact = () => {
  const initialForm = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your name"),
    email: Yup.string().required("Please enter your email").email(),
    message: Yup.string().required("Please enter your message"),
  });

  const handleFormSubmit = async (values, { resetForm }) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          to_name: "Illia Lobach",
          from_email: values.email,
          to_email: "ilya.lobatch@gmail.com",
          message: values.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      toast.success(
        `Thank you ${values.name}! I will get back to you as soon as possible.`
      );
      resetForm();
    } catch (error) {
      toast.error("Oops, something went wrong :(");
    }
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <Formik
          enableReinitialize
          initialValues={initialForm}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ isValid, isSubmitting, dirty }) => (
            <Form className="mt-12 flex flex-col gap-8">
              <MyTextField
                name="name"
                label="Your Name"
                placeholder="What's your name?"
              />
              <MyTextField
                name="email"
                label="Your Email"
                placeholder="What's your email?"
              />
              <MyTextField
                name="message"
                label="Your Message"
                textarea={true}
                rows={4}
                placeholder="What do you want to say?"
              />
              <button
                type="submit"
                disabled={!isValid || !dirty || isSubmitting}
                className={`${
                  !isValid || !dirty || isSubmitting
                    ? "opacity-50"
                    : "opacity-100"
                } bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl`}
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </Form>
          )}
        </Formik>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-[700px] md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
