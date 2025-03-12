"use client"
import { useEffect , useState } from 'react';
import Image from "next/image";
import axios from "axios";
import { Button, Card, CardContent } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VerifiedIcon from "@mui/icons-material/Verified";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";


export default function Home() {


  const [about, setAbout] = useState([]);
  const [service, setService] = useState([]);
  console.log(about.image)

  useEffect(() => {

    axios.get("http://127.0.0.1:8000/api/about_service/aboutHome/").then((res) => setAbout(res.data));
    axios.get("http://127.0.0.1:8000/api/about_service/serviceHome/").then((res) => setService(res.data));
  }, []);


  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Your Health, Our Priority</h1>
          <p className="text-xl mb-8">
            Fast, accurate, and reliable diagnostic services for a healthier you.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
          {service.title} Our Services
          
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
           <p className="text-lg text-gray-700">
        
          <p>
    At <strong>Central Medicare Services</strong>, we are dedicated to providing top-quality healthcare services with <strong>advanced diagnostics, skilled medical professionals, and state-of-the-art technology</strong>. Our commitment to <strong>accuracy, affordability, and accessibility</strong> makes us a trusted choice for all diagnostic needs.
</p>
<p>
    We understand the importance of reliable health assessments, which is why we use the latest equipment and techniques to ensure that each test and consultation is carried out with the highest level of precision. Our <strong>team of expert doctors and technicians</strong> are here to guide you through every step of your healthcare journey, from initial assessments to post-test consultations.
</p>
<p>
    Whether it's routine health check-ups, specialized testing, or preventive care, we are committed to delivering <strong>personalized healthcare solutions</strong> tailored to your unique needs. We also prioritize <strong>patient comfort and confidentiality</strong>, ensuring a safe, welcoming environment for all visitors.
</p>
<p>
    With a focus on making healthcare services affordable and easily accessible, we aim to bridge the gap between advanced medical care and the community. At Central Medicare Services, we are not just about diagnosing health conditions—we are about providing holistic care that empowers our patients to take control of their health and well-being.
</p>
<p>
    We take pride in being a trusted partner in your healthcare journey, offering both immediate care and long-term solutions to support a healthier future.
</p>
          </p>
      </div>

      {/* About Us Section */}
      <section className="py-16 px-6 bg-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#004aad] mb-6">{about.title}About</h2>
          <p className="text-lg text-gray-700">
          "At <strong>Central Medicare Services</strong>, we are dedicated to providing top-quality healthcare services with <strong>advanced diagnostics, skilled medical professionals, and state-of-the-art technology</strong>. Our commitment to <strong>accuracy, affordability, and accessibility</strong> makes us a trusted choice for all diagnostic needs. We understand the importance of reliable health assessments, which is why we use the latest equipment and techniques to ensure that each test and consultation is carried out with the highest level of precision.

Our <strong>team of expert doctors and technicians</strong> are here to guide you through every step of your healthcare journey, from initial assessments to post-test consultations. Whether it's routine health check-ups, specialized testing, or preventive care, we are committed to delivering <strong>personalized healthcare solutions</strong> tailored to your unique needs.

We also prioritize <strong>patient comfort and confidentiality</strong>, ensuring a safe, welcoming environment for all visitors. With a focus on making healthcare services affordable and easily accessible, we aim to bridge the gap between advanced medical care and the community.

At Central Medicare Services, we are not just about diagnosing health conditions—we are about providing holistic care that empowers our patients to take control of their health and well-being. We take pride in being a trusted partner in your healthcare journey, offering both immediate care and long-term solutions to support a healthier future."
          </p>
          <Image
            src="/about-us-page-generator.webp"
            alt="About Us Image"
            width={600}
            height={300}
            className="rounded-lg mx-auto mt-6 shadow-md"
          />
        </div>
      </section>
     

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-[#004aad] text-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <VerifiedIcon fontSize="large" className="text-[#004aad]" />, title: "Accurate Reports", text: "We use the latest diagnostic technology to ensure 100% precision in test results." },
              { icon: <MedicalServicesIcon fontSize="large" className="text-[#004aad]" />, title: "Expert Doctors", text: "Our specialists and lab technicians are highly trained and experienced." },
              { icon: <HealthAndSafetyIcon fontSize="large" className="text-[#004aad]" />, title: "Affordable Pricing", text: "Get high-quality diagnostics at competitive prices, making healthcare accessible." },
              { icon: <AccessTimeIcon fontSize="large" className="text-[#004aad]" />, title: "Fast Results", text: "We deliver same-day test reports for most services." },
            ].map((item, index) => (
              <Card key={index} sx={{ bgcolor: "white", color: "black", boxShadow: 3, textAlign: "center", p: 2 }}>
                <CardContent className="flex flex-col items-center">
                  {item.icon}
                  <h3 className="text-xl font-semibold mt-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Technology & Equipment */}
      <section className="py-16 px-6 bg-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#004aad] mb-6">
            Latest Technology & Equipment
          </h2>
          <p className="text-lg text-gray-700">
            We utilize cutting-edge technology such as <strong>digital imaging, automated lab machines, and AI-powered diagnostics</strong> to ensure <strong>fast, accurate, and efficient testing</strong>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              { src: "/lab.jpg", alt: "Bio Chemistry", title: "Bio Chemistry" },
              { src: "/x-ray.jpg", alt: "X-Ray", title: "Digital X-Ray" },
              { src: "/ultra.webp", alt: "Ultrasound", title: "3D Ultrasound" },
            ].map((item, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                <Image src={item.src} alt={item.alt} width={400} height={250} className="rounded-lg" />
                <h3 className="text-xl font-semibold mt-3">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 24/7 Emergency Services */}
      <section className="py-16 px-6 bg-[#ffcc00] text-black text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">24/7 Emergency Services</h2>
          <p className="text-lg text-gray-800">
            We provide <strong>round-the-clock emergency diagnostics</strong> for urgent medical conditions. Whether it's a <strong>midnight blood test or an immediate X-ray</strong>, our team is ready to assist.
          </p>
          <div className="flex justify-center mt-6">
            <Button
              variant="contained"
              sx={{ bgcolor: "#004aad", color: "white", "&:hover": { bgcolor: "#003580" } }}
            >
              Call Now: +8801725947656
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
