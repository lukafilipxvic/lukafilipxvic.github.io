import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      setIsDesktop(window.innerWidth > 1024);
    }
  }, []);

  return (
    <Layout
      description="I am a recent raduate with a Bachelor of Finance who is insanely passionate about innovation and technology."
    >
      <main>
        <div className="mx-auto mt-16 flex flex-col px-3 text-left md:mt-10">
          <h1 className="h1 !mb-2">
            Hello, I'm Luka 👋
            </h1>
          <div className="text-pretty mb-8">
            <p> I'm a recent graduate with a Bachelor of Finance in Capital Markets and International Business.
            I am insanely passionate about innovation and technology, particularly automation and finance.
            </p>
            </div>
          <h1 className="_h1 !mb-1 ">
            My Mission
          </h1>
          <div className="text-pretty mb-8">
            I am a passionate advocate for purpose-driven people because it is a quality that sparks meaningful contributions and forsters positive impacts to everyone. <br />
            I am a strong advocate for lifelong learning.
          </div>
          <h1 className="_h1 !mb-1 ">
            Current Work.
          </h1>
          <div className="text-pretty mb-8">
          I'm an Analyst at MinterEllison <span className="ml-[-2px]" style={{color: '#939598'}}>Consulting</span> <span className="ml-[-2px]" style={{ display: 'inline-block', width: '4px', height: '4px', backgroundColor: '#cc2230'}}></span>            <br />
            <br />
            On the side, I am learning fastapi to build APIs for niche use cases. 
          </div>
        </div>
      </main>
    </Layout>
  );
}