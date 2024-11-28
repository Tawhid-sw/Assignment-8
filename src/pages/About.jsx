import React, { useContext, useEffect } from "react";
import { TextContent } from "../contents/GlobalContext";

const About = () => {
  const { setText } = useContext(TextContent);
  useEffect(() => {
    setText("About");
    document.title = "Gadget Haven || About";
  });
  return (
    <main className="container px-4 py-8 mx-auto about-page font-Quicksand">
      <section className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Welcome to GadgetHaven!</h1>
        <p className="text-lg text-gray-700">
          GadgetHaven, we’re more than just a gadget store — we’re your tech
          haven! . we’ve got something for you. Our goal is to make tech
          accessible, exciting, and easy to navigate.
        </p>
      </section>
      <section className="my-8">
        <h2 className="mb-4 text-2xl font-semibold">Why We’re Here</h2>
        <p className="text-gray-700">
          From Gadget Haven you can find anything yop need for your need.
        </p>
      </section>
      <section className="my-8">
        <h2 className="mb-4 text-2xl font-semibold">
          What Makes Us Different?
        </h2>
        <ul className="text-gray-700 list-disc list-inside">
          <li>
            Effortless Shopping: Our easy-to-use categories and filters help you
            find exactly what you need — fast.
          </li>
          <li>
            Smart Features: Stay organized with your Wishlist and Cart, and sort
            products by price in just one click.
          </li>
          <li>
            Insights at a Glance: Check out our Dashboard for cool stats,
            including product prices vs. ratings.
          </li>
          <li>
            Real-Time Notifications: Instant toasts when you add to your cart or
            wishlist — because little wins matter!
          </li>
          <li>
            Your Tech, Your Way: We’re all about making your experience
            seamless, fun, and frustration-free.
          </li>
        </ul>
      </section>
      <section className="my-8">
        <h2 className="mb-4 text-2xl font-semibold">Our Vision</h2>
        <p className="text-gray-700">
          We want to give you the best experience possible. We want to make sure
          you can find what you need, and that you can buy easely in a cost
          effective way.
        </p>
      </section>
      <section className="mt-10 text-center">
        <h3 className="text-lg font-medium">
          Got questions? We're here for you!
        </h3>
        <p className="text-gray-600">
          let’s make your gadget experience awesome.
        </p>
      </section>
    </main>
  );
};

export default About;
