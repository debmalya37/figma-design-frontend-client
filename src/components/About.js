import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-orange-500 text-white text-center py-16 px-4 h-96 pt-16 font-helvetica">
      {/* Title with emphasis */}
      <h2 className="font-bold text-24pt mb-4 leading-tight">
        We understand the challenges children face in developing strong reading skills.
      </h2>
      
      {/* Body text */}
      <p className="max-w-2xl mx-auto text-14pt leading-relaxed">
        Our advanced digital cognitive therapy begins with a comprehensive assessment to identify your child's unique reading challenges and strengths. This tailored approach ensures that your child receives the targeted support they need to enhance their reading fluency, comprehension, and focus, helping them thrive academically.
      </p>
    </section>
  );
};

export default About;
