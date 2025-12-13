

export default function Services() {
  const services = [
    {
      title: "Paediatric Physiotherapy",
      desc: "The primary goal of occupational therapy is to enable children to participate in meaningful daily activities that support independence and confidence.",
      
    },
    {
      title: "Cerebral Palsy Therapy",
      desc: "Physical therapy helps children improve muscle strength, balance, coordination, and endurance for better mobility and daily functioning.",
      
    },
    {
      title: "DMI Therapy(Dynamic Movement Intervention)",
      desc: "Sensory integration therapy helps children process sensory information effectively to improve learning, behavior, and daily life skills.",
      
    },
    {
      title: "Early Intervention Program",
      desc: "Sensory integration therapy helps children process sensory information effectively to improve learning, behavior, and daily life skills.",
      
    },
    {
      title: "Hand Functions & Fine Motor Training",
      desc: "Sensory integration therapy helps children process sensory information effectively to improve learning, behavior, and daily life skills.",
      
    },
    {
      title: "Special Education ",
      desc: "Sensory integration therapy helps children process sensory information effectively to improve learning, behavior, and daily life skills.",
      
    },
    {
      title: "Speech Therapy ",
      desc: "Sensory integration therapy helps children process sensory information effectively to improve learning, behavior, and daily life skills.",
      
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Services
        </h2>

        {/* CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>

                {/* OPTIONAL BUTTON */}
                <button className="mt-4 text-blue-600 font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
// import service1 from "../assets/service1.jpg";
// import service2 from "../assets/service2.jpg";
// import service3 from "../assets/service3.jpg";

// export default function Services() {
//   const services = [
//     {
//       title: "Paediatric Occupational Therapy",
//       desc: "The primary goal of occupational therapy is to enable children to participate in meaningful daily activities that support independence and confidence.",
//       img: service1,
//     },
//     {
//       title: "Paediatric Physical Therapy",
//       desc: "Physical therapy helps children improve muscle strength, balance, coordination, and endurance for better mobility and daily functioning.",
//       img: service2,
//     },
//     {
//       title: "Sensory Integration Therapy",
//       desc: "Sensory integration therapy helps children process sensory information effectively to improve learning, behavior, and daily life skills.",
//       img: service3,
//     },
//   ];

//   return (
//     <section className="bg-gray-50 py-20">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* HEADING */}
//         <h2 className="text-4xl font-bold text-center mb-12">
//           Services
//         </h2>

//         {/* CARD GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
//             >
//               {/* IMAGE */}
//               <img
//                 src={service.img}
//                 alt={service.title}
//                 className="w-full h-56 object-cover"
//               />

//               {/* CONTENT */}
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-3">
//                   {service.title}
//                 </h3>

//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   {service.desc}
//                 </p>

//                 {/* OPTIONAL BUTTON */}
//                 <button className="mt-4 text-blue-600 font-medium hover:underline">
//                   Read More →
//                 </button>
//               </div>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
//}
