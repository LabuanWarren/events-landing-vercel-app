import { Footer } from '../components/ui/Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1 px-6 py-12 md:px-12 md:py-16 max-w-4xl mx-auto w-full">
        <div className="mb-8">
          <h1 className="display-xs-semibold md:display-sm-semibold lg:display-lg-semibold  mb-2 text-gray-cool-950">A Friendship Turned Creative Collaboration</h1>
        </div>

        <div className="border-t border-gray-200 mb-8"/>

        <section className="mb-10">
          <p className="text-lg-regular text-gray-cool-700 mb-6">
          Like many great stories, this one begins with two friends sharing a vision—and a love for problem-solving. Nathaniel and Warren, both proudly hailing from Davao City, Philippines, combined their talents and passions to create something meaningful.
          </p>
          <p className="text-md-regular text-gray-cool-700 mb-6">
          Nathaniel, a dedicated coder with a knack for transforming ideas into functional mobile applications, envisioned a tool that could simplify personal finance. 
          </p>
          <p className="text-md-regular text-gray-cool-700 mb-6">
          Meanwhile, Warren, who had relocated to Davao City to pursue his career as a UI/UX Designer, shared his expertise in branding, user experience, and illustration. Together, they brought Typid to life.
          </p>
          <p className="text-md-regular text-gray-cool-700 mb-6">
          With Nathaniel tackling the technical backbone and Warren crafting a sleek and user-friendly interface, their collaboration flourished. Typid wasn’t just an app; it was a blend of their shared creativity and commitment to delivering an impactful product. Their journey exemplifies how collaboration can turn ideas into reality - one step at a time.
          </p>
        </section>

        <div className="mb-8"/>
        <p className="text-md-regular text-gray-cool-700 mb-6">
        We are not done yet. We're really just at the beginning of our story.
          </p>
        
      </main>
      <Footer />
    </div>
  );
};
export default About;