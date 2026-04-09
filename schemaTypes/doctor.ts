export default {
    name: "doctor", // ✅ FIXED
    title: "Doctors By Department",
    type: "document",
  
    fields: [
      // 👨‍⚕️ Name
      {
        name: "name",
        title: "Doctor Name",
        type: "string",
        validation: (Rule: any) => Rule.required(),
      },
  
      // 🎓 Qualification
      {
        name: "qualification",
        title: "Qualification",
        type: "string",
      },
  
      // ⏰ Timing
      {
        name: "timing",
        title: "Timing",
        type: "string",
      },
  
      // 🖼️ Image
      {
        name: "image",
        title: "Doctor Image",
        type: "image",
        options: { hotspot: true },
      },
  
      // 📝 Description
      {
        name: "description",
        title: "Description",
        type: "text",
      },
  
      // ⭐ Expertise
      {
        name: "expertise",
        title: "Expertise",
        type: "array",
        of: [{ type: "string" }],
      },
  
      // 💼 Experience
      {
        name: "experience",
        title: "Experience",
        type: "array",
        of: [{ type: "text" }],
      },
  
      // 🔥 Department Slug (ALL 21)
      {
        name: "departmentSlug",
        title: "Department",
        type: "string",
        options: {
          list: [
            { title: "General Medicine", value: "general-medicine" },
            { title: "Gynaecology", value: "gynaecology" },
            { title: "Pediatrics", value: "pediatrics" },
            { title: "Orthopedics", value: "orthopedics" },
            { title: "Radio Diagnosis", value: "radio-diagnosis" },
            { title: "ENT (Ear, Nose & Throat)", value: "ent" },
            { title: "Dentistry", value: "dentistry" },
            { title: "Physiotherapy", value: "physiotherapy" },
            { title: "Casualty (Emergency & Trauma Care)", value: "casualty" },
            { title: "Cardiology", value: "cardiology" },
            { title: "Urology", value: "urology" },
            { title: "Neurology", value: "neurology" },
            { title: "Nephrology", value: "nephrology" },
            { title: "General Surgery", value: "general-surgery" },
            { title: "Dermatology", value: "dermatology" },
            { title: "Pulmonology", value: "pulmonology" },
            { title: "Ophthalmology", value: "ophthalmology" },
            { title: "Psychology", value: "psychology" },
            { title: "Nutrition", value: "nutrition" },
            { title: "Anaesthesiology", value: "anaesthesiology" },
            { title: "Gastroenterology", value: "gastroenterology" },
          ],
          layout: "dropdown",
        },
        validation: (Rule: any) => Rule.required(),
      },
    ],
  
    // 👀 Preview in CMS
    preview: {
      select: {
        title: "name",
        subtitle: "departmentSlug",
        media: "image",
      },
    },
  };