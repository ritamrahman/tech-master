import React from "react";

const Blogs = () => {
  return (
    <section className="bg-white dark:bg-midnight px-10 py-10">
      <div className="dark:bg-gray-800 dark:text-gray-100 py-5 space-y-6">
        {/* qsn-1 */}
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm text-midnight bg-dimWhite dark:bg-fadeMidNight dark:text-white">
          <div className="mt-3">
            <h1 className="text-2xl font-bold hover:underline">what is cors?</h1>
            <p className="mt-2">
              Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be
              requested from another domain outside the domain from which the first resource was served. A web page may
              freely embed cross-origin images, stylesheets, scripts, iframes, and videos.
            </p>
          </div>
        </div>
        {/* qsn-2 */}
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-dimWhite text-midnight dark:bg-fadeMidNight dark:text-white">
          <div className="mt-3">
            <h1 className="text-2xl font-bold hover:underline">
              Why are you using firebase? What other options do you have to implement authentication?
            </h1>
            <p className="mt-2">
              Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to
              authenticate users to your app. It supports authentication using passwords, phone numbers, popular
              federated identity providers like Google, Facebook and Twitter, and more.
            </p>
          </div>
        </div>
        {/* qsn-3 */}
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-dimWhite text-midnight dark:bg-fadeMidNight dark:text-white">
          <div className="mt-3">
            <h1 className="text-2xl font-bold hover:underline">How does the private route work?</h1>
            <p className="mt-2">
              The private route component is similar to the public route, the only change is that redirect URL and
              authenticate condition. If the user is not authenticated he will be redirected to the login page and the
              user can only access the authenticated routes If he is authenticated (Logged in).
            </p>
          </div>
        </div>
        {/* qsn-4 */}
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-dimWhite text-midnight dark:bg-fadeMidNight dark:text-white">
          <div className="mt-3">
            <h1 className="text-2xl font-bold hover:underline">What is Node? How does Node work?</h1>
            <p className="mt-2">
              It is a used as backend service where javascript works on the server-side of the application. This way
              javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts
              javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
