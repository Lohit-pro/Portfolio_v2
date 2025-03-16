"use client";

import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import LoadingBar from "react-top-loading-bar";
import Navbar from "../../_components/Navbar";
import SmNavbar from "../../_components/SmNavbar";
import useDelay from "@/app/_hooks/useDelay";
import BuyMeACoffee from "@/app/_components/BuyMeACoffee";
import Qr from "@/app/_components/Qr";

function Contact() {
  const delay1 = useDelay("slide-in-from-top", 0);
  const delay2 = useDelay("slide-in-from-left", 500);
  const delay3 = useDelay("slide-in-from-right", 700);
  const delay4 = useDelay("slide-in-from-left", 900);
  const delay5 = useDelay("slide-in-from-bottom", 1100);
  const delay6 = useDelay("slide-in-from-bottom", 1300);

  const form = useRef<HTMLFormElement>(null);
  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setTheme(savedTheme);
      }
    }
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    setLoadingProgress(30);

    if (form.current) {
      emailjs
        .sendForm(
          "service_thg9at3",
          "template_ho2xgsb",
          form.current,
          "Ucv5GuR46eApwNtcJ"
        )
        .then(
          (result) => {
            console.log(result.text);
            setName("");
            setUserEmail("");
            setSubject("");
            setMessage("");
            alert("Message received! Will revert back to you soon :D");
          },
          (error) => {
            console.log(error.text);
          }
        )
        .finally(() => {
          setLoadingProgress(100);
          setTimeout(() => {
            setLoadingProgress(0);
          }, 2000);
        });
    }
  };

  return (
    <div className="w-full min-h-screen flex dark:bg-dark bg-light transition-all duration-300 flex-col items-center pb-16 overflow-hidden">
      <Navbar navText={"Contact"} />

      <div className="w-full flex-grow pt-[100px] flex flex-col items-center justify-center">
        <span
          className={`text-xl text-center py-4 md:pt-14 text-dark dark:text-light transition-all duration-1000 w-[80%] md:w-[40%] ${delay1 ? delay1 : "hidden"}`}
        >
          Want me in your team?{" "}
          <span className="text-dark dark:text-light transition-all duration-1000">Let&apos;s connect! 🤝</span>
        </span>

        <div className="flex flex-col md:flex-row w-[80%] md:w-[80%] items-center justify-center gap-8 md:gap-16 mt-8 md:-mr-60">
          <section className="w-full md:w-1/2 flex justify-center">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="contact w-full flex flex-col justify-center items-center text-dark dark:text-light transition-all duration-1000"
            >
              <div className="flex flex-col md:flex-row md:justify-between w-full">
                <input
                  className={`my-4 md:w-[55%] hover:md:w-[58%] focus:md:w-[58%] p-2 pl-3 border-[3px] hover:shadow-2xl shadow-secondary rounded-3xl outline-none border-dark dark:border-light focus:dark:border-light focus:border-dark bg-transparent hover:dark:border-light hover:border-dark hover:cursor-pointer transition-all duration-300 ${delay2 ? delay2 : "invisible"}`}
                  type="text"
                  placeholder="Name"
                  name="user_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  className={`my-4 md:w-[40%] hover:md:w-[43%] focus:md:w-[43%] p-2 pl-3 border-[3px] hover:shadow-2xl shadow-secondary rounded-3xl outline-none border-dark dark:border-light focus:dark:border-light focus:border-dark bg-transparent hover:dark:border-light hover:border-dark hover:cursor-pointer transition-all duration-300 ${delay3 ? delay3 : "invisible"}`}
                  type="email"
                  placeholder="Email"
                  name="user_email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                />
              </div>
              <input
                className={`w-full my-4 p-2 pl-3 border-[3px] hover:shadow-2xl shadow-secondary rounded-3xl outline-none border-dark dark:border-light focus:dark:border-light focus:border-dark bg-transparent hover:dark:border-light hover:border-dark hover:cursor-pointer transition-all duration-300 ${delay4 ? delay4 : "invisible"}`}
                type="text"
                placeholder="Subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
              <textarea
                className={`w-full my-4 p-2 pl-3 pb-20 md:pb-28 border-[3px] hover:shadow-2xl shadow-secondary rounded-3xl outline-none border-dark dark:border-light focus:dark:border-light focus:border-dark bg-transparent hover:dark:border-light hover:border-dark hover:cursor-pointer transition-all duration-300 ${delay5 ? delay5 : "invisible"}`}
                placeholder="Your Message goes here!"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <input
                className={`w-fit my-4 py-2 px-4 border-[3px] hover:shadow-2xl shadow-secondary rounded-3xl outline-none text-dark dark:text-light hover:text-dark hover:dark:text-light border-dark dark:border-light focus:dark:border-light focus:border-dark bg-transparent hover:dark:border-light hover:border-dark hover:cursor-pointer transition-all duration-300 ${delay6 ? delay6 : "invisible"}`}
                type="submit"
                value="Send it my way! 🚀"
                disabled={!name || !userEmail || !message}
              />
            </form>
          </section>

          <section className="hidden md:flex md:flex-col items-center justify-center">
            <div className="border-l-2 border-dark dark:border-light h-20 mx-8 mb-2"></div>
            <div className={`dark:text-light text-dark font-extrabold transition-all duration-1000 ${delay3 ? delay3 : "invisible"}`}>
              OR
            </div>
            <div className="border-l-2 border-dark dark:border-light h-20 mx-4 mt-2"></div>
          </section>

          <section className={`hidden md:block w-full md:w-1/2 flex-col justify-center items-center ${delay3 ? delay3 : "invisible"}`}>
            <div className="text-xl ml-5 font-light dark:text-light text-dark -mt-16 pb-2 transition-all duration-1000">
              Scan the QR to email me
            </div>
            <Qr theme={theme} />
          </section>
        </div>

        <LoadingBar
          color="#F06449"
          height={5}
          progress={loadingProgress}
          onLoaderFinished={() => setLoadingProgress(0)}
        />
        <BuyMeACoffee />
        <div className="skills_text w-full flex justify-center items-center text-dark dark:text-light mt-5 text-xs">
          Copyright &copy;2025 Lohit M Kudlannavar
        </div>
        <div className="w-full my-4 lg:hidden">
          <SmNavbar />
        </div>
      </div>
    </div>
  );
}

export default Contact;
