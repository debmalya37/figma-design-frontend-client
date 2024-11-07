import React from 'react';
import bottomFullImage from "../assets/2nd-Section.png";

const About = () => {
  return (
    <section id="about" className="relative bg-orange-500 text-white text-center py-16 px-4 h-[100vh] pt-16 font-helvetica">
      {/* Title with emphasis */}
      <h2 className="font-bold text-[24pt] mb-4 leading-tight max-w-4xl mx-auto">
        We understand the challenges children face in developing strong reading skills.
      </h2>
      
      {/* Body text */}
      <p className="max-w-9xl mx-auto text-[14pt] leading-relaxed">
        Our advanced digital cognitive therapy begins with a comprehensive assessment to identify your child's unique reading challenges and strengths. This tailored approach ensures that your child receives the targeted support they need to enhance their reading fluency, comprehension, and focus, helping them thrive academically.
      </p>

      {/* Bottom Image (Overlapping) */}
      <div
        className="absolute bottom-0 left-0 w-full h-[35rem] bg-cover bg-center"
        style={{
          backgroundImage: `url(${bottomFullImage})`,
          backgroundSize: '85%',
        }}
      ></div>
    </section>
  );
};

export default About;
