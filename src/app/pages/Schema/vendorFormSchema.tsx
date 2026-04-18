const tamilNaduDistricts = [ "Chennai", "Coimbatore", "Madurai", "Trichy",
   "Salem", "Tirunelveli", "Erode", "Vellore", "Thoothukudi", "Dindigul",
    "Thanjavur", "Ranipet", "Cuddalore", "Kanchipuram", "Karur", "Nagapattinam", 
    "Namakkal", "Perambalur", "Pudukkottai", "Ramanathapuram", "Sivagangai", "Tenkasi",
     "Theni", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", 
     "Viluppuram", "Virudhunagar" ];

export const vendorFormSchema = [
  {
    section: "Business Info",
    fields: [
      { name: "businessName", label: "Business Name", type: "text", required: true },
      { name: "ownerName", label: "Owner Name", type: "text", required: true },
      {
        name: "businessType",
        label: "Business Type",
        type: "select",
        options: [
          { label: "Individual", value: "individual" },
          { label: "Partnership", value: "partnership" },
        ],
      },
      { name: "experience", label: "Experience (Years)", type: "number" },
    ],
  },

  {
    section: "Contact",
    fields: [
      { name: "email", label: "Email", type: "email", required: true },
      { name: "phone", label: "Phone", type: "text", required: true },
      { name: "city", label: "City", type: "text", required: true },
      {
        name: "serviceAreas",
        label: "Service Areas",
        type: "multiSelect",
        options: [ "Chennai", "Coimbatore", "Madurai", "Trichy",
   "Salem", "Tirunelveli", "Erode", "Vellore", "Thoothukudi", "Dindigul",
    "Thanjavur", "Ranipet", "Cuddalore", "Kanchipuram", "Karur", "Nagapattinam", 
    "Namakkal", "Perambalur", "Pudukkottai", "Ramanathapuram", "Sivagangai", "Tenkasi",
     "Theni", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", 
     "Viluppuram", "Virudhunagar" ],
      },
    ],
  },

  {
    section: "Services",
    fields: [
      {
        name: "category",
        label: "Category",
        type: "select",
        required: true,
        options: categories.map((c) => ({ label: c, value: c })),
      },
      {
        name: "description",
        label: "Description",
        type: "textarea",
      },
      {
        name: "travelAvailable",
        label: "Available for Travel",
        type: "checkbox",
      },
    ],
  },

  {
    section: "Portfolio",
    fields: [
      {
        name: "portfolioImages",
        label: "Upload Portfolio",
        type: "file",
        multiple: true,
        required: true,
      },
    ],
  },

  {
    section: "Documents",
    fields: [
      { name: "idProof", label: "ID Proof", type: "file", required: true },
      { name: "businessLicense", label: "Business License", type: "file" },
      { name: "gstCertificate", label: "GST Certificate", type: "file" },
    ],
  },

  {
    section: "Legal",
    fields: [
      {
        name: "agree",
        label: "I agree to Terms & Policies",
        type: "checkbox",
        required: true,
      },
    ],
  },
];