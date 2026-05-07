import { useState } from "react";
import { useForm } from "react-hook-form";
import { ChevronLeft, ChevronRight, Check, Upload, X, FileText, CheckCircle } from "lucide-react";
import { SEOHead } from '../../components/SEOHead';
import React from 'react';
import FileUploadField from "../../components/ui/fileupload";

const TAMIL_NADU_DISTRICTS = [
  "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri",
  "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur",
  "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam", "Namakkal", "Nilgiris",
  "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivagangai",
  "Tenkasi", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli",
  "Tirupathur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"
];

const BUSINESS_CATEGORIES = [
  "Plumbing", "Electrical", "Carpentry", "Painting", "Cleaning", "Pest Control",
  "Appliance Repair", "AC Service", "Photography", "Catering", "Event Planning",
  "Interior Design", "Landscaping", "Moving Services", "Other"
];

const ID_PROOF_TYPES = ["Aadhaar", "PAN Card", "Passport", "Driving License", "Voter ID"];

interface FormData {
  //bussiness
  businessName: string;
  ownerName: string;
  businessType: string;
  gstNumber: string;
  experience: string;
  //contact
  email: string;
  phone: string;
  alternatePhone: string;
  city: string;
  serviceAreas: string[];
  //service
  category: string;
  description: string;
  travelAvailable: boolean;
  //portfolio
  portfolioImages: FileList | null;
  website: string;
  instagram: string;
  youtube: string;
  //documents
  idProof: FileList | null;
  idProofType: string;
  businessLicense: FileList | null;
  gstCertificate: FileList | null;
  agree: boolean;

}


export default function App() {
  const [step, setStep] = useState(1);
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const { register, handleSubmit,reset, trigger, formState: { errors }, watch, setValue } = useForm<FormData>({
    defaultValues: {
      businessType: "individual",
      travelAvailable: false,
      serviceAreas: [],
      agree: false
    }
  });
  

  const businessType = watch("businessType");
  const gstNumber = watch("gstNumber");
  const travelAvailable = watch("travelAvailable");
  const agree = watch("agree");

  const onSubmit = (data: FormData) => {
    console.log({ ...data, serviceAreas: selectedAreas });
    alert("Form submitted! Check console for data.");
    reset();
    setStep(1);
  };

  const toggleArea = (area: string) => {
    setSelectedAreas(prev =>
      prev.includes(area)
        ? prev.filter(a => a !== area)
        : [...prev, area]
    );
  };

  const steps = [
    { number: 1, title: 'Bussiness Info', description: 'Enter your details' },
    { number: 2, title: 'Contact Info', description: 'Create your account' },
    { number: 3, title: 'Service Details', description: 'Choose your settings' },
    { number: 4, title: 'Portfolio', description: 'Verify your identity' },
    { number: 5, title: 'Upload Documents', description: 'Add payment method' },
    { number: 6, title: 'Review', description: 'Finish setup' },
  ];



  const onError = (errors: any) => {
    const firstError = Object.keys(errors)[0];
    const el = document.querySelector(`[name="${firstError}"]`);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const inputClass = `w-full px-4 py-2 border rounded-lg 
             focus:ring-2 focus:ring-indigo-500 focus:border-transparent
              transition-all duration-200 `;
  const validateStep = async () => {
    let fieldsToValidate: (keyof FormData)[] = [];

    switch (step) {
      case 1:
        fieldsToValidate = ["businessName", "ownerName", "experience"];
        break;
      case 2:
        fieldsToValidate = ["email", "phone", "city"];
        if (selectedAreas.length === 0) {
          alert("Please select at least one service area");
          return false;
        }
        break;
      case 3:
        fieldsToValidate = ["category", "description"];
        break;
      case 4:
        return true; // optional step
      case 5:
        fieldsToValidate = ["idProofType", "idProof"];
        if (gstNumber && !watch("gstCertificate")) {
          alert("GST Certificate is required if GST number is provided");
          return false;
        }
        break;
      default:
        return true;
    }

    const result = await trigger(fieldsToValidate);
    return result;
  };
  const isStepValid = Object.keys(errors).length === 0;


  // Inside your component
  const portfolioImages = watch("portfolioImages");
  const [previews, setPreviews] = React.useState<{ id: string; url: string; file: File }[]>([]);

  // Handle File Changes & Create Previews
  const handlePortfolioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    // Limit to 10 images total
    const nextFiles = [...previews.map(p => p.file), ...files].slice(0, 10);

    // Revoke old URLs to prevent memory leaks
    previews.forEach(p => URL.revokeObjectURL(p.url));

    const newPreviews = nextFiles.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      url: URL.createObjectURL(file),
      file
    }));

    setPreviews(newPreviews);
    setValue("portfolioImages", nextFiles);
  };

  // Remove Image Logic
  const removeImage = (id: string) => {
    const filtered = previews.filter(p => {
      if (p.id === id) URL.revokeObjectURL(p.url);
      return p.id !== id;
    });
    setPreviews(filtered);
    setValue("portfolioImages", filtered.map(p => p.file));
  };


  return (
    <div className="relative min-h-screen bg-gray-50">
      <SEOHead
        title="Gallery"
        description="Browse our portfolio of beautifully executed South Indian events, weddings, and cultural celebrations."
        keywords="event gallery, wedding photos, south indian weddings, event decoration"
      />
      <section className="relative py-12 bg-gradient-to-br from-[#8B0000] to-[#4A0000] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif mb-6">
            <span className="text-[#D4AF37]">Vendor Registration</span>
          </h1>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We welcomes skilled professionals. we encourage you to apply. Join us in connecting with customers and growing your business through our platform.
          </p>
        </div>
      </section>

      <div className="size-full flex items-center justify-center bg-gray-300 p-8">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">

          <div className="mb-12">
            <div className="flex items-center justify-between relative">
              {/* Progress Line */}
              <div className="absolute top-5 left-0 right-0 h-0.5 bg-slate-200 -z-10">
                <div
                  className="h-full bg-blue-600 transition-all duration-300"
                  style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
                />
              </div>

              {/* Steps */}
              {steps.map((s) => (
                <div key={s.number} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all
                       duration-300 ${step > s.number
                        ? 'bg-blue-600 text-white'
                        : step === s.number
                          ? 'bg-blue-600 text-white ring-4 ring-blue-100'
                          : 'bg-white border-2 border-slate-300 text-slate-400'
                      }`}
                  >
                    {step > s.number ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <span>{s.number}</span>
                    )}
                  </div>
                  <div className="mt-2 text-center">
                    <p className={`text-sm ${s.number <= step ? 'text-slate-800' : 'text-slate-400'}`}>
                      {s.title}
                    </p>
                  </div>
                </div>
              ))}


            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit, onError)}>
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Business Information</h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("businessName", { required: "Business name is required" })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter your business name"
                  />
                  {errors.businessName && (
                    <p className="text-red-500 text-sm mt-1">{errors.businessName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Owner Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("ownerName", { required: "Owner name is required" })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter owner's full name"
                  />
                  {errors.ownerName && (
                    <p className="text-red-500 text-sm mt-1">{errors.ownerName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Type <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center cursor-pointer">
                      <input
                        {...register("businessType")}
                        type="radio"
                        value="individual"
                        className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-gray-700">Individual</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        {...register("businessType")}
                        type="radio"
                        value="partnership"
                        className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-gray-700">Partnership</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    GST Number <span className="text-gray-500 text-xs">(Optional)</span>
                  </label>
                  <input
                    {...register("gstNumber", {
                      pattern: {
                        value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
                        message: "Invalid GST number format"
                      }
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="e.g., 22AAAAA0000A1Z5"
                  />
                  {errors.gstNumber && (
                    <p className="text-red-500 text-sm mt-1">{errors.gstNumber.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("experience", { required: "Experience is required" })}
                    type="number"
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter years of experience"
                  />
                  {errors.experience && (
                    <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>
                  )}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Invalid phone number (10 digits required)"
                      }
                    })}
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="9876543210"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Alternate Phone <span className="text-gray-500 text-xs">(Optional)</span>
                  </label>
                  <input
                    {...register("alternatePhone", {
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Invalid phone number (10 digits required)"
                      }
                    })}
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="9876543210"
                  />
                  {errors.alternatePhone && (
                    <p className="text-red-500 text-sm mt-1">{errors.alternatePhone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("city", { required: "City is required" })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter your city"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Areas <span className="text-red-500">*</span>
                  </label>
                  <p className="text-sm text-gray-500 mb-3">Select all districts you provide service to</p>
                  <div className="border border-gray-300 rounded-lg p-4 max-h-64 overflow-y-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {TAMIL_NADU_DISTRICTS.map((district) => (
                        <label
                          key={district}
                          className={`flex items-center px-3 py-2 rounded cursor-pointer transition-colors ${selectedAreas.includes(district)
                            ? "bg-[#D4AF37] text-white border-[#D4AF37]"
                            : "bg-gray-50 border border-gray-200 hover:bg-gray-100"
                            }`}
                        >
                          <input
                            type="checkbox"
                            checked={selectedAreas.includes(district)}
                            onChange={() => toggleArea(district)}
                            className="w-4 h-4 text-[#D4AF37] focus:ring-[#D4AF37] rounded"
                          />
                          <span className="ml-2 text-sm text-gray-700">{district}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  {selectedAreas.length > 0 && (
                    <p className="text-sm text-gray-600 mt-2">{selectedAreas.length} districts selected</p>
                  )}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Service Details</h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register("category", { required: "Category is required" })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="">Select a category</option>
                    {BUSINESS_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    {...register("description", {
                      required: "Description is required",
                      minLength: { value: 10, message: "Description must be at least 10 characters" }
                    })}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                    placeholder="Describe your services in detail (minimum 50 characters)"
                  />
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                  )}
                </div>

                <div className="flex items-center">
                  <input
                    {...register("travelAvailable")}
                    type="checkbox"
                    className="w-5 h-5 text-indigo-600 focus:ring-indigo-500 rounded"
                  />
                  <label className="ml-3 text-sm font-medium text-gray-700">
                    I am available to travel to customer locations
                  </label>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <header>
                  <h2 className="text-2xl font-bold text-gray-900">Portfolio & Social Media</h2>
                  <p className="text-sm text-gray-500 mt-1">Showcase your work and connect your social presence.</p>
                </header>

                {/* Portfolio Upload Section */}
                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-gray-700">
                    Portfolio Images
                    <span className="text-gray-400 font-normal ml-2">(Max 10 images)</span>
                  </label>

                  {/* Upload Dropzone */}
                  {previews.length < 10 && (
                    <div className="relative group border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-indigo-500 hover:bg-indigo-50/30 transition-all cursor-pointer">
                      <Upload className="w-10 h-10 mx-auto text-gray-400 group-hover:text-indigo-500 mb-3 transition-colors" />
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={handlePortfolioChange}
                      />
                      <div className="space-y-1">
                        <p className="text-indigo-600 font-medium">Click to upload or drag and drop</p>
                        <p className="text-xs text-gray-500">PNG, JPG or JPEG (Max 5MB each)</p>
                      </div>
                    </div>
                  )}

                  {/* Image Preview Grid */}
                  {previews.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 pt-2">
                      {previews.map((item) => (
                        <div key={item.id} className="relative aspect-square group overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
                          <img
                            src={item.url}
                            alt="Portfolio preview"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          {/* Overlay with Remove Button */}
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <button
                              type="button"
                              onClick={() => removeImage(item.id)}
                              className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <hr className="border-gray-100" />

                {/* Social Links Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Website */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Website</label>
                    <input
                      {...register("website", {
                        pattern: { value: /^(https?:\/\/)?/, message: "Must be a valid URL" }
                      })}
                      placeholder="https://yourwebsite.com"
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                    />
                    {errors.website && <p className="text-red-500 text-xs mt-1">{errors.website.message as string}</p>}
                  </div>

                  {/* Instagram */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Instagram</label>
                    <div className="flex rounded-lg shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-100 text-gray-500 text-sm">
                        @
                      </span>
                      <input
                        {...register("instagram")}
                        placeholder="username"
                        className="flex-1 px-4 py-2.5 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {step === 5 && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Documents</h2>
                  <p className="text-gray-500 text-sm mt-1">Please upload the following documents to verify your business.</p>
                </div>

                {/* ID Proof Type Selection */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    ID Proof Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register("idProofType", { required: "Please select an ID type" })}
                    className={`w-full px-4 py-2.5 bg-white border rounded-xl transition-all outline-none focus:ring-2 ${errors.idProofType
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-indigo-100 focus:border-indigo-500"
                      }`}
                  >
                    <option value="">Select ID proof type</option>
                    {ID_PROOF_TYPES.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.idProofType && (
                    <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.idProofType.message}</p>
                  )}
                </div>

                {/* Document Upload Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* ID Proof Upload */}
                  <FileUploadField
                    label="Upload ID Proof"
                    name="idProof"
                    register={register}
                    error={errors.idProof}
                    required="ID proof is required"
                    watch={watch}
                    setValue={setValue}
                  />

                  {/* Business License Upload (Optional) */}
                  <FileUploadField
                    label="Business License"
                    subLabel="(Optional)"
                    name="businessLicense"
                    register={register}
                    error={errors.businessLicense}
                    watch={watch}
                    setValue={setValue}
                  />
                </div>

                {/* Conditional GST Upload */}
                {gstNumber && (
                  <div className="pt-4 border-t border-gray-100">
                    <FileUploadField
                      label="GST Certificate"
                      subLabel="(Required since GST is provided)"
                      name="gstCertificate"
                      register={register}
                      error={errors.gstCertificate}
                      required="GST Certificate is required"
                      watch={watch}
                      setValue={setValue}
                    />
                  </div>
                )}
              </div>
            )}
            {step === 6 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Review & Submit</h2>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-blue-800">
                    Please review all information carefully before submitting. You can go back to edit any section.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-gray-800">Business Information</h3>
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-indigo-600 hover:text-indigo-700 text-sm"
                      >
                        Edit
                      </button>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p><span className="font-medium">Business:</span> {watch("businessName")}</p>
                      <p><span className="font-medium">Owner:</span> {watch("ownerName")}</p>
                      <p><span className="font-medium">Type:</span> {watch("businessType")}</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-gray-800">Contact Information</h3>
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="text-indigo-600 hover:text-indigo-700 text-sm"
                      >
                        Edit
                      </button>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p><span className="font-medium">Email:</span> {watch("email")}</p>
                      <p><span className="font-medium">Phone:</span> {watch("phone")}</p>
                      <p><span className="font-medium">City:</span> {watch("city")}</p>
                      <p><span className="font-medium">Service Areas:</span> {selectedAreas.length} districts</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-gray-800">Service Details</h3>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="text-indigo-600 hover:text-indigo-700 text-sm"
                      >
                        Edit
                      </button>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p><span className="font-medium">Category:</span> {watch("category")}</p>
                      <p><span className="font-medium">Travel Available:</span> {travelAvailable ? "Yes" : "No"}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <label className="flex items-start cursor-pointer">
                    <input
                      {...register("agree", { required: "You must agree to the terms" })}
                      type="checkbox"
                      className="w-5 h-5 text-indigo-600 focus:ring-indigo-500 rounded mt-0.5"
                    />
                    <span className="ml-3 text-sm text-gray-700">
                      I agree to the <a href="#" className="text-indigo-600 hover:text-indigo-700">Terms & Conditions</a> and <a href="#" className="text-indigo-600 hover:text-indigo-700">Privacy Policy</a>. I confirm that all information provided is accurate and true.
                    </span>
                  </label>
                  {errors.agree && (
                    <p className="text-red-500 text-sm mt-1 ml-8">{errors.agree.message}</p>
                  )}
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8 pt-6 border-t">
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                disabled={step === 1}
                className="flex items-center px-6 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                Previous
              </button>

              {step < 6 ? (
                <button
                  type="button"
                  onClick={async () => {
                    const valid = await validateStep();
                    if (valid) setStep(step + 1);
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  className="flex items-center px-6 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Next
                  <ChevronRight className="w-5 h-5 ml-1" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!agree}
                  className="flex items-center px-8 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Check className="w-5 h-5 mr-2" />
                  Submit Application
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>

  );
}