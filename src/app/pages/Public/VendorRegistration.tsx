import { useState } from "react";
import { useForm } from "react-hook-form";
import { ChevronLeft, ChevronRight, Upload, X, Check } from "lucide-react";

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
  businessName: string;
  ownerName: string;
  businessType: string;
  gstNumber: string;
  experience: string;
  email: string;
  phone: string;
  alternatePhone: string;
  city: string;
  serviceAreas: string[];
  category: string;
  description: string;
  travelAvailable: boolean;
  portfolioImages: FileList | null;
  website: string;
  instagram: string;
  youtube: string;
  idProof: FileList | null;
  idProofType: string;
  businessLicense: FileList | null;
  gstCertificate: FileList | null;
  agree: boolean;
}

export default function ServiceProviderForm() {
  const [step, setStep] = useState(1);
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<FormData>({
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
  };

  const toggleArea = (area: string) => {
    setSelectedAreas(prev =>
      prev.includes(area)
        ? prev.filter(a => a !== area)
        : [...prev, area]
    );
  };

  const steps = [
    { number: 1, title: "Business Info" },
    { number: 2, title: "Contact" },
    { number: 3, title: "Services" },
    { number: 4, title: "Portfolio" },
    { number: 5, title: "Documents" },
    { number: 6, title: "Review" }
  ];

  return (
    <div className="min-h-screen bg-[#D4AF37] py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <div className="flex items-center justify-between relative">


            {steps.map((s, idx) => (
              <div key={s.number} className="flex-1 flex flex-col items-center relative z-10">

                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold transition-all
                   ${step > s.number
                      ? "bg-green-600 text-white"
                      : step === s.number
                        ? "bg-indigo-600 text-white scale-110"
                        : "bg-gray-300 text-gray-600"
                    }`}
                >
                  {step > s.number ? <Check className="w-4 h-4" /> : s.number}
                </div>

                <span className="text-[10px] sm:text-xs mt-2 text-center px-1">
                  {s.title}
                </span>
              </div>
            ))}
            {/* Line */}
            <div className="absolute top-5 left-0 right-0 h-1 bg-gray-300 z-0" />

          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <form onSubmit={handleSubmit(onSubmit)}>
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
                              ? "bg-indigo-100 border border-indigo-500"
                              : "bg-gray-50 border border-gray-200 hover:bg-gray-100"
                            }`}
                        >
                          <input
                            type="checkbox"
                            checked={selectedAreas.includes(district)}
                            onChange={() => toggleArea(district)}
                            className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 rounded"
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
                      minLength: { value: 50, message: "Description must be at least 50 characters" }
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
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Portfolio & Social Media</h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Portfolio Images <span className="text-gray-500 text-xs">(Optional - Max 10 images)</span>
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-indigo-500 transition-colors">
                    <Upload className="w-12 h-12 mx-auto text-gray-400 mb-3" />
                    <input
                      {...register("portfolioImages")}
                      type="file"
                      multiple
                      accept="image/*"
                      className="hidden"
                      id="portfolio-upload"
                    />
                    <label htmlFor="portfolio-upload" className="cursor-pointer">
                      <span className="text-indigo-600 hover:text-indigo-700 font-medium">Click to upload</span>
                      <span className="text-gray-600"> or drag and drop</span>
                    </label>
                    <p className="text-sm text-gray-500 mt-2">PNG, JPG, JPEG up to 5MB each</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Website <span className="text-gray-500 text-xs">(Optional)</span>
                  </label>
                  <input
                    {...register("website", {
                      pattern: {
                        value: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
                        message: "Invalid URL"
                      }
                    })}
                    type="url"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="https://yourwebsite.com"
                  />
                  {errors.website && (
                    <p className="text-red-500 text-sm mt-1">{errors.website.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Instagram <span className="text-gray-500 text-xs">(Optional)</span>
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-4 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg text-gray-600">
                      @
                    </span>
                    <input
                      {...register("instagram")}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="yourusername"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    YouTube Channel <span className="text-gray-500 text-xs">(Optional)</span>
                  </label>
                  <input
                    {...register("youtube")}
                    type="url"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="https://youtube.com/@yourchannel"
                  />
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Documents</h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ID Proof Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register("idProofType", { required: "ID proof type is required" })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="">Select ID proof type</option>
                    {ID_PROOF_TYPES.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.idProofType && (
                    <p className="text-red-500 text-sm mt-1">{errors.idProofType.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload ID Proof <span className="text-red-500">*</span>
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-indigo-500 transition-colors">
                    <Upload className="w-10 h-10 mx-auto text-gray-400 mb-2" />
                    <input
                      {...register("idProof", { required: "ID proof is required" })}
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="hidden"
                      id="id-proof-upload"
                    />
                    <label htmlFor="id-proof-upload" className="cursor-pointer">
                      <span className="text-indigo-600 hover:text-indigo-700 font-medium">Upload document</span>
                    </label>
                    <p className="text-sm text-gray-500 mt-1">PDF, JPG, PNG up to 5MB</p>
                  </div>
                  {errors.idProof && (
                    <p className="text-red-500 text-sm mt-1">{errors.idProof.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business License <span className="text-gray-500 text-xs">(Optional)</span>
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-indigo-500 transition-colors">
                    <Upload className="w-10 h-10 mx-auto text-gray-400 mb-2" />
                    <input
                      {...register("businessLicense")}
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="hidden"
                      id="license-upload"
                    />
                    <label htmlFor="license-upload" className="cursor-pointer">
                      <span className="text-indigo-600 hover:text-indigo-700 font-medium">Upload document</span>
                    </label>
                    <p className="text-sm text-gray-500 mt-1">PDF, JPG, PNG up to 5MB</p>
                  </div>
                </div>

                {gstNumber && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      GST Certificate <span className="text-gray-500 text-xs">(Required if GST number provided)</span>
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-indigo-500 transition-colors">
                      <Upload className="w-10 h-10 mx-auto text-gray-400 mb-2" />
                      <input
                        {...register("gstCertificate")}
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="hidden"
                        id="gst-upload"
                      />
                      <label htmlFor="gst-upload" className="cursor-pointer">
                        <span className="text-indigo-600 hover:text-indigo-700 font-medium">Upload certificate</span>
                      </label>
                      <p className="text-sm text-gray-500 mt-1">PDF, JPG, PNG up to 5MB</p>
                    </div>
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
                  onClick={() => setStep(step + 1)}
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
